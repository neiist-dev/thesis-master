import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './SearchBar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar() {
    return (
        <Col id="search-bar-container" md={{ span: 7, offset: 2 }}>
            <InputGroup id="search-bar" className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </Col>
    );
}

export default SearchBar;