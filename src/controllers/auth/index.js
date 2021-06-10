const { User } = require("../../models/");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    console.log("User does not exist");
    return res.status(404).json({ error: "Failed to login" });
  }

  const validPassword = await user.isPasswordValid(password);

  if (!validPassword) {
    console.log("Invalid password");
    return res.status(404).json({ error: "Failed to login" });
  }

  req.session.save(() => {
    req.session.isLoggedIn = true;
    req.session.email = user.email;
    req.session.firstName = user.first_name;
    req.session.lastName = user.last_name;
    req.session.userId = user.id;

    return res.status(200).json({ data: "Login successful" });
  });
};

const logout = async (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({ data: "Logout successful" });
    });
  } else {
    return res.status(500).json({ error: "Failed to logout" });
  }
};

const signup = async (req, res) => {};

module.exports = { login, logout, signup };
