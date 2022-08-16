// Require/Import Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create comment Schema ( we want comments to be strings)
const commentSchema = new Schema({
    textContent: String, //string type
},{
    timestamps: true //with time of comment
});

// post Schema
const postSchema = new Schema({
    textContent: String, //string type
    comments: [commentSchema], //each post contains array of ccomments
},{
        timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
