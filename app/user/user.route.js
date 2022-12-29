const express = require("express");
const { Register } = require("./user.controller");
const { RegisterMiddleware } = require("./user.middleware");
const router = express.Router();

router.post("/register", RegisterMiddleware, Register);

module.exports = router;
