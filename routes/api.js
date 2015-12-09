var   express = require('express'),
      apiRouter = express.Router(),
      mongoose = require('mongoose'),
      Event = require('../models/Event.js')

apiRouter.get('/', function(req,res){
	res.json({message: "Api.js!"})
})


module.exports = apiRouter
