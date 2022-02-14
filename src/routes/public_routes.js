const express = require('express');
const router = express.Router();

//import actions
const {createUser, deleteUser, updateUser} = require('../actions/users.actions')
const {questionInsert} = require('../actions/questions.actions');
const {loginForm, registerForm} = require('../actions/login.actions');



//users routes
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

//users question
router.post('/question',createQuestion);
router.post('/questionrandom',random10Question);
router.post('/question/:id',checkQuestion);
router.delete('/question/:id',deleteQuestion);


//login and register routes
router.post('/login', loginForm);
router.post('/register', registerForm);


//questions routes
router.get('/questions',questionInsert );


module.exports = router;