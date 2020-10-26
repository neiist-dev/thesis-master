import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row id="footer-map">
                    <Col md={{ span: 2, offset: 2}}>
                        <h5>Sobre o GCE </h5>
                        <ul>
                            <li><a href="FIXME">A Nossa Missão</a></li>
                            <li><a href="FIXME">A Equipa</a></li>
                        </ul>
                    </Col>

                    <Col md={{ span: 2, offset: 1}}>
                        <h5>Suporte</h5>
                        <ul>
                            <li><a href="FIXME">FAQ</a></li>
                            <li><a href="mailto:admin@gce-neiist.org">Contacta-nos</a></li>
                        </ul>
                    </Col>

                    <Col md={{ span: 2, offset: 1}}>
                        <h5>Informação Legal</h5>
                        <ul>
                            <li><a href="FIXME">Termos de Uso</a></li>
                            <li><a href="FIXME">Privacidade</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row id="footer-social">
                    <Col xs={{ span: 1, offset: 4}}><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/gce.neiist" className="fa" id="fa-facebook"><FontAwesomeIcon icon={faFacebookF} /></a></Col>
                    <Col xs={1}><a target="_blank" rel="noopener noreferrer" href="FIXME" className="fa" id="fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a></Col>
                    <Col xs={1}><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/11163917" className="fa" id="fa-linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a></Col>
                    <Col xs={1}><a target="_blank" rel="noopener noreferrer" href="FIXME" className="fa" id="fa-twitch"><FontAwesomeIcon icon={faTwitch} /></a></Col>
                </Row>

                <Row id="footer-copyright"><p>© 2020 GCE-NEIIST</p></Row>
                <Row id="footer-signature"><p> Made with ♥ at GCE - open-source code available <a id="refRep" target="_blank" rel="noopener noreferrer" href="FIXME">here</a></p></Row>
            </Container>
        )
    }
}

export default Footer;