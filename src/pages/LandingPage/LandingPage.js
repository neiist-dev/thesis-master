import React from 'react';
import { Link } from "react-router-dom";
import logout from './logout.svg';
import placeholder from './placeholder.svg';
import ist from './ist.png';
import './LandingPage.css';

export default function LandingPage({isLoggedIn, setLoggedIn, userName, setUserName}) {
    return (
        <div class="landing-page">
            {isLoggedIn &&
            <>
            <p>{userName}</p>
            <button onClick={() => setLoggedIn(false)} class="landing-page__button">
                <img class="landing-page__button__logo" src={logout} />
            </button>
            </>
            }
            <div class="landing-page__info">
                <section className="landing-page__info--heading">
                    <h1 class="landing-page__info--heading-primary">
                        <span>MASTER</span><span>THESIS</span>
                    </h1>
                    <span class="landing-page__info--heading-logo">
                        <img src={placeholder} />
                    </span>
                </section>
                <span>
                    {!isLoggedIn &&
                    <Link to="/thesis-master">
                        <button onClick={() => {setLoggedIn(true); setUserName("ProfJam");}} class="landing-page__info--button">Login com o Fenix</button>
                    </Link>
                    }
                    {isLoggedIn &&
                    <Link to="/thesis-master">
                        <button class="landing-page__info--button">Entrar</button>
                    </Link>
                    }
                </span>
            </div>
        </div>
    );
}


