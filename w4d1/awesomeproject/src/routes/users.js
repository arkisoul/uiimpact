const express = require("express");
const {ObjectId} = require("mongodb");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const UserModel = require("../models/users");
const authorizationMiddleware = require("../middlewares/AuthorizationMiddleware");

const router = express.Router();
const multerObj = multer();

router.get("/users", authorizationMiddleware, async (req, res) => {
  try {
    console.log(req.userId, req.userRole, req.user);
    const users = await req.db.collection("users").find({}).toArray();
    return res.json({ success: true, msg: "Users list", data: users });
  } catch (error) {
    return res.status(401).json({success: false, message: error.message})
  }
});

router.get("/users/mongoose", authorizationMiddleware, async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.json({ success: true, message: "users list using mongoose", data: users });
  } catch (error) {
    return res.json({ success: false, message: error.message, data: null });
  }
});

router.get("/users/:id", authorizationMiddleware, async (req, res) => {
  console.log("with userId", req.query.age, req.query.height, req.params);
  const user = await req.db
    .collection("users")
    .findOne({ _id: ObjectId(req.params.id) });
  return res.json({ success: true, msg: "Users list", data: user });
});

router.post("/users", async (req, res) => {
  try {
    const newUser = req.body;
    const inserted = await req.db.collection("users").insertOne(newUser);
    return res.json({ success: true, msg: "User created", data: inserted });
  } catch (error) {
    return res.json({ success: false, msg: error.message, data: null });
  }
});

router.post('/user-profile', multerObj.single('profileImage'), async (req, res) => {
  const relativePath = `profile-images/${req.file.originalname}`
  const uploadPath = path.join(__dirname, "../../uploads/profile-images");
  console.log(uploadPath, fs.existsSync(uploadPath));
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
  }
  console.log(uploadPath, fs.existsSync(uploadPath));
  fs.writeFile(path.join(uploadPath, req.file.originalname), req.file.buffer, async (err) => {
    if(err) {
      return res.status(500).json({success: false, message: err.message})
    }

    await UserModel.updateMany({}, { $set: { profileImage: relativePath } });

    return res
      .status(201)
      .json({
        success: true,
        message: "File uploaded successfully",
        data: { path: path.join(uploadPath, req.file.originalname) },
      });
  });
})

module.exports = router;
