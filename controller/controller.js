const user = require('../model/user');

exports.getBlogs = async (req, res, next) => {
  try {
    const blog = await user.find();
    res.status(200).json({ success: true, count: blog.length, data: blog });
  } catch (err) {
    next(err);
  }
};

exports.getBlog = async (req, res, next) => {
  try {
    const blog = await user.findById(req.params.id);
    if (!blog) {
      return next(err);
    }
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const blog = await create.find(req.body);
    res.status(200).json({ success: true, message: `Create new blog` });
  } catch (err) {
    next(err);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      next(err);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await blog.findByIdAndDelete(req.params.id, req.body);

    if (!blog) {
      next(err);
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
