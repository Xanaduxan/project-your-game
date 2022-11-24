const bcrypt = require('bcrypt');
const session = require('express-session');
const { User } = require('../db/models');
const router = require('express').Router();

router.post('/registration', async (req, res) => {
  const {
    password, email, repitPassword, login,
  } = req.body;
  if (password && email && repitPassword && login) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: 'такой Email уже зарегистрирован' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ password: hash, email, login });
      req.session.user = newUser;
      res.status(200).json({ message: 'вы успешно зарегистрированы', user: newUser.email });
    }
  }
});

module.exports = router;
