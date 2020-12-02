import React from 'react';
import './AreasButtons.css';
import AreasButton from '../AreasButton/AreasButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AreasButtons() {
    return (
        <Col md={2}>
            <AreasButton area="Software Engineering" areaInitials="SE" colorHEX="#34B3E4"/>
            <AreasButton area="Intelligent Systems" areaInitials="IS" colorHEX="#00FF00"/>
            <AreasButton area="Interaction and Visualization" areaInitials="IV" colorHEX="#FF0000"/>
            <AreasButton area="Games" areaInitials="G" colorHEX="#0000FF"/>
        </Col >
    );
}

export default AreasButtons;