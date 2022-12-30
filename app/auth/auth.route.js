const express = require("express");
const { RegisterMiddleware, LoginMiddware } = require("./auth.middleware");
const { Register, Login, SendEmail } = require("./auth.controller");
const router = express.Router();

router.post("/register", RegisterMiddleware, Register);
router.post("/login", LoginMiddware, Login);
router.post("/send-email", SendEmail);

module.exports = router;
