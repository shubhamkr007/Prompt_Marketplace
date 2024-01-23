const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // console.log(req.headers["authorization"]);
    if(!req.headers["authorization"]){
      return res.send({
        success: false,
        message: "No token provided."
      })
    }
    const token = req.headers["authorization"].split(" ")[1];
    // console.log(token)
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed While Decrpytion",
        });
      } else {
        req.body.userId = decode.userId;
        // console.log(req.body.userId);
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Auth Failed",
    });
  }
};