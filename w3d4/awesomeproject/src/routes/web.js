const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index");
});

router.get("/about", (req, res) => {
  return res.render("about");
});

router.get("/services", (req, res) => {
  return res.render("services");
});

router.get("/portfolio", (req, res) => {
  return res.render("portfolio");
});

router.get("/contactus", (req, res) => {
  return res.render("contactus");
});

router.get("/contactus", (req, res) => {
  return res.render("contactus");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
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

module.exports = router;
