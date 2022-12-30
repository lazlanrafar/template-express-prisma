const express = require("express");
const { RegisterMiddleware, LoginMiddware } = require("./auth.middleware");
const { Register, Login } = require("./auth.controller");
const router = express.Router();

router.post("/register", RegisterMiddleware, Register);
router.post("/login", LoginMiddware, Login);

module.exports = router;
