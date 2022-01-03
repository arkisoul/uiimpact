const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/users");

const router = express.Router();
const multerObj = multer();

router.get("/", (req, res) => {
  return res.render("index", { title: "Home" });
});

router.get("/about", (req, res) => {
  return res.render("about", { title: "About Us" });
});

router.get("/services", (req, res) => {
  const services = [
    { name: "Consultation" },
    { name: "Appointment" },
    { name: "Online Payment" },
  ];
  return res.render("services", { title: "Services", services });
});

router.get("/portfolio", async (req, res) => {
  // const users = await req.db.collection('users').find({}).toArray();
  const users = await UserModel.find({});
  return res.render("portfolio", { title: "Portfolio", users });
});

router.get("/contactus", (req, res) => {
  return res.render("contactus", { title: "Contact Us" });
});

router.get("/login", (req, res) => {
  return res.render("login", { title: "Login" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || (email && email.length === 0)) {
    return res
      .status(400)
      .render("login", { title: "Login", message: "Invalid email" });
  }
  if (!password || (password && password.length === 0)) {
    return res
      .status(400)
      .render("login", { title: "Login", message: "Invalide password" });
  }
  const user = await UserModel.findOne(
    { email: email, password: password },
    { password: 0, __v: 0, hobbies: 0, address: 0 }
  );

  if (!user) {
    return res
      .status(400)
      .render("login", { title: "Login", message: "Invalid credentials" });
  }

  const now = Math.round(Date.now() / 1000);
  const exp = now + 1 * 60 * 60;

  const token = jwt.sign(
    {
      userId: user._id,
      role: "user",
      iat: now,
      exp: exp,
    },
    "averyrandomsecurestring"
  );

  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: false,
    })
    .status(200)
    .redirect("/user/dashboard");
});

router.get("/user/dashboard", (req, res) => {
  return res.status(200).render("user/index", { title: "User Dashboard" });
});

router.get("/signup", (req, res) => {
  return res.render("signup", { title: "Signup" });
});

router.get("/logout", (req, res) => {
  return res.clearCookie("access_token").redirect("/");
});

router.post("/signup", multerObj.single("profileImage"), async (req, res) => {
  try {
    const relativePath = `profile-images/${req.file.originalname}`;
    const uploadPath = path.join(__dirname, "../../uploads/profile-images");
    console.log(uploadPath, fs.existsSync(uploadPath));
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    console.log(uploadPath, fs.existsSync(uploadPath));
    fs.writeFile(
      path.join(uploadPath, req.file.originalname),
      req.file.buffer,
      async (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: err.message });
        }

        await UserModel.create({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          profileImage: relativePath,
        });
        return res.render("signup", {
          title: "Signup",
          message: "Signup successful",
        });
      }
    );
  } catch (error) {
    return res.render("signup", {
      title: "Signup",
      message: error.message,
    });
  }
});

router.get("/test", (req, res) => {
  return res.send(`I am a test route`);
});

router.post("/", (req, res) => {
  return res.send(`I am a post request response`);
});

router.put("/", (req, res) => {
  return res.send(`I am a put request response`);
});

router.delete("/", (req, res) => {
  return res.send(`I am a delete request response`);
});

router.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await UserModel.findById(userId);
  return res.render("update-user", { user });
});

router.put("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findByIdAndUpdate(userId, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      },
    });
    return res.redirect("/portfolio");
  } catch (error) {
    return res.redirect("/portfolio");
  }
});

module.exports = router;
