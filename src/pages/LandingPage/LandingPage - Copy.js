import React from 'react';
import logo from './logout.svg'
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "flex-end" }}>
                <button style={{ border: 0, outline: "none", padding: "10px", backgroundColor: "transparent" }}>
                    <img src={logo} />
                </button>
            </div>
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "transparent" }}>
                <h1>Teste</h1>
                <h3>Teste</h3>
                <h3>Teste</h3>
                <h3>Testexxxxxxxxxx</h3>
            </div>
        </div>
    );
}


