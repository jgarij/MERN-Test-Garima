const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
