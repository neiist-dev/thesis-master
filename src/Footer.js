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
            <Container fluid id="my-footer">
                <Row>
                    <Col sm>
                        <h5>Sobre o GCE </h5>
                        <ul>
                            <li><a href="FIXME">A Nossa Missão</a></li>
                            <li><a href="FIXME">A Equipa</a></li>
                        </ul>
                    </Col>

                    <Col sm>
                        <h5>Suporte</h5>
                        <ul>
                            <li><a href="FIXME">FAQ</a></li>
                            <li><a href="mailto:admin@gce-neiist.org">Contacta-nos</a></li>
                        </ul>
                    </Col>

                    <Col sm>
                        <h5>Informação Legal</h5>
                        <ul>
                            <li><a href="FIXME">Termos de Uso</a></li>
                            <li><a href="FIXME">Privacidade</a></li>
                        </ul>
                    </Col>
                </Row>

                <div className="social-networks">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/gce.neiist" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="FIXME" className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/11163917" className="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="FIXME" className="fa fa-twitch"><FontAwesomeIcon icon={faTwitch} /></a>
                </div>

                <div className="footer-copyright">
                    <p>© 2020 GCE-NEIIST</p>
                    <p> Made with ♥ at GCE - open-source code available <a id="refRep" target="_blank" rel="noopener noreferrer" href="FIXME">here</a></p>
                </div>
            </Container>
        )
    }
}

/* <footer id="myFooter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2"></div>

                            <div className="col-sm-2">
                                <h5>Sobre o GCE </h5>
                                <ul>
                                    <li><a href="www.google.pt">A Nossa Missão</a></li>
                                    <li><a href="www.google.pt">A Equipa</a></li>

                                </ul>
                            </div>


                            <div className="col-sm-1"></div>

                            <div className="col-sm-2">
                                <h5>Suporte</h5>
                                <ul>
                                    <li><a href="www.google.pt">FAQ</a></li>
                                    <li><a href="mailto:admin@gce-neiist.org">Contacta-nos</a></li>
                                </ul>
                            </div>

                            <div className="col-sm-1"></div>


                            <div className="col-sm-2">
                                <h5>Informação Legal</h5>
                                <ul>
                                    <li><a href="www.google.pt">Termos de Uso</a></li>
                                    <li><a href="www.google.pt">Privacidade</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="social-networks">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/gce.neiist" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/11163917" class="instagram"><i class="fa fa-instagram"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/11163917" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div class="footer-copyright">
                        <p>© 2020 GCE-NEIIST</p>
                        <p> Made with ♥ at GCE - open-source code available <a id="refRep" target="_blank" rel="noopener noreferrer" href="https://github.com/RafaelAPB/GCE-NEIIST">here</a></p>
                    </div>
                </footer>
        */

export default Footer;