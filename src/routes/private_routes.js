const express = require('express');
const router = express.Router();
const {updateUser, deleteUser, userLogin} = require('../actions/users.actions');
const {createQuestion, updateQuestion, deleteQuestion} = require('../actions/questions.actions');
const {verifyToken} = require('../config/verifyToken');

router.get('/productos',verifyToken,(req,res)=>{
    const {id} = req.user.user[0]
    res.json({id})
});

//private users routes
router.put('/users/:id',verifyToken,updateUser);
router.delete('/users/:id',verifyToken,deleteUser);

//private questions routes
router.post('/questions',verifyToken,createQuestion);
router.put('/question/:id',verifyToken,updateQuestion);
router.delete('/questions/:id',verifyToken,deleteQuestion);

module.exports = router;
