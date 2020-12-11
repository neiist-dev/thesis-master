import React from 'react';
import AreasButtons from '../../components/AreasButtons/AreasButtons';
import ThesisCards from '../../components/ThesisCards/ThesisCards';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import teses from './2020-06-09-theses-edit.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ThesisMaster.css';

class ThesisMaster extends React.Component {
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
                <NavigationBar />
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



export default ThesisMaster;


