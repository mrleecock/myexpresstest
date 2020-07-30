const express = require("express");
const router = express.Router();

const mblogs = [
  {
    blog_id: 1,
    author: "Jorma Jone",
    blog_text: "One was before Two..."
  },
  {
    blog_id: 2,
    author: "Anna Andersson",
    blog_text: "You where before mom to power to use"
  }
];

// get all micro blogs
router.get("/", (req, res) => {
  res.json(mblogs);
});

router.post("/", (req, res) => {
  const newMBlog = {
    blog_id: 3,
    author: req.body.author,
    blog_text: req.body.blog_text
  };

  if (!newMBlog.author || !newMBlog.blog_text) {
    return res.status(400).json({ msg: "Error" });
  }

  mblogs.push(newMBlog);
  res.json(mblogs);
});

module.exports = router;
