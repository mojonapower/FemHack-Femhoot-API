// Load modules
//const database = require('.');

function questionInsert(req, res){

    let {questionID, question, answer1, answer2, answer3, answer4, solution} = req.body;
    
    return res.send("everything is ok with questions")

}

exports.questionInsert= questionInsert;

/*
// Get all questions from database
const getQuestions = (callback) => {
  const sql = `SELECT * FROM question`;
  database.appDatabase.all(sql, [], (error, rows) => {
    if (error) {
      console.error(error.message);
    }
    callback(rows);
  });
};

exports.getQuestions= getQuestions;
*/