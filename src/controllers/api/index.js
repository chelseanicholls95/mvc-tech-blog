const { Post, User } = require("../../models");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "createdAt", "updatedAt"],
          },
        },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get all posts." });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (!post) {
      return res.status(404).json({ error: "Post does not exist." });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get post." });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const { id } = req.params;

    const post = { title, body };

    const [updated] = await Post.update(post, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ error: "Post does not exist" });
    }

    return res.status(200).json({ data: "Update successful" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update post" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Post.destroy({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({ error: "Post does not exist" });
    }

    return res.status(200).json({ data: "Delete successful" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete post" });
  }
};

module.exports = {
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
