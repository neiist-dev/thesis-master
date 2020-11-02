import React from 'react';
import Button from 'react-bootstrap/Button';
import './LandingSection.css';

const HomeSection = ({ data: { type, title, body_text, button_text } }) => {
    return (
        <section id={type} className="home-section">
            <h1>{title}</h1>
            <p>{body_text}</p>
            <Button variant="info" size="sm">{button_text}</Button>
        </section>
    )
}

export default HomeSection;


