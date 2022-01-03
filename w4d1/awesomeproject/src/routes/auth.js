const express = require("express");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/users");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || (email && email.length === 0)) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }
  if (!password || (password && password.length === 0)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid password" });
  }
  const user = await UserModel.findOne({ email: email, password: password }, {password: 0, __v: 0, hobbies: 0, address: 0});

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  const now = Math.round(Date.now() / 1000);
  const exp = now + 1 * 60 * 60;

  const token = jwt.sign({
      userId: user._id,
      role: 'user',
    //   iat: now,
    //   exp: exp
  }, 'averyrandomsecurestring')

  return res
    .status(200)
    .json({
      success: true,
      message: "Login successful",
      data: { user: user, token },
    });
});

module.exports = router;
