export const loginUrl =
  //'http://localhost:8010/proxy/oauth/userdialog' +
  'https://fenix.tecnico.ulisboa.pt/oauth/userdialog' +
  `?client_id=${process.env.REACT_APP_FENIX_CLIENT_ID}` +
  `&redirect_uri=${process.env.REACT_APP_FENIX_REDIRECT_URI}`;

export const accessTokenUrl = (code) =>
  //'http://localhost:8010/proxy/oauth/access_token' +
  //'https://cors-anywhere.herokuapp.com/' +
  'https://fenix.tecnico.ulisboa.pt/oauth/access_token' +
  `?client_id=${process.env.REACT_APP_FENIX_CLIENT_ID}` +
  `&client_secret=${process.env.REACT_APP_FENIX_CLIENT_SECRET}` +
  `&redirect_uri=${process.env.REACT_APP_FENIX_REDIRECT_URI}` +
  `&code=${code}` +
  '&grant_type=authorization_code'

{/*
router.get('/', (req, res) => {
  res.redirect([
    'https://fenix.tecnico.ulisboa.pt/oauth/userdialog',
    `?client_id=${FENIX_CLIENT_ID}`,
    `&redirect_uri=${FENIX_REDIRECT_URI}`,
  ].join(''));
});

router.get('/authorize', async (req, res, next) => {
  const code = req.query.code;

  try {
    // get token with received code
    var response = await axios.post([
      'https://fenix.tecnico.ulisboa.pt/oauth/access_token',
      `?client_id=${FENIX_CLIENT_ID}`,
      `&client_secret=${encodeURIComponent(FENIX_CLIENT_SECRET)}`,
      `&redirect_uri=${FENIX_REDIRECT_URI}`,
      `&code=${code}`,
      `&grant_type=authorization_code`
    ].join(''));

    if (response === undefined || response.status != 200) {
      res.redirect("/oopsie");
      return;
    }
  } catch (error) {
    res.redirect("/oopsie");
    return;
  }


  const token = response.data.access_token;

  try {
    var userInfo = await RegisterFenixServices.get_user_info(token);
  } catch (error) {
    res.redirect("/oopsie");
    return;
  }
*/}