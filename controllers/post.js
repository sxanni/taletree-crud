//requirig post from models
const Post = require('../models/post');


/*
 * AddComment Function
 */

function addComment(req, res) {

  Post.findById(req.params.id , function(err, post) {
    console.log(req.body);
    post.comments.push(req.body)
    post.save( function(err) {
    console.log("saving to Post");

    console.log("saved!");
    res.redirect(`/${req.params.id}`)
  } )
  })
}

/*
 * AddPost Function
 */

function show(req, res) {
  Post.findById(req.params.id,function(err, post) {
    
  res.render('post/show', {title : "Tale Seed" , post});

  })
 }

module.exports = {
   show,
   addComment
 };
