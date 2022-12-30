const { Encrypt } = require("../../utils/hash-password");
const { Ok, InternalServerError } = require("../../utils/http-response");
const { EncryptToken } = require("../../utils/jwt");
const { StoreUser, FetchUserByEmail } = require("../user/user.repository");

module.exports = {
  Register: async (req, res) => {
    try {
      const body = req.body;

      const payload = {
        ...body,
        password: await Encrypt(body.password),
      };

      const result = await StoreUser(payload);

      return Ok(res, result, "User registered successfully");
    } catch (error) {
      return InternalServerError(res, error, "Failed to register user");
    }
  },
  Login: async (req, res) => {
    try {
      const body = req.body;
      const user = await FetchUserByEmail(body.email);

      const token = EncryptToken({
        ...user,
      });

      const payload = {
        ...user,
        token,
      };

      return Ok(res, payload, "User logged in successfully");
    } catch (error) {
      return InternalServerError(res, error, "Failed to login user");
    }
  },
};
