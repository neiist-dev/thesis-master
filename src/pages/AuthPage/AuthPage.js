import React, { useEffect } from 'react';
import {
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const AuthPage = () => {
    let query = useQuery();
    if (query.get("error")) {
        return <h1>Error</h1>;
    };
    console.log(query.get("code"));

    return (
        <h1>Hello</h1>
    );
}

export default AuthPage;


