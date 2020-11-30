import React from 'react';
import './AreasButtons.css';
import AreasButton from '../AreasButton/AreasButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AreasButtons() {
    return (
        <Col md={2}>
            <AreasButton />
            <AreasButton />
            <AreasButton />
        </Col >
    );
}

export default AreasButtons;