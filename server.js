const express = require('express')
const cors = require('cors')
const axios = require('axios')
const path = require('path')
//const { response } = require('express')
require('dotenv').config()

const theses = require('./data/meic_theses.json')
const areas = require('./data/meic_areas.json')

const app = express();

app.use(cors());

/* https://github.com/hemakshis/Basic-MERN-Stack-App/blob/master/app.js */
app.use(express.static(path.join(__dirname, 'client/build')));

const {
    FENIX_CLIENT_ID,
    FENIX_CLIENT_SECRET,
    FENIX_REDIRECT_URI
} = process.env

app.get('/login', (req, res) => {

    const loginUrl =
        'https://fenix.tecnico.ulisboa.pt/oauth/userdialog' +
        `?client_id=${FENIX_CLIENT_ID}` +
        `&redirect_uri=${FENIX_REDIRECT_URI}`
    console.log("loginUrl:", loginUrl)

    res.send(loginUrl)
});

app.get('/auth', async (req, res, next) => {

    const code = req.query.code
    console.log("code:", code)

    const accessTokenUrl =
        'https://fenix.tecnico.ulisboa.pt/oauth/access_token' +
        `?client_id=${FENIX_CLIENT_ID}` +
        `&client_secret=${encodeURIComponent(FENIX_CLIENT_SECRET)}` +
        `&redirect_uri=${FENIX_REDIRECT_URI}` +
        `&code=${encodeURIComponent(code)}` +
        '&grant_type=authorization_code'
    console.log("accessTokenUrl:", accessTokenUrl)

    try {
        var accessTokenResponse = await axios.post(accessTokenUrl)
        if (accessTokenResponse === undefined || accessTokenResponse.status != 200) {
            console.log('accessTokenResponse is undefined or the status is not 200')
            return
        }
    } catch (error) {
        console.log('axios.post(accessTokenUrl) failed')
        console.log(error)
        return
    }

    const accessToken = accessTokenResponse.data.access_token
    console.log("accessToken:", accessToken)

    const personInformationUrl =
        'https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person' +
        `?access_token=${accessToken}`
    console.log("personInformationUrl:", personInformationUrl)

    try {
        var personInformationResponse = await axios.get(personInformationUrl)
        if (personInformationResponse === undefined || personInformationResponse.status != 200) {
            console.log('accessTokenResponse is undefined or the status is not 200')
            return
        }
    } catch (error) {
        console.log('axios.get(personInformationUrl) failed')
        console.log(error)
        return
    }

    const personInformation = personInformationResponse

    const userName = personInformation.data.displayName
    console.log("userName:", userName)

    console.log("personInformation:", personInformation.data.roles)

    let isCurrentLMeicStudent = false

    personInformation.data.roles.forEach(role => {
        console.log("role.registrations:", role.registrations)
        if (role.registrations) {
            role.registrations.forEach(registration => {
                if (registration.acronym && ['LEIC-A', 'LEIC-T', 'MEIC'].includes(registration.acronym))
                    isCurrentLMeicStudent = true
            })
        }
    })

    console.log("isCurrentLMeicStudent:", isCurrentLMeicStudent)

    res.json({
        userName: userName,
        isCurrentLMeicStudent: isCurrentLMeicStudent
    })
})

app.get('/theses', (req, res) => {
    let queryAreas = req.query.area
    console.log("queryAreas:", queryAreas)

    if (queryAreas === undefined)
        return res.json(theses)

    if (!Array.isArray(queryAreas)) queryAreas = new Array(queryAreas)

    const filteredTheses = theses.filter(thesis => queryAreas.every(area => thesis.areas.includes(area)))
    console.log(filteredTheses)

    return res.json(filteredTheses)
})

app.get('/thesis/:id', (req, res) => {
    const id = req.params.id
    console.log("id:", id)

    let particularThesis = theses.find(thesis => thesis.id === id)
    console.log(particularThesis)

    res.json(particularThesis)
})

app.get('/areas', (req, res) => {
    //console.log(areas)
    res.json(areas)
})

app.listen(5000, async () => {
    console.log('App is running on port 5000.')
})