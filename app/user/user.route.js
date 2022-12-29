const express = require("express");
const { Register } = require("./user.controller");
const router = express.Router();

router.post("/register", Register);

module.exports = router;
