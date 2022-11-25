const bcrypt = require('bcrypt');
const session = require('express-session');
const router = require('express').Router();
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    password, email, login,
  } = req.body;
  console.log(password, email, login);
  if (password && email && login) {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (user) {
      res.json({ message: 'такой Email уже зарегистрирован' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        password: hash, email, login, score: 0,
      });
      console.log(newUser);
      req.session.user = newUser;
      res.status(200).json({ message: 'вы успешно зарегистрированы', user: newUser.email });
    }
  }
});

module.exports = router;
