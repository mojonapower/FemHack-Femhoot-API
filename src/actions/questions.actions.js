const mysqlConnection = require('../config/db.config');

//create question
const createQuestion = (req, res) => {

    let {question,answer1,answer2,answer3,answer4,solution} = req.body;
       
    mysqlConnection.query('INSERT INTO `question`(`question`,`answer1`, `answer2`, `answer3`, `answer4`, `solution`) VALUES (?,?,?,?,?,?,?)',[question,answer1,answer2, answer3, answer4,solution], (err, rows) => {
        if(!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });  

  }

  //delete question
const deleteQuestion = (req, res) => {
        res.status(200).send('question deleted')
   
  }

exports.createQuestion = createQuestion;
exports.deleteQuestion = deleteQuestion;

