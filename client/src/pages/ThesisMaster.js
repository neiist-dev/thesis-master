import React, { useState } from 'react'
import NavigationBar from '../components/NavBar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
//import teses from './2020-06-09-theses-edit.json';

const ThesisMaster = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) =>
    <>
        <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
        <div style={{ display: "flex", justifyContent: "center", alignContent: "space-around", flexWrap: "wrap", padding: "10px" }}>
            <ThesisCard title="placeholder" colorLeft="red" colorRight="green" />
            <ThesisCard />
            <ThesisCard />
            <ThesisCard />
            <ThesisCard />
        </div>
    </>

const AreasButtons = () =>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", height: "100vh" }}>
        <AreasButton area="Software Engineering" areaInitials="SE" colorHEX="#34B3E4" />
        <AreasButton area="Intelligent Systems" areaInitials="IS" colorHEX="#00FF00" />
        <AreasButton area="Interaction and Visualization" areaInitials="IV" colorHEX="#FF0000" />
        <AreasButton area="Games" areaInitials="G" colorHEX="#0000FF" />
    </div>

const AreasButton = ({ area, areaInitials, colorHEX }) => {
    const [on, setOn] = useState(false)

    return (
        <Button
            style={{ background: colorHEX, width: on ? "100px" : "55px" }}
            onClick={() => setOn(!on)}>{areaInitials}
        </Button>
    )
}

const ThesisCard = ({ title, colorLeft, colorRight }) =>
    <Card style={{ margin: "10px", width: "15rem", textAlign: "center" }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div style={{ width: "100%", height: "10px", display: "flex" }}>
                <div style={{ width: "50%", height: "100%", backgroundColor: colorLeft, marginRight: "10px" }} />
                <div style={{ width: "50%", height: "100%", backgroundColor: colorRight, marginLeft: "10px" }} />
            </div>
        </Card.Body>
    </Card >

export default ThesisMaster
