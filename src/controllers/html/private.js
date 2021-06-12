const { User, Post } = require("../../models");

const renderDashboard = async (req, res) => {
  const { firstName, lastName, userId } = req.session;

  const posts = await Post.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: User,
      },
    ],
  });

  const formattedPosts = posts.map((post) => post.get({ plain: true }));

  res.render("dashboard", { firstName, lastName, posts: formattedPosts });
};

const renderCreateNewPost = (req, res) => {
  res.render("new-post");
};

module.exports = { renderDashboard, renderCreateNewPost };
