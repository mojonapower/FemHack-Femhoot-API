const db = require("../../models");


//create user
const createUser = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  try{
    const user = await db.Users.findAll({where:{email}})
  
    if(!user.length){ 
      return res.status(400).json({'msg':'Users already exists with this email'})
    }else{
      const newUser = await db.Users.create({ firstName, lastName, email, password })
      return res.status(200).send(newUser)
    }
  }catch(err){
    return res.status(400).send(err);
  }
};

//delete user
const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.Users.destroy({where: {id: id}});
  res.status(200).send("user deleted");
};

//update password
const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { password } = req.body;
  try {
    const updatedUser = await db.Users.update({ password }, { where: { id } });
    res.status(200).json({ "msg": "user updated" });
  } catch (err) {
    res.status(400).json({ "***Error updating contact": err });
  }
};

exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
