const express = require('express');

//import actions
const {createUser, deleteUser, updateUser} = require('../actions/users.actions');
const {createQuestion, deleteQuestion, random10Question} = require('../actions/questions.actions');

const { append } = require('express/lib/response');
const {loginForm, registerForm} = require('../actions/login.actions');

const router = express.Router();



//users routes
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

//users question
router.post('/question',createQuestion);
router.post('/questionrandom',random10Question);
router.delete('/question/:id',deleteQuestion);



//importando controladores
// const {createUser, getData, login} = require('../controllers/users.controllers');


//    =>/users
//app.METODO('Route',(req,res)=>{

//})
// router.get('/', getData);
// router.post('/users', createUser);
// router.post('/login',login)

/*
Maca routes
*/

router.post('/login', loginForm);
router.post('/register', registerForm);
/*
end Maca routes
*/


//EndPoint for Questions
router.get('/Questions',questionInsert );


module.exports = router;