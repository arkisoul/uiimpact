const express = require("express");

const UserModel = require("../models/users");
const router = express.Router();

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

router.get("/signup", (req, res) => {
  return res.render("signup", { title: "Signup" });
});

router.post("/signup", async (req, res) => {
  try {
    await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    return res.render("signup", {
      title: "Signup",
      message: "Signup successful",
    });
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
