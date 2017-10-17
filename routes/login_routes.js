const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const login = require('../models/login');

router.post('/', async function(req, res){
	res.json(await login.login(req.body.hash));
});


module.exports = router;