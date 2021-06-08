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

const createPost = async (req, res) => {
  res.send("create");
};

const updatePost = async (req, res) => {
  res.send("update");
};

const deletePost = async (req, res) => {
  res.send("delete");
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
