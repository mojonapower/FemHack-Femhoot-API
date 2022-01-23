const express = require('express');
const router = express.Router();
const {updateUser, deleteUser} = require('../actions/users.actions')
const {verifyToken} = require('../config/verifyToken');

router.get('/productos',verifyToken,(req,res)=>{
    res.json(req.user)
});

router.put('/users/:id',verifyToken,updateUser);
router.delete('/users/:id',verifyToken,deleteUser);

module.exports = router;
