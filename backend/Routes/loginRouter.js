const bcrypt = require('bcrypt');
const session = require('express-session');
const { User } = require('../db/models');
const router = require('express').Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.findOne({
        where: { email },
      });
      if (user) {
        const isSame = await await bcrypt.compare(password, user.password);
        if (isSame) {
          req.session.user = user;
          req.session.isSession = true;
          res.json({ message: 'успех', user });
        }
      }
    } else {
      res.json({ message: 'Ваш login или password указаны не верно' });
    }
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
