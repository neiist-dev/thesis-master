import React from 'react';
import './ThesisPage.css';

class ThesisPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {theses: null /*getThesis()   TODO*/,
                      thesesFiltered : null /*getThesis()   TODO*/};  
    }
    render(){
        return ( 
            <ThesisPage>
                <AreasButtons theses={this.state.theses}></AreasButtons>
                <SearchBar theses={this.state.theses}></SearchBar>
                <ButtonInstructions></ButtonInstructions>
                <h1>{/*this.state.thesesFiltered.length*/}BUÉS propostas de tese</h1>
                <ThesisCards thesis={this.state.thesesFiltered}></ThesisCards>
            </ThesisPage>
        );
    }
}


function ButtonInstructions(){
    return(
        <button>Instruções</button>
    );
}
export default ThesisPage;


