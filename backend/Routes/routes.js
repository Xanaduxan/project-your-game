const router = require('express').Router();
const loginRouter = require('./loginRouter');
const registrRouter = require('./registrationRouter');

router.use('/login', loginRouter);
router.use('/registration', registrRouter);

module.exports = router;
