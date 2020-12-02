import React from 'react';
import './GceThesis.css';
import AreasButtons from '../AreasButtons/AreasButtons';
import ThesisCards from '../ThesisCards/ThesisCards';
import SearchBar from '../SearchBar/SearchBar';
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
                <Row>
                    <SearchBar></SearchBar>
                    <ButtonInstructions></ButtonInstructions>
                </Row>
                <Row>
                    {/*theses={this.state.theses}*/}
                    <AreasButtons></AreasButtons>
                    <ThesisCards></ThesisCards>
                </Row>
            </>
        );
    }
}



export default GceThesis;


