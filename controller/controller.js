exports.getBlogs = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all blogs' });
};

exports.getBlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show single blog ${req.params.id}` });
};

exports.createBlog = (req, res, next) => {
  res.status(200).json({ success: true, message: `Create new blog` });
};

exports.updateBlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update blog ${req.params.id}` });
};

exports.deleteBlog = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete blog ${req.params.id}` });
};
