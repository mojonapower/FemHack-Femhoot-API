const express = require('express');
<<<<<<< HEAD
const router = express.Router();
//import actions
const {createUser, deleteUser, updateUser} = require('../actions/users.actions')


//users routes
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);
=======
const { append } = require('express/lib/response');
const {loginForm} = require('../actions/login');
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
>>>>>>> 0cf843cd1f2c03b6634278e6dc564ab19c291c24


module.exports = router;