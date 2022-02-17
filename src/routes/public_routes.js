const express = require('express');
const router = express.Router();

//import actions
const {createUser, deleteUser, updateUser, userLogin} = require('../actions/users.actions')
const {randomThreeQuestion} = require('../actions/questions.actions');


//users routes
router.post('/users/login',userLogin);
router.post('/users/register',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

//questions routes
router.get('/questions',randomThreeQuestion);


module.exports = router;