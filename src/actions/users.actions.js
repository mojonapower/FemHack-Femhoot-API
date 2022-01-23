const mysqlConnection = require('../config/db.config');

//create user
const createUser = (req, res) => {

    let {name,email,password} = req.body;
       
    mysqlConnection.query('INSERT INTO `users`(`name`,`email`, `password`) VALUES (?,?,?)',[email,password], (err, rows) => {
        if(!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });  

  }

  //delete user
const deleteUser = (req, res) => {
        res.status(200).send('user deleted')
   
  }

  //update password
  const updateUser = (req, res) => {
    res.status(200).send('user updated')

}


exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
