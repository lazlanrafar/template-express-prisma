const express = require("express");
const {
  RegisterMiddleware,
  LoginMiddware,
  SendEmailMiddleware,
} = require("./auth.middleware");
const { Register, Login, SendEmail } = require("./auth.controller");
const router = express.Router();

router.post("/register", RegisterMiddleware, Register);
router.post("/login", LoginMiddware, Login);
router.post("/send-email", SendEmailMiddleware, SendEmail);

module.exports = router;
