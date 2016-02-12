var express = require('express');
var router = express.Router();
var joinController = require('../controllers/joinController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout');
});

router.get('/partials/:name', function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
});

router.post('/login', joinController.login);

module.exports = router;
