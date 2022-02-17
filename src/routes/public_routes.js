const express = require('express');
const router = express.Router();

//import actions
const {createUser, deleteUser, updateUser} = require('../actions/users.actions')
const {randomThreeQuestion, createQuestion, deleteQuestion} = require('../actions/questions.actions');
// const {loginForm, registerForm} = require('../actions/login.actions');


//users routes
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

//users question
router.get('/questions',randomThreeQuestion);



//login and register routes
// router.post('/login', loginForm);
// router.post('/register', registerForm);



module.exports = router;