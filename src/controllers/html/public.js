const renderHome = (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login", {
      layout: "login",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("signup", {
      layout: "signup",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignup,
};
