import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function ButtonInstructions() {
    return (
        <Col id="instructions-btt-container" md={{ span: 1 }}>
            <Button id="instructions-btt"> Instruções</Button>
        </Col>
    );
}

export default ButtonInstructions;