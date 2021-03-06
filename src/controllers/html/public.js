const { User, Post, Comment } = require("../../models");

const renderHome = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const posts = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const formattedPosts = posts.map((post) => post.get({ plain: true }));

    res.render("home", { posts: formattedPosts, isLoggedIn });
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
  const { isLoggedIn, userId } = req.session;

  const checkUser = (isLoggedIn, userId, post) =>
    isLoggedIn && userId === post.user_id;

  const checkUserComment = (isLoggedIn, userId, comments) => {
    comments.map((comment) => {
      if (isLoggedIn && userId === comment.user_id) {
        comment.correctUser = true;
      } else {
        comment.correctUser = false;
      }
    });
    return comments;
  };

  const data = await Post.findByPk(id, {
    include: [
      {
        model: User,
      },
    ],
  });

  const commentsData = await Comment.findAll({
    where: {
      post_id: id,
    },
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
  const plainComments = commentsData.map((comment) =>
    comment.get({ plain: true })
  );

  const correctUser = checkUser(isLoggedIn, userId, post);
  const comments = checkUserComment(isLoggedIn, userId, plainComments);

  res.render("post", {
    post,
    comments,
    isLoggedIn,
    correctUser,
    layout: "post",
  });
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignup,
  renderViewPost,
};
