const FENIX_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const FENIX_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const loginUrl =
  'https://fenix.tecnico.ulisboa.pt/oauth/userdialog' +
  `?client_id=${FENIX_CLIENT_ID}` +
  `&redirect_uri=${FENIX_REDIRECT_URI}`;

{/*
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