const express = require('express');
const { append } = require('express/lib/response');
const {loginForm, registerForm} = require('../actions/login');
const router = express.Router();

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


module.exports = router;