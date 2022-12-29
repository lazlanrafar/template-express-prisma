const express = require("express");
const { Register, Login } = require("./user.controller");
const { RegisterMiddleware, LoginMiddware } = require("./user.middleware");
const router = express.Router();

router.post("/register", RegisterMiddleware, Register);
router.post("/login", LoginMiddware, Login);

module.exports = router;
