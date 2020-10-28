import React from 'react';
import Button from 'react-bootstrap/Button';
import './LandingSection.css';

const HomeSection = ({ color }) => {
    return(
        <section  id="home-section" className={color}>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quidem inventore tempore, enim quo natus velit consequatur voluptatibus vero reiciendis voluptas magnam, eveniet animi. <br/> Exercitationem consequuntur maiores modi quae eveniet perferendis!</p>
            <Button variant="info" size="sm">Click me!</Button>
        </section>
    )    
}

export default HomeSection;


