const mongoose = require("mongoose");
var validator = require("validator");

const blogSchema = new mongoose.Schema({
  Upi: {
    type: String,
  },
  Pack: [],
});

const blog = new mongoose.model("collections", blogSchema);

module.exports = blog;
