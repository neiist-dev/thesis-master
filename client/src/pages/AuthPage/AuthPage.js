import React, { useEffect } from 'react';
import {
    useLocation
} from "react-router-dom";
import { accessTokenUrl } from '../../login';
//import axios from 'axios';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const AuthPage = () => {
    let query = useQuery();
    if (query.get("error")) { //do something
        return <h1>Error</h1>;
    };
    console.log(query.get("code"));

    const requestOptions = {
        method: 'POST'
    };

    //axios.post(accessTokenUrl(query.get("code")))
    //   .then(console.log())

    fetch(accessTokenUrl(query.get("code")), requestOptions)
        .then(response => console.log(response))

    return (
        <h1>Hello</h1>
    );
}

export default AuthPage;


