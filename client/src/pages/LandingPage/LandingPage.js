import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import placeholder from './placeholder.svg';
import './LandingPage.css';

export default function LandingPage({ isLoggedIn, setLoggedIn, userName, setUserName }) {
    return (
        <div className="landing-page">
            <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName} />
            {/* {isLoggedIn &&
            <>
            <p>{userName}</p>
            <button onClick={() => setLoggedIn(false)} class="landing-page__button">
                <img class="landing-page__button__logo" src={logout} />
            </button>
            </>
            } */}
            <div className="landing-page__info">
                <section className="landing-page__info--heading">
                    <h1 className="landing-page__info--heading-primary">
                        <span>MASTER</span><span>THESIS</span>
                    </h1>
                    <span className="landing-page__info--heading-logo">
                        <img src={placeholder} alt="" />
                    </span>
                </section>
                {/* <span>
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
                </span> */}
            </div>
        </div>
    );
}


