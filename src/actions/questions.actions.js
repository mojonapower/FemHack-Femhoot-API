// const  Sequelize  = require('sequelize');
const db = require("../../models");

//create question
const createQuestion = async (req, res) => {
    let {question,answer1,answer2,answer3,answer4,solution} = req.body;
  try{
    // const user = await db.Users.findAll({where:{email}})

      const newQuestion = await db.Questions.create({ question, answer1, answer2, answer3, answer4, solution })
      return res.status(200).send(newQuestion)

  }catch(err){
    return res.status(400).send(err);
  } 

  }

 //get 3 questions randomly
  const randomThreeQuestion = async (req, res) => {

    try{

      const randomQuestion = await db.Questions.findAll({order: db.sequelize.random(), limit: 3});
      return res.status(200).json(randomQuestion);

    }catch(err){
      return res.status(400).json(err)
    } 
  }

 //update question
  const updateQuestion = async (req, res) => {

  const id = parseInt(req.params.id);
  let {question,answer1,answer2,answer3,answer4,solution} = req.body;
  try {
    await db.Questions.update({ question,answer1,answer2,answer3,answer4,solution }, { where: { id } });
    res.status(200).json({ "msg": "Question updated" });
  } catch (err) {
    res.status(400).json({ "***Error updating contact": err });
  }

  }

  //delete question
const deleteQuestion = async (req, res) => {
    const id = parseInt(req.params.id);
    await db.Questions.destroy({where: {id: id}});
    res.status(200).send("question deleted");

   
  }

exports.createQuestion = createQuestion;
exports.deleteQuestion = deleteQuestion;
exports.randomThreeQuestion = randomThreeQuestion;
exports.updateQuestion = updateQuestion;

