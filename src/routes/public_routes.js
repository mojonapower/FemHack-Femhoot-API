const express = require('express');
const router = express.Router();
//import actions
const {createUser, deleteUser, updateUser} = require('../actions/users.actions')


//users routes
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);


module.exports = router;