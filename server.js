const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express();

//servir o /client em www.xxx.

const FENIX_CLIENT_ID = process.env.FENIX_CLIENT_ID
const FENIX_CLIENT_SECRET = process.env.FENIX_CLIENT_SECRET
const FENIX_REDIRECT_URI = process.env.FENIX_REDIRECT_URI

app.get('/', (req, res) => {
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
        // get token with received code
        var response = await axios.post(
            'https://fenix.tecnico.ulisboa.pt/oauth/access_token' +
            `?client_id=${FENIX_CLIENT_ID}` +
            `&client_secret=${encodeURIComponent(FENIX_CLIENT_SECRET)}` +
            `&redirect_uri=${FENIX_REDIRECT_URI}` +
            `&code=${code}` +
            '&grant_type=authorization_code'
        );

        console.log("response:", response);

        if (response === undefined || response.status != 200) {
            res.redirect("/oopsie");
            return;
        }
    } catch (error) {
        console.log("error:", error);
        res.redirect("/oopsie");
        return;
    }


    const token = response.data.access_token;

    console.log("token:", token);

    try {
        var userInfo = await RegisterFenixServices.get_user_info(token);
    } catch (error) {
        console.log("error:", error);
        res.redirect("/oopsie");
        return;
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})