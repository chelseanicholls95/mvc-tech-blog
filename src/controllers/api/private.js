const { Post } = require("../../models");

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const { userId: user_id } = req.session;

    const post = { title, body, user_id };

    await Post.create(post);

    res.status(200).json({ data: "Successfully created post" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to update post" });
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
    console.error(error.message);
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
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete post" });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
};
