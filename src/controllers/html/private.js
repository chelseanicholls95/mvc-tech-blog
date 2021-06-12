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
  res.render("new-post", {
    layout: "new-post",
  });
};

const renderEditPost = async (req, res) => {
  console.log("here");
  const { id } = req.params;

  const data = await Post.findByPk(id);

  if (!data) {
    return res.redirect("/dashboard");
  }

  const post = data.get({ plain: true });
  const edit = true;

  console.log(post);

  res.render("new-post", { post, edit, layout: "new-post" });
};

module.exports = {
  renderDashboard,
  renderCreateNewPost,
  renderEditPost,
};
