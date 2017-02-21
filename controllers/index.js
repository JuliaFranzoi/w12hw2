var express = require('express');
var router = express.Router();
var path = require('path');

router.use('api/animals', require('./animals'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/', function(req, res) {
  res.json({data: "Welcome"})
})

module.exports = router;