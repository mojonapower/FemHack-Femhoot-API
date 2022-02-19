const db = require("../../models");
const jwt = require("jsonwebtoken");

//save user score
const saveUserScore = async (req, res) => {
  const { id: userID } = req.user.user[0];
  const score = parseInt(req.body.score);

  if (!req.body.score) return res.status(401).json({"msg":"you send a empty score"});

  try{
      const newUserScore = await db.Scores.create({ score, userID});
      const user = await db.Users.findAll({where:{id:userID},include: db.Scores});
    
      return res.status(200).json(user);
      
  }catch(error){
      return res.status(400).json(error)
  }
};

exports.saveUserScore = saveUserScore;
