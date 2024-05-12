const express = require('express')
const bp = require('body-parser');

const app = express();
const PORT = 3000;

const carousel = require('./carousel/carouselRouter');
const homeMenu = require('./homeMenu/homeMenuRouter');
const userInfo = require('./userInfo/userRouter');
const user = require('./authorization/authRouter');
const location = require('./location/locationRouter');
const activeDays = require('./activeDays/activeDaysRouter');

app.use(bp.json());

app.use('/carousel', carousel);
app.use('/home-menu', homeMenu);
app.use('/user-info', userInfo);
app.use('/location', location);
app.use('/active-days', activeDays);
app.use('/user', user);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
