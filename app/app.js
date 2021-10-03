const express = require('express');
const router = express.Router();
const fileDB = require('../fs/fsWrite')

const names = [];

router.get('/', (req, res) => {
  const lastNames = names.slice(-5);
  fileDB.read(lastNames, res)
  res.send('List of products will be here');
});

router.post('/', (req, res) => {
  const currentDate = Date();
  names.push({currentDate})
  fileDB.save({...req.body}, currentDate);
  res.send(JSON.stringify(req.body) + ' ' + currentDate);
});

module.exports = router;