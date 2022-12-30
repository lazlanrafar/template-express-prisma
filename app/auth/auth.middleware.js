const { Compare } = require("../../utils/hash-password");
const {
  BadRequest,
  InternalServerError,
} = require("../../utils/http-response");
const { FetchUserByEmail } = require("../user/user.repository");

module.exports = {
  RegisterMiddleware: async (req, res, next) => {
    try {
      const body = req.body;
      const { email } = body;

      const user = await FetchUserByEmail(email);
      if (user) return BadRequest(res, "Email already registered");

      next();
    } catch (error) {
      return InternalServerError(res, error, "Failed to register user");
    }
  },
  LoginMiddware: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await FetchUserByEmail(email);
      if (!user) return BadRequest(res, "Email not registered");

      const isPasswordValid = await Compare(password, user.password);
      if (!isPasswordValid) return BadRequest(res, "Password is incorrect");

      next();
    } catch (error) {
      return InternalServerError(res, error, "Failed to login user");
    }
  },
};
