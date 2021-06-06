const getPosts = async (req, res) => {
  res.send("get all");
};

const getPost = async (req, res) => {
  res.send("get one");
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
