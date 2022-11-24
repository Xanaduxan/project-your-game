const router = require('express').Router();
const { Question } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
    console.log(questions);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
