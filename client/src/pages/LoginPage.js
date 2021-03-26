import React, { useState, useEffect } from 'react'

const LoginPage = () => {
    const [loginUrl, setLoginUrl] = useState("")
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/login')
            .then(res => res.text())
            .then(res => {
                setLoginUrl(res)
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
    if (loginUrl) window.location.href = loginUrl
}

export default LoginPage