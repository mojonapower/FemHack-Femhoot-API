const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const {response} = require('../actions/users')
//importando controladores
// const {createUser, getData, login} = require('../controllers/users.controllers');


//    =>/users
//app.METODO('Route',(req,res)=>{

//})
// router.get('/', getData);
// router.post('/users', createUser);
// router.post('/login',login)
router.get('/',response );


module.exports = router;