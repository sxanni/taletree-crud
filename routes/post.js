var express = require('express');
var router = express.Router();
let indexCtrl = require('../controllers/homes');
let exploreCtrl = require('../controllers/explores');
let profileCtrl = require('../controllers/profiles');
let postCtrl = require('../controllers/post');

//post for post/:id
router.post('/:id', postCtrl.addComment);

module.exports = router;
