const express = require('express');
const { append } = require('express/lib/response');
const {loginForm} = require('../actions/login');
const {questionInsert} = require('../actions/questions.actions');

const router = express.Router();

//importando controladores
// const {createUser, getData, login} = require('../controllers/users.controllers');


//    =>/users
//app.METODO('Route',(req,res)=>{

//})
// router.get('/', getData);
// router.post('/users', createUser);
// router.post('/login',login)

router.get('/belana',loginForm );

//EndPoint for Questions
router.get('/Questions',questionInsert );


module.exports = router;