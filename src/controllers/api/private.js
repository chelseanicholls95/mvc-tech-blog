const { Post, Comment } = require("../../models");

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

const createComment = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId: user_id } = req.session;
    const { id: post_id } = req.params;

    const comment = { message, user_id, post_id };

    await Comment.create(comment);

    res.status(200).json({ data: "Successfully created comment" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to update comment" });
  }
};

const updateComment = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: post_id } = req.params;
    const { userId: user_id } = req.session;

    const comment = { message, user_id, post_id };

    const [updated] = await Comment.update(comment, {
      where: { post_id, user_id },
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

module.exports = {
  createPost,
  updatePost,
  deletePost,
  createComment,
  updateComment,
};
