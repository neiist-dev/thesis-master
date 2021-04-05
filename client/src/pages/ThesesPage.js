import React, { useState, useEffect } from 'react'
import NavigationBar from '../components/NavBar'
import Card from 'react-bootstrap/Card'
import ToggleButton from 'react-bootstrap/ToggleButton'

const ThesesPage = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) =>
    <>
        <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
        <Areas />
        <Theses />
    </>

const Areas = () => {
    const [areas, setAreas] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [isCheckedArray, setIsCheckedArray] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/areas')
            .then(res => res.json())
            .then(areasRes => {
                setAreas(areasRes)

                const urlParams = new URLSearchParams(window.location.search)
                const urlAreaParams = urlParams.getAll("area")
                console.log("urlAreaParams:", urlAreaParams)

                let isCheckedArrayTemp = areasRes.map(area => urlAreaParams.includes(area.code) ? true : false)
                console.log("isCheckedArrayTemp:", isCheckedArrayTemp)
                setIsCheckedArray(isCheckedArrayTemp)

                setIsLoaded(true)
            },
                (err) => {
                    setIsLoaded(true)
                    setError(err)
                }
            )
    }, [])

    const handleChange = index => {
        const changedArea = areas[index].code
        let isCheckedStateArrayNew = isCheckedArray.slice()
        isCheckedStateArrayNew[index] = !isCheckedStateArrayNew[index]
        setIsCheckedArray(isCheckedStateArrayNew)
        if (isCheckedStateArrayNew[index]) {
            const urlParams = new URLSearchParams(window.location.search)
            const urlAreaParams = urlParams.getAll("area")
            if (!urlAreaParams.includes(changedArea)) {
                urlParams.append("area", areas[index].code)
                console.log(urlParams.toString())
                window.location.href = window.location.href.split('?')[0] + "?" + urlParams.toString()
            }
        }
        if (!isCheckedStateArrayNew[index]) {
            const urlParams = new URLSearchParams(window.location.search)
            let urlAreaParams = urlParams.getAll("area")
            let urlAreaParamsNew = urlAreaParams.filter(area => area !== changedArea)
            urlParams.delete("area")
            urlAreaParamsNew.forEach(areaParam => urlParams.append("area", areaParam))
            console.log(urlParams.toString())
            window.location.href = urlParams.toString() === "" ? window.location.href.split('?')[0] : window.location.href.split('?')[0] + "?" + urlParams.toString()
        }
    }

    if (!isLoaded) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (areas) return (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "space-around", padding: "10px 10px 0 10px" }}>
            {
                areas.map((area, index) =>
                    <ToggleButton
                        key={area.code}
                        type="checkbox"
                        checked={isCheckedArray[index] || false}
                        onChange={() => handleChange(index)}
                        style={{ margin: "10px", width: "15rem", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        {area.short}
                    </ToggleButton>
                )
            }
        </div >
    )
}

const Theses = () => {
    const [classifiedTheses, setClassifiedTheses] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        fetch('http://localhost:5000/theses' + '?' + urlParams.toString())
            .then(res => res.json())
            .then(res => {
                setClassifiedTheses(res)
                setIsLoaded(true)
            },
                (err) => {
                    setIsLoaded(true)
                    setError(err)
                }
            )
    }, [])

    if (!isLoaded) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (classifiedTheses) return (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "space-around", flexWrap: "wrap", padding: "0 10px 10px 10px" }}>
            {
                classifiedTheses.map(thesis =>
                    <ThesisCard
                        key={thesis.id}
                        id={thesis.id}
                        title={thesis.title}
                        area1={thesis.areas[0]}
                        area2={thesis.areas[1]}
                    />
                )
            }
        </div>
    )
}

const ThesisCard = ({ id, title, area1, area2 }) =>
    <Card style={{ margin: "10px", width: "15rem", textAlign: "center" }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{area1}</Card.Text>
            <Card.Text>{area2}</Card.Text>
            <a href={`/thesis/${id}`} className="stretched-link" target="_blank" rel="noreferrer" />
        </Card.Body>
    </Card >

export default ThesesPage

