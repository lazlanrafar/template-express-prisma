const { Encrypt } = require("../../utils/hash-password");
const { InternalServerError, Ok } = require("../../utils/http-response");
const { StoreUser } = require("./user.repository");

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
      console.log(error);
      return InternalServerError(res, error, "Failed to register user");
    }
  },
};
