//home controller!
//declare/require post from the model
const Post = require('../models/post')

/*
* Index Function
*/

function index(req, res){
  Post.find({},function(err, post) { //post.find finds everything in required post file. The .find takes in the filter{} and a function. an empty bracket ->"{}" means its finding everything in Post file
      console.log("Hit function INSIDE index");
     res.render('index', { title: 'TALETREE', posts: post, imgsrc:'./logo.png'});
  } )
}

/*
* Create Post Function
*/

function create(req, res) {
const post = new Post(req.body); //create new post,
post.save(function(err){ //.save is a mongoose method to save the new post
  res.redirect('/home'); //as a response, redirect user to home page
}

);
}

/*
* Delete post Function
 */
function deletePost(req,res){
Post.findByIdAndDelete(req.params.id , function (err, docs) {

  res.redirect('/'); //after deleting post it redirects user to home page, showing its been deleted

})
}

/*
* Export Modules
*/
module.exports = {
   index,
   create,
   deletePost,
 };
