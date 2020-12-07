import React from 'react';
import './GceThesis.css';
import AreasButtons from '../AreasButtons/AreasButtons';
import ThesisCards from '../ThesisCards/ThesisCards';
import SearchBar from '../SearchBar/SearchBar';
import teses from './2020-06-09-theses-edit.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
                <Row noGutters="true">
                    {/*theses={this.state.theses}*/}
                    <Col md={1}>
                        <AreasButtons></AreasButtons>
                    </Col>
                    <Col md={10}>
                        <ThesisCards></ThesisCards>
                    </Col>
                </Row>
            </>
        );
    }
}



export default GceThesis;


