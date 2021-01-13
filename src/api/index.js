const express = require('express');

const users = require('./users');
const rides = require('./rides');
const pins = require('./pins');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌎',
  });
});

router.use('/users', users);
router.use('/rides', rides);
router.use('/pins', pins);

module.exports = router;
