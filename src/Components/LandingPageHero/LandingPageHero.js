import React from 'react';
import './LandingPageHero.css';
import { ReactComponent as GceLogo } from './gce_logo.svg';
import { ReactComponent as Arrows } from './arrows.svg';

function LandingPageHero() {
    return (
        <section id="fullscreen_section">
            <div id="content">
                <GceLogo id="logo" />
                <h4>Grupo de Contacto com Empresas do NEIIST</h4>
                <br />
                <a href="javascript:document.querySelector('#thesis').scrollIntoView();">
                    <Arrows id="more-arrows" />
                </a>
            </div>
        </section >
    );
}

export default LandingPageHero;


