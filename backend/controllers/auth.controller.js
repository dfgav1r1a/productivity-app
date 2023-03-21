const jwt = require("jsonwebtoken");

require("dotenv").config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

exports.login = (req, res) => {
  const {email, password} = req.body;

  if (email === EMAIL && password === PASSWORD) {
    //if email and password match those in .env then we create token
    const token = jwt.sign({email}, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });
    return res.status(200).json({
      statusCode: 200,
      msg: "Login Successful",
      token,
    });
  }

  //if email and password don't match
  return res.status(401).json({
    statusCode: 401,
    msg: "Invalid Credentials",
  });
}
