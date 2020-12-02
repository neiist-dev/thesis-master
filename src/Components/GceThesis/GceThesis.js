import React from 'react';
import './GceThesis.css';
import AreasButtons from '../AreasButtons/AreasButtons';
import ThesisCards from '../ThesisCards/ThesisCards';
import ButtonInstructions from '../ButtonInstructions/ButtonInstructions';
import teses from './2020-06-09-theses-edit.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GceThesis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theses: teses, /*teses getThesis(),   TODO*/
            thesesFiltered: null /*getThesis()   TODO*/
        };
    }
    render() {
        return (
            <>
                <h1>{/*this.state.thesesFiltered.length*/}BUÉS propostas de tese</h1>
                <Row>
                    {/*theses={this.state.theses}*/}
                    <AreasButtons></AreasButtons>
                    <ThesisCards></ThesisCards>
                    {/*
                <SearchBar theses={this.state.theses}></SearchBar>
                */}
                <ButtonInstructions></ButtonInstructions>
                
                </Row>
            </>
        );
    }
}



export default GceThesis;


