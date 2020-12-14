import React from 'react';
import logo from './logout.svg';
import ist from './ist.png';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div class="landing-page">
            <button class="landing-page__button">
                <img class="landing-page__button__logo" src={logo} />
            </button>
            <div class="landing-page__info">
                <section className="landing-page__info--heading">
                    <h1 class="landing-page__info--heading-primary">
                        <span>Master</span><span>Thesis</span>
                    </h1>
                    <span class="landing-page__info--heading-logo">
                        <img src={ist} />
                    </span>
                </section>
                <button class="landing-page__info--button">Login com o Fenix</button>
            </div>
        </div>
    );
}


