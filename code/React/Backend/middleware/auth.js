
const jwt = require("jsonwebtoken");

//Verifying User Token
function auth (req, res, next){
  try {
    const token = req.cookies.token;
    if (!token)
      return res
        .status(401)
        .json({ msg: "Unauthorised" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
