const auth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    next();
  } else {
    res.status(400).json({ error: "Please log in" });
  }
};

module.exports = auth;
