//requirig post from models
const Post = require("../models/post");

/*
 * AddComment Function
 */

function addComment(req, res) {
  Post.findById(req.params.id, function (err, post) { //finds id of post
    console.log(req.body);
    post.comments.push(req.body);
    post.save(function (err) {
      console.log("saving to Post");

      console.log("saved!");
      res.redirect(`/${req.params.id}`);
    });
  });
}

/*
 * Add/showPost in page Function
 */

function show(req, res) {
  Post.findById(req.params.id, function (err, post) {
    //gfind id in db

    res.render("post/show", { title: "Tale Seed", post }); //render it to the post/show.ejs in views, incerting tale seed in title parameter
  });
}

//*toggle update input field

// * update post Function
/*
 When i click update btn, 
 user should be brought to post page if not already there
 a hidden text box field should be revealed,(hidden to block) 
 where user can type update/
 I'd like to also print the original post into text field
  once user types update and hits update btn
  the users text should replace the text in the db of the same id
 
 */


// function updatePost(req, res) {

//   Post.findOneAndUpdate(req.params.id, {textContent:(req.body)},  function (err, post) {

//     post.save(function (err) {
//       console.log("saving new Post");

//       console.log("saved!");
//       res.redirect(`/${req.params.id}`);
//     });
    
    
//     // if (!result) {
//     //   res.status(404).send("data is not found");
//     // }
//     // else {
//     //     result.id = req.body.id;
//     //     result.textContent = req.body.body;
//     //     result.updateOne();
//     // }
  
  
//     // const updatePost = quer
//     // const post = new Post(req.body); //create new post,
//     // post.save(function (err) {
//     //   //.save is a mongoose method to save the new post
//     //   res.redirect("/home"); //as a response, redirect user to home page
//     // });

//     // res.redirect("/"); //after updating post it redirects user to home page, showing its been deleted
//   });
// }

module.exports = {
  show,
  addComment,
  // updatePost,
};
