const path = require('path')
let htmlparser = require("htmlparser2")
const util = require('util')
const fs = require('fs')
const natural = require("natural")

const loadTheses = async () => {
    const readFile = util.promisify(fs.readFile)
    const filePath = path.join(__dirname, "theses.html")
    let theses = await readFile(filePath, { encoding: 'utf-8' })
    return theses
}

const parseTheses = async theses => {
    let parsedTheses = []
    try {
        let handler = new htmlparser.DomHandler(function (error, dom) {
            if (error) throw new Error(error)
            /*
            * Instructions:
            * Get a file with thesis on ESTUDANTE -> Candidatura a Dissertação -> Available Proposals
            * Delete everything above the theses' beggining on <tbody>. Delete everything after </tbody>
            * */
            let tableBody = dom[1]

            tableBody.children.forEach((element) => {
                if (element.type === "tag" && element.name === "tr") {

                    let oneThesis = {
                        id: "",
                        title: "",
                        supervisors: "",
                        vacancies: "",
                        location: "",
                        courses: "",
                        observations: "",
                        objectives: "",
                        status: "",
                        requirements: "",
                        areas: "",
                        type: ""
                    }

                    //contém os td's com info
                    let trChild = element.children

                    //We have td's in iterations 1,3,5,7,9,11
                    let i = 0
                    //Entre texto (espaços) e tds, trChild tem 13 elementos
                    //há 6 td's, alguns com info nested
                    trChild.forEach((subelement) => {
                        if (subelement.type === "tag" && subelement.name === "td") {
                            if (i === 1) oneThesis.id = subelement.children[0].data
                            if (i === 3) oneThesis.title = subelement.children[0].data
                            if (i === 5) {
                                let elementsNumber = subelement.children.length
                                let arraySupervisors = []
                                for (let j = 1; j < elementsNumber; j = j + 2)
                                    arraySupervisors.push(subelement.children[j].children[0].data);
                                oneThesis.supervisors = arraySupervisors
                            }
                            if (i === 7) oneThesis.vacancies = subelement.children[0].data
                            if (i === 9) {
                                let status = subelement.children[1].children[0].data;
                                if (status === "Not assigned")
                                    status = "Unassigned";
                                oneThesis.status = status;
                            }
                            if (i === 11) {
                                //TODO: Impact of \n and \t at FE. Remove?
                                let info = subelement.children[1].children[3].children[5];

                                let observations = info.attribs["data-observations"];
                                if (observations)
                                    observations = observations.replace("\t", ": ");
                                oneThesis.observations = observations;

                                let requirements = info.attribs["data-requirements"];
                                if (requirements) {
                                    requirements = requirements.replace("\t", ": ");
                                    requirements = requirements.replace("\n", "");
                                }
                                oneThesis.requirements = requirements;
                                oneThesis.objectives = info.attribs["data-goals"]
                                oneThesis.location = info.attribs["data-localization"]
                                oneThesis.courses = info.attribs["data-degrees"]
                            }
                        }
                        //Last iteration, push thesis to array.
                        if (i === 12) parsedTheses.push(oneThesis)
                        i++
                    })
                }
            })
        }, { normalizeWhitespace: true, withStartIndices: true })
        let parser = new htmlparser.Parser(handler)
        parser.write(theses)
        parser.end()
        return parsedTheses
    } catch (e) {
        throw new Error(e)
    }
}

const trainClassifier = async () => {
    /*
    * This classifier assumes one area of specialization per professor.
    * When the classifier is receiving a criteria to proceed to the classification, there is a problem:
    *   As the professor's names are stemmed and each name is separated (constituting a unique name per se),
    *       It makes the classifier consider David De Matos and Ana Matos as having a similarity (surname), thus conficting the classification process
    *
    * Quick-fix:
    * -Make professors' names unique (chosen technique) or:
    * -Cross classify using keywords
    * */

    //var PorterStemmer = natural.PorterStemmer;
    let specClassifier = new natural.BayesClassifier()
    //natural.PorterStemmer.attach();

    specClassifier.addDocument("Natural Language Processing", "Language and Information Technologies");
    specClassifier.addDocument("Laboratório de Sistemas de Língua Falada - L2F (INESC-ID Lisboa)", "Language and Information Technologies");
    specClassifier.addDocument("fixed expressions", "Language and Information Technologies");
    specClassifier.addDocument("popular sayings", "Language and Information Technologies");
    specClassifier.addDocument("speech therapy", "Language and Information Technologies");

    specClassifier.addDocument("Nuno_Mamede", "Language and Information Technologies");
    specClassifier.addDocument("Nuno_João_Neves_Mamede", "Language and Information Technologies");
    specClassifier.addDocument("David_Martins_de_Matos", "Language and Information Technologies");
    specClassifier.addDocument("Luísa_Coheur", "Language and Information Technologies");
    specClassifier.addDocument("Alberto_Abad", "Language and Information Technologies");
    specClassifier.addDocument("Alberto_Abad", "Language and Information Technologies");

    specClassifier.addDocument("Augmenting Rehabilitation", "Interaction and Visualization");
    specClassifier.addDocument("Virtual Reality", "Interaction and Visualization");
    specClassifier.addDocument("Design", "Interaction and Visualization");
    specClassifier.addDocument("Experience", "Interaction and Visualization");
    specClassifier.addDocument("AR", "Interaction and Visualization");
    specClassifier.addDocument("Flat Design", "Interaction and Visualization");
    specClassifier.addDocument("Sensing", "Interaction and Visualization");
    specClassifier.addDocument("Visualizing", "Interaction and Visualization");
    specClassifier.addDocument("3D", "Interaction and Visualization");
    specClassifier.addDocument("Modelation", "Interaction and Visualization");
    specClassifier.addDocument("hologram", "Interaction and Visualization");
    specClassifier.addDocument("realidade virtual", "Interaction and Visualization");
    specClassifier.addDocument("VR", "Interaction and Visualization");
    specClassifier.addDocument("Gamification", "Interaction and Visualization");
    specClassifier.addDocument("Virtual object", "Interaction and Visualization");

    specClassifier.addDocument("Joaquim_Jorge", "Interaction and Visualization");
    specClassifier.addDocument("Nuno_Nunes", "Interaction and Visualization");
    specClassifier.addDocument("Daniel_Jorge_Viegas_Gonçalves", "Interaction and Visualization");
    specClassifier.addDocument("João_Brisson", "Interaction and Visualization");
    specClassifier.addDocument("Alfredo_Ferreira", "Interaction and Visualization");
    specClassifier.addDocument("Jacinto_Carlos_Marques_Peixoto_do_Nascimento", "Interaction and Visualization");
    specClassifier.addDocument("Hugo_Nicolau", "Interaction and Visualization");
    specClassifier.addDocument("Sandra_Pereira_Gama", "Interaction and Visualization");

    specClassifier.addDocument("Password Quality", "Cyber-Security");
    specClassifier.addDocument("Bugs", "Cyber-Security");
    specClassifier.addDocument("Verification", "Cyber-Security");
    specClassifier.addDocument("Verificação", "Cyber-Security");
    specClassifier.addDocument("network fault injection", "Cyber-Security");
    specClassifier.addDocument("Security", "Cyber-Security");
    specClassifier.addDocument("breaking", "Cyber-Security");
    specClassifier.addDocument("Smart Contracts", "Cyber-Security");
    specClassifier.addDocument("smart card", "Cyber-Security");
    specClassifier.addDocument("blockchain", "Cyber-Security");
    specClassifier.addDocument("tls", "Cyber-Security");
    specClassifier.addDocument("Privacy", "Cyber-Security");
    specClassifier.addDocument("forensics", "Cyber-Security");

    specClassifier.addDocument("Miguel_Nuno_Dias_Alves_Pupo_Correia", "Cyber-Security");
    specClassifier.addDocument("Ricardo_Chaves", "Cyber-Security");
    specClassifier.addDocument("Pedro_Adão", "Cyber-Security");
    specClassifier.addDocument("Adão", "Cyber-Security");

    specClassifier.addDocument("GPU", "Algorithms and Applications");
    specClassifier.addDocument("Smart-Graphs", "Algorithms and Applications");
    specClassifier.addDocument("Constraint Logic", "Algorithms and Applications");
    specClassifier.addDocument("Graph Theory", "Algorithms and Applications");
    specClassifier.addDocument("Quantum computer", "Algorithms and Applications");
    specClassifier.addDocument("Computador quântico", "Algorithms and Applications");
    specClassifier.addDocument("code", "Algorithms and Applications");

    specClassifier.addDocument("José_Monteiro", "Algorithms and Applications");
    specClassifier.addDocument("Inês_Lynce", "Algorithms and Applications");
    specClassifier.addDocument("Vasco_Manquinho", "Algorithms and Applications");
    specClassifier.addDocument("Helena_Sofia_Andrade_Nunes_Pereira_Pinto", "Algorithms and Applications");
    specClassifier.addDocument("António_Paulo_Teles_de_Menezes_Correia_Leitão", "Algorithms and Applications");
    specClassifier.addDocument("Alexandre_Francisco", "Algorithms and Applications");
    specClassifier.addDocument("Luís_Russo", "Algorithms and Applications");
    specClassifier.addDocument("Ana_Almeida_Matos", "Algorithms and Applications");
    specClassifier.addDocument("Jan_Gunnar_Cederquist", "Algorithms and Applications");
    specClassifier.addDocument("Mikolas_Janota", "Algorithms and Applications");

    specClassifier.addDocument("NPC", "Games");
    specClassifier.addDocument("Digital", "Games");
    specClassifier.addDocument("Games", "Games");
    specClassifier.addDocument("Gamification", "Games");
    specClassifier.addDocument("Jogos", "Games");
    specClassifier.addDocument("tactically", "Games");

    specClassifier.addDocument("João_Miguel_De_Sousa_de_Assis_Dias", "Games");
    specClassifier.addDocument("Carlos_António_Roque_Martinho", "Games");
    specClassifier.addDocument("Rui_Filipe_Fernandes_Prada", "Games");
    specClassifier.addDocument("Carlos_Martinho", "Games");
    specClassifier.addDocument("João_Miguel_De_Sousa_de_Assis_Dias", "Games");

    specClassifier.addDocument("Digital Transformation", "Enterprise and Information Systems");
    specClassifier.addDocument("Enterprise Architecture", "Enterprise and Information Systems");
    specClassifier.addDocument("Support Services for Digital Operations Transformation", "Enterprise and Information Systems");
    specClassifier.addDocument("IT Project Management", "Enterprise and Information Systems");
    specClassifier.addDocument("Enterprise Architecture", "Enterprise and Information Systems");
    specClassifier.addDocument("Business Architecture", "Enterprise and Information Systems");
    specClassifier.addDocument("COBIT", "Enterprise and Information Systems");
    specClassifier.addDocument("BPMN", "Enterprise and Information Systems");
    specClassifier.addDocument("Modeling", "Enterprise and Information Systems");
    specClassifier.addDocument("Archimate", "Enterprise and Information Systems");
    specClassifier.addDocument("Startup", "Enterprise and Information Systems");
    specClassifier.addDocument("Business processes", "Enterprise and Information Systems");
    specClassifier.addDocument("ontology", "Enterprise and Information Systems");
    specClassifier.addDocument("ontologia", "Enterprise and Information Systems");
    specClassifier.addDocument("analysis", "Enterprise and Information Systems");
    specClassifier.addDocument("Gestão de dados", "Enterprise and Information Systems");

    specClassifier.addDocument("José_Manuel_Nunes_Salvador_Tribolet", "Enterprise and Information Systems");
    specClassifier.addDocument("Sérgio_Luís_Proença_Duarte_Guerreiro", "Enterprise and Information Systems");
    specClassifier.addDocument("Mário_Gaspar_da_Silva", "Enterprise and Information Systems");
    specClassifier.addDocument("Pedro_Manuel_Moreira_Vaz_Antunes_de_Sousa", "Enterprise and Information Systems");
    specClassifier.addDocument("José_Borbinha", "Enterprise and Information Systems");
    specClassifier.addDocument("Alberto_Silva", "Enterprise and Information Systems");
    specClassifier.addDocument("Miguel_Mira_da_Silva", "Enterprise and Information Systems");
    specClassifier.addDocument("André_Vasconcelos", "Enterprise and Information Systems");
    specClassifier.addDocument("Rui_António_Dos_Santos_Cruz", "Enterprise and Information Systems");
    specClassifier.addDocument("Sérgio_Luís_Proença_Duarte_Guerreiro", "Enterprise and Information Systems");

    specClassifier.addDocument("robots", "Intelligent Systems");
    specClassifier.addDocument("inteligente", "Intelligent Systems");
    specClassifier.addDocument("intelligent", "Intelligent Systems");
    specClassifier.addDocument("Machine Learning", "Intelligent Systems");
    specClassifier.addDocument("Service Support Bots", "Intelligent Systems");
    specClassifier.addDocument("behavior for robots", "Intelligent Systems");
    specClassifier.addDocument("Change Detection on Frequent Patterns", "Intelligent Systems");
    specClassifier.addDocument("Matching", "Intelligent Systems");
    specClassifier.addDocument("agents", "Intelligent Systems");
    specClassifier.addDocument("multi agent system", "Intelligent Systems");
    specClassifier.addDocument("autonomous agents", "Intelligent Systems");
    specClassifier.addDocument("bot", "Intelligent Systems");
    specClassifier.addDocument("chatbot", "Intelligent Systems");

    specClassifier.addDocument("Arlindo_Manuel_Limede_de_Oliveira", "Intelligent Systems");
    specClassifier.addDocument("Ana_Paiva", "Intelligent Systems");
    specClassifier.addDocument("Ernesto_Morgado", "Intelligent Systems");
    specClassifier.addDocument("Francisco_Correia_dos_Santos", "Intelligent Systems");
    specClassifier.addDocument("Manuel_Cabido_Lopes", "Intelligent Systems");
    specClassifier.addDocument("Helena_Galhardas", "Intelligent Systems");
    specClassifier.addDocument("Cláudia_Antunes", "Intelligent Systems");
    specClassifier.addDocument("Andreas_Miroslaus_Wichert", "Intelligent Systems");
    specClassifier.addDocument("Diogo_Ribeiro_Ferreira", "Intelligent Systems"); //More data science
    specClassifier.addDocument("Bruno_Emanuel_Da_Graça_Martins", "Intelligent Systems");
    specClassifier.addDocument("José_Alberto_Rodrigues_Pereira_Sardinha", "Intelligent Systems");
    specClassifier.addDocument("Francisco_Saraiva_de_Melo", "Intelligent Systems");
    specClassifier.addDocument("Anna_Carolina_Nametala_Finamore_do_Couto", "Intelligent Systems");

    specClassifier.addDocument("IoT", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("cache", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("blockchain", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Domotic", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Internet of Things", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Redes", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Networks", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("OpenCL", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("processor", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("P3", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("TCB", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Quantum computer", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Computador quântico", "Distributed and Cyberphysical Systems");

    specClassifier.addDocument("José_Manuel_da_Costa_Alves_Marques", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Luís_Eduardo_Teixeira_Rodrigues", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Rui_Policarpo_Duarte", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Horácio_Neto", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Rodrigo_Rodrigues", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("José_Monteiro", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Paulo_Jorge_Pires_Ferreira", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Luís_Veiga", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Paolo_Romano", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Alberto_Manuel_Ramos_da_Cunha", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Alberto Manuel Ramos da Cunha", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Renato_Jorge_Caleira_Nunes", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Nuno_Santos", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Miguel_Filipe_Leitão_Pardal", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("João_Pedro_Faria_Mendonça_Barreto", "Distributed and Cyberphysical Systems");
    specClassifier.addDocument("Miguel_Matos", "Distributed and Cyberphysical Systems");

    specClassifier.addDocument("healthcare", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Disease", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("doença", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("protein", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("proteina", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Medical", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("médica", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Clinical", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("dados biométricos", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Reconhecimento facial", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Saúde", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Health", "Bioinformatics and Computational Biology");

    specClassifier.addDocument("Arlindo_Manuel_Limede_de_Oliveira", "Bioinformatics and Computational Biology");
    specClassifier.addDocument("Rui_Henriques", "Bioinformatics and Computational Biology");

    specClassifier.addDocument("microservices architecture", "Software Engineering");
    specClassifier.addDocument("Framework", "Software Engineering");
    specClassifier.addDocument("Virtualization", "Software Engineering");
    specClassifier.addDocument("Dynamic API Invocation", "Software Engineering");
    specClassifier.addDocument("monolithic architecture", "Software Engineering");
    specClassifier.addDocument("Responsive Web Applications", "Software Engineering");
    specClassifier.addDocument("Service Virtualization Framework", "Software Engineering");
    specClassifier.addDocument("Mobile Application", "Software Engineering");
    specClassifier.addDocument("Mobile", "Software Engineering");
    specClassifier.addDocument("App", "Software Engineering");
    specClassifier.addDocument("RESTful Web APIs", "Software Engineering");

    specClassifier.addDocument("António_Rito_Silva", "Software Engineering");
    specClassifier.addDocument("João_Fernando_Ferreira", "Software Engineering");
    specClassifier.addDocument("João_F._Ferreira", "Software Engineering");
    specClassifier.addDocument("Pável_Pereira_Calado", "Software Engineering");
    specClassifier.addDocument("Rui_Maranhão", "Software Engineering");
    specClassifier.addDocument("Pedro_Reis_dos_Santos", "Software Engineering");
    specClassifier.addDocument("António_Paulo_Teles_de_Menezes_Correia_Leitão", "Software Engineering");
    specClassifier.addDocument("João_Carlos_Serrenho_Dias_Pereira", "Software Engineering");
    specClassifier.addDocument("Luís_Guerra_e_Silva", "Software Engineering");
    specClassifier.addDocument("João_Garcia", "Software Engineering");
    specClassifier.addDocument("Pedro_Tiago_Gonçalves_Monteiro", "Software Engineering");

    specClassifier.train();
    return specClassifier;
}

const classifyTheses = async (parsedTheses, trainedClassifier) => {
    parsedTheses.map(thesis => {
        let criteria = thesis.title + " " + thesis.objectives + " " + thesis.requirements
        let classArray = []
        let classifications = trainedClassifier.getClassifications(criteria)
        classifications.forEach(classPlusProbability => classArray.push(classPlusProbability.label))
        thesis.areas = classArray.slice(0, 2)
    })

    let classifiedTheses = parsedTheses
    return classifiedTheses
}

const saveClassifiedTheses = async classifiedTheses => {
    const filePath = path.join(__dirname, "classifiedTheses.json")
    const toWrite = JSON.stringify(classifiedTheses)
    fs.writeFileSync(filePath, toWrite, (err) => {
        if (err) {
            return (err);
        }
        console.log("The file was saved!");
    })
}

const processTheses = async () => {
    const theses = await loadTheses()
    console.log("Theses loaded.")

    const parsedTheses = await parseTheses(theses)
    console.log("Theses parsed.")

    const trainedClassifier = await trainClassifier()
    console.log("Classifier trained.")

    const classifiedTheses = await classifyTheses(parsedTheses, trainedClassifier)
    console.log("Theses classified.")

    saveClassifiedTheses(classifiedTheses)
    console.log("Theses saved.")
}

processTheses()