import React from 'react';
import Button from 'react-bootstrap/Button';
import './LandingPageSection.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPageSection({ id, position, title, body_text, button_text }) {
    return (
        <Row id={id} className="fullscreen_section">
            <Col md={{ span: 6, offset: 3 }}>
                <div className={`content ${position}`}>
                    <h1 className="title">{title}</h1>
                    <p className="body_text">{body_text}</p>
                    <Button className="btt" variant="primary" size="lg">{button_text}</Button>
                </div>
            </Col>
        </Row>
    );
}

export default LandingPageSection;


