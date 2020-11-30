import React from 'react';
import './GceThesis.css';

class GceThesis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theses: null /*getThesis()   TODO*/,
            thesesFiltered: null /*getThesis()   TODO*/
        };
    }
    render() {
        return (
            <>
                {/*<AreasButtons theses={this.state.theses}></AreasButtons>
                <SearchBar theses={this.state.theses}></SearchBar>
                <ButtonInstructions></ButtonInstructions>
                <ThesisCards thesis={this.state.thesesFiltered}></ThesisCards>
                */}
                <h1>{/*this.state.thesesFiltered.length*/}BUÉS propostas de tese</h1>
            </>
        );
    }
}


function ButtonInstructions() {
    return (
        <button>Instruções</button>
    );
}
export default GceThesis;


