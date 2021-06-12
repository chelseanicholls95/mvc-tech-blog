const { User, Post } = require("../../models");

const renderHome = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const formattedPosts = posts.map((post) => post.get({ plain: true }));

    res.render("home", { posts: formattedPosts });
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

const renderViewPost = async (req, res) => {
  const { id } = req.params;

  const data = await Post.findByPk(id, {
    include: [
      {
        model: User,
      },
    ],
  });

  if (!data) {
    return res.redirect("/");
  }

  const post = data.get({ plain: true });

  res.render("post", post);
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignup,
  renderViewPost,
};
