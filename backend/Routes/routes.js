const router = require('express').Router();
const loginRouter = require('./loginRouter');
const registrRouter = require('./registrationRouter');
const apiRoute = require('./apiRoute');

router.use('/login', loginRouter);
router.use('/registration', registrRouter);
router.use('/api', apiRoute);


module.exports = router;
