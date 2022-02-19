const express = require("express");
const router = express.Router();
//import actions
const { updateUser, deleteUser } = require("../actions/users.actions");
const {
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../actions/questions.actions");
const { saveUserScore } = require("../actions/score.actions");

// jwt verify token
const { verifyToken } = require("../config/verifyToken");

//private test route
router.get("/productos", verifyToken, (req, res) => {
  const { id } = req.user.user[0];
  res.json({ id });
});

//private users routes
router.put("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);
router.post("/users/scores", verifyToken, saveUserScore);

//private questions routes
router.post("/questions", verifyToken, createQuestion);
router.put("/question/:id", verifyToken, updateQuestion);
router.delete("/questions/:id", verifyToken, deleteQuestion);

module.exports = router;
