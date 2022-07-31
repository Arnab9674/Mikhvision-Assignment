const express=require("express");
const { createUser, loginUser, getUserDetails } = require("../Controllers/UserController");

const router=express.Router();
router.route("/user/new").post(createUser);
router.route("/user/login").post(loginUser);
router.route("/user/getDetails").get(getUserDetails);

module.exports=router;