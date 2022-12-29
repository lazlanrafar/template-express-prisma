const userRoute = require("../app/user/user.route");
const { AuthToken } = require("../shared/middleware.shared");

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  const preRoute = `/api/${apiVersion}`;

  app.use(`${preRoute}/user`, userRoute);

  app.get(`${preRoute}/whois`, AuthToken, (req, res) => {
    res.json({ user: req.user });
  });
};
