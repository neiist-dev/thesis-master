import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './ButtonInstructions.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ButtonInstructions() {
    return (
        <Col md={2}>
            <Button className="instructions-btt"> Instruções</Button>
        </Col>
    );
}

export default ButtonInstructions;