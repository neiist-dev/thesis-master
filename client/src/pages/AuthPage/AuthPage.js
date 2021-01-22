import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const AuthPage = ({ setUserName }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    let query = useQuery();
    if (query.get("error"))
        return <h1>Error</h1>; //do something

    const code = query.get("code");

    fetch(`http://localhost:5000/authorize?code=${code}`)
        .then(response => response.json())
        .then(data => {
            if (data.isCurrentLMeicStudent)
                setUserName(data.userName)
            setIsLoaded(true);
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <Redirect to="/thesis-master" />
    }
}

export default AuthPage;


