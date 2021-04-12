const express = require('express')
const cors = require('cors')
const axios = require('axios')
const path = require('path')
require('dotenv').config()

const theses = require('./data/meic_theses.json')
const areas = require('./data/meic_areas.json')

const app = express();

app.use(cors());

/* https://github.com/hemakshis/Basic-MERN-Stack-App/blob/master/app.js */
app.use(express.static(path.join(__dirname, 'client/build')));

const { FENIX_CLIENT_ID, FENIX_CLIENT_SECRET, FENIX_REDIRECT_URI } = process.env

app.get('/login', (req, res) => {
    res.send(
        'https://fenix.tecnico.ulisboa.pt/oauth/userdialog' +
        `?client_id=${FENIX_CLIENT_ID}` +
        `&redirect_uri=${FENIX_REDIRECT_URI}`
    )
});

app.get('/auth', async (req, res, next) => {
    const code = req.query.code

    try {
        var accessTokenResponse = await axios.post(
            'https://fenix.tecnico.ulisboa.pt/oauth/access_token' +
            `?client_id=${FENIX_CLIENT_ID}` +
            `&client_secret=${encodeURIComponent(FENIX_CLIENT_SECRET)}` +
            `&redirect_uri=${FENIX_REDIRECT_URI}` +
            `&code=${encodeURIComponent(code)}` +
            '&grant_type=authorization_code'
        )
        if (accessTokenResponse === undefined || accessTokenResponse.status != 200) {
            console.log('accessTokenResponse is undefined or the status is not 200')
            return
        }
    } catch (error) {
        console.log('axios.post(accessTokenUrl) failed')
        console.log(error)
        return
    }

    const accessToken = accessTokenResponse.data.access_token

    try {
        var personInformationResponse = await axios.get(
            'https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person' +
            `?access_token=${accessToken}`
        )
        if (personInformationResponse === undefined || personInformationResponse.status != 200) {
            console.log('accessTokenResponse is undefined or the status is not 200')
            return
        }
    } catch (error) {
        console.log('axios.get(personInformationUrl) failed')
        console.log(error)
        return
    }

    const personInformation = personInformationResponse

    const userName = personInformation.data.displayName

    let isCurrentLMeicStudent = false

    personInformation.data.roles.forEach(role => {
        if (role.registrations) {
            role.registrations.forEach(registration => {
                if (registration.acronym && ['LEIC-A', 'LEIC-T', 'MEIC'].includes(registration.acronym))
                    isCurrentLMeicStudent = true
            })
        }
    })

    res.json({
        userName: userName,
        isCurrentLMeicStudent: isCurrentLMeicStudent
    })
})

app.get('/theses/:area1?/:area2?', (req, res) => {
    const area1 = req.params.area1
    const area2 = req.params.area2

    const checkedAreas = []
    if (area1 !== undefined) checkedAreas.push(area1)
    if (area2 !== undefined) checkedAreas.push(area2)

    const filteredTheses = theses.filter(thesis => checkedAreas.every(area => thesis.areas.includes(area)))
    return res.json(filteredTheses)
})

app.get('/thesis/:id', (req, res) => {
    const id = req.params.id
    let particularThesis = theses.find(thesis => thesis.id === id)
    res.json(particularThesis)
})

app.get('/areas', (req, res) => {
    res.json(areas)
})

app.listen(5000, async () => {
    console.log('App is running on port 5000.')
})