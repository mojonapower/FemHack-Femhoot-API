const jwt = require("jsonwebtoken");
const db = require("../../models");

//user register
const createUser = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  try {
    const user = await db.Users.findAll({ where: { email } });

    if (!user.length) {
      const newUser = await db.Users.create({
        firstName,
        lastName,
        email,
        password,
      });
      return res.status(200).json({"msg":"user registered",firstName,lastName,email});
    }
    return res.status(401).json({ msg: "Users already exists with this email" });
  } catch (err) {
    return res.status(400).send(err);
  }
};

//login
const userLogin = async (req, res) => {
  let { email, password } = req.body;

  // We need to validate that a user with this email and password exists in the DB
  const user = await db.Users.findAll({ where: { email, password } });
  if (!user.length)
    return res.status(401).json({ msg: "Invalid email or password" });

  // this is the most important line in this function, it create a JWT token
  const token = jwt.sign({ user }, process.env.JWT_KEY);
  const { id, firstName, lastName } = user[0].dataValues;

  // return the user and the recently created token to the client
  return res.json({ id, firstName, lastName, email, token });
};

//delete user
const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.Users.destroy({ where: { id: id } });
  res.status(200).send("user deleted");
};

//update password
const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { password } = req.body;
  try {
    const updatedUser = await db.Users.update({ password }, { where: { id } });
    res.status(200).json({ msg: "user updated" });
  } catch (err) {
    res.status(400).json({ "***Error updating contact": err });
  }
};

exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.userLogin = userLogin;
