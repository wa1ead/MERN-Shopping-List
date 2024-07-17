const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = res.header("x-auth-token").toString();

  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const docoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: e || "Token not valid" });
  }
}

module.exports = auth;
