import React, { useState, useEffect } from 'react'
import { useLocation, Redirect } from "react-router-dom"


const AuthPage = ({ setIsLoggedIn, setUserName }) => {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    let query = useQuery();

    useEffect(() => {

        const code = query.get("code")

        if (code) {
            console.log("code:", code)

            const authUrl = `http://localhost:5000/auth?code=${code}`
            console.log("authUrl:", authUrl)

            fetch(authUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.isCurrentLMeicStudent) {
                        setIsLoggedIn(true)
                        setUserName(data.userName)
                    }
                    setIsLoaded(true)
                },
                    (err) => {
                        setIsLoaded(true)
                        setError(err)
                    }
                )
        }
    })

    if (query.get("error")) {
        const errorName = query.get("error")
        const errorDescription = query.get("error_description")
        return (
            <>
                <h1>{errorName}</h1>
                <p>{errorDescription}</p>
            </>
        )
    }

    if (error) return <div>Error: {error.message}</div>
    if (!isLoaded) return <div>Loading...</div>
    window.location.href = "/thesis-master"
}

export default AuthPage


