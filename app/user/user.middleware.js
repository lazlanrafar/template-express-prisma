const {
  InternalServerError,
  BadRequest,
} = require("../../utils/http-response");
const { FetchUserByEmail } = require("./user.repository");

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
};
