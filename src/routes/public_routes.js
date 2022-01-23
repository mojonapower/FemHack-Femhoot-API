const express = require('express');
const router = express.Router();
//import actions
const {createUser} = require('../actions/users.actions')


//users routes
router.post('/users',createUser);


module.exports = router;