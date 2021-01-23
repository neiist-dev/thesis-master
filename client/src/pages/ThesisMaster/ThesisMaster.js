import React from 'react';
import AreasButtons from '../../components/AreasButtons/AreasButtons';
import ThesisCards from '../../components/ThesisCards/ThesisCards';
import NavigationBar from '../../components/NavBar/NavBar';
//import teses from './2020-06-09-theses-edit.json';
import './ThesisMaster.css';

export default function ThesisMaster({ isLoggedIn, setLoggedIn, userName, setUserName }) {
    return (
        <>
            <NavigationBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName} />
            {/*theses={this.state.theses}*/}
            <div style={{ display: "grid", gridTemplateColumns: "110px auto" }}>
                <AreasButtons></AreasButtons>
                <ThesisCards></ThesisCards>
            </div>
        </>
    );
}


