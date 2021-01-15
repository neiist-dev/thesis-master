const express = require('express')
const axios = require('axios')
const path = require('path');
const { response } = require('express');
require('dotenv').config()

const app = express();

/* https://github.com/hemakshis/Basic-MERN-Stack-App/blob/master/app.js */
//app.use(express.static(path.join(__dirname, 'client/build')));

const {
    FENIX_CLIENT_ID,
    FENIX_CLIENT_SECRET,
    FENIX_REDIRECT_URI
} = process.env

app.get('/login', (req, res) => {
    res.redirect(
        'https://fenix.tecnico.ulisboa.pt/oauth/userdialog' +
        `?client_id=${FENIX_CLIENT_ID}` +
        `&redirect_uri=${FENIX_REDIRECT_URI}`
    );
});

app.get('/authorize', async (req, res, next) => {

    const code = req.query.code;
    console.log("code:", code);

    try {
        var response = await axios.post(
            'https://fenix.tecnico.ulisboa.pt/oauth/access_token' +
            `?client_id=${FENIX_CLIENT_ID}` +
            `&client_secret=${encodeURIComponent(FENIX_CLIENT_SECRET)}` +
            `&redirect_uri=${FENIX_REDIRECT_URI}` +
            `&code=${encodeURIComponent(code)}` +
            '&grant_type=authorization_code'
        );
        if (response === undefined || response.status != 200) {
            console.log(error);
            res.redirect("/error");
            return;
        }
    } catch (error) {
        console.log(error);
        res.redirect("/error");
        return;
    }

    const accessToken = response.data.access_token;
    console.log("accessToken:", accessToken);

    try {
        var response = await axios.get(
            'https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person' +
            `?access_token=${accessToken}`
        );
        if (response === undefined || response.status != 200) {
            console.log(error);
            res.redirect("/error");
            return;
        }
    } catch (error) {
        console.log(error);
        res.redirect("/error");
        return;
    }

    const personInformation = response;
    console.log("personInformation:", personInformation.data.roles);

    let isCurrentLMeicStudent = false;

    personInformation.data.roles.forEach(role => {
        console.log("role.registrations:", role.registrations);
        if (role.registrations) {
            role.registrations.forEach(registration => {
                if (registration.acronym && ['LEIC-A', 'LEIC-T', 'MEIC'].includes(registration.acronym))
                    isCurrentLMeicStudent = true;
            })
        }
    });

    console.log("isCurrentLMeicStudent:", isCurrentLMeicStudent);

    if (isCurrentLMeicStudent) {
        res.redirect("/done");
        return;
    }
    else {
        res.redirect("/failed");
        return;
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})