import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Footer from './Components/Footer/Footer';
import LandingSection from './Components/LandingSection/LandingSection';
import GCESection from './Components/GCESection/GCESection';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    data: {
      thesis: {
        type: "thesis",
        title: "GCE Thesis",
        body_text: "Prestes a escolher a tua tese de mestrado?\nO GCE criou um serviço que te permite ver quais as propostas de tese de mestrado, classificadas por área de especialização!",
        button_text: "Visitar GCE Thesis"
      },
      hashcode: {
        type: "hashcode",
        title: "Google Hash Code",
        body_text: "A Google e o GCE trazem-te um desafio de programação!\nO Google Hash Code é um hackathon à escala global que te desafia a resolver um problema real em equipa!",
        button_text: "Sobre Hash Code"
      },
      articles: {
        type: "articles",
        title: "Artigos & Entrevistas",
        body_text: "Lê aqui todas as publicações dos nossos colaboradores e descobre o que te espera no mundo profissional.\nDe alunos para alunos!",
        button_text: "Ver Todos os Artigos"
      }
    }
  }
  render() {
    return (
      <div>
        <GCESection />
        <LandingSection data={this.state.data.thesis} />
        <LandingSection data={this.state.data.hashcode} />
        <LandingSection data={this.state.data.articles} />
        <Footer />
      </div >
    );
  }

}

export default App;
