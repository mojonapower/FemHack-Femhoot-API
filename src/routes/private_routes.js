const express = require('express');
const router = express.Router();
const {updateUser, deleteUser} = require('../actions/users.actions');
const {createQuestion, updateQuestion, deleteQuestion} = require('../actions/questions.actions');
const {verifyToken} = require('../config/verifyToken');

router.get('/productos',verifyToken,(req,res)=>{
    res.json(req.user)
});

//private users routes
router.put('/users/:id',verifyToken,updateUser);
router.delete('/users/:id',verifyToken,deleteUser);

//private questions routes
router.post('/questions',createQuestion);
router.delete('/questions/:id',deleteQuestion);
router.put('/question/:id',updateQuestion);

module.exports = router;
