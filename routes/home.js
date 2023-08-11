const { Router } = require('express');
const Answer = require('../models/Answer')
const router = Router()

router.get('/', (req, res) => {
  res.render('index.html')
});

router.post("/", async (req, res) => {
  const newAnswer = new Answer(req.body);
  await newAnswer.save()
  res.redirect('/')
});


module.exports = router