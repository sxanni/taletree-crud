
//Profile controller!
function show(req, res){
res.render('profile', { title: 'User Profile' });
}


/*
* Export Modules
*/
module.exports = {
   show
 };
