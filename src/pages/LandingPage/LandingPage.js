import React from 'react';
import logo from './logout.svg'
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div>
            <div style={{position: "relative", width: "1440px", height: "1024px", background: "#000B71"}}>
                <button style={{position: "absolute",width: "111px", height: "111px",left: "1311px",top: "20px", border: "1px solid #FFFFFF", boxSizing: "border-box"}}>
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

