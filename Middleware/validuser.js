const jwt = require("jsonwebtoken");
const upmodel = require("../model/upmodel");
const validuser = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(400).json("token not exist");
    }

    data = jwt.verify(token,"%$^&%&*^&*HJjhgjgsdjmdsbgmvdfvbjb3489875364765454W$&%UI^&%^%$#$#$%UI&^");
    const user = await upmodel.findOne({ _id: data._id });
    req.user = user;
    req.id = data._id;
    next();
  } catch (error) {
    res.statusCode = 400;
    res.json("token validation" + error);
  }
};

module.exports = validuser;
