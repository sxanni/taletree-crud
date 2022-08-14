
//Profile controller!
function show(req, res){
res.render('profile', { title: 'taletreedb' });
}


/*
* Export Modules
*/
module.exports = {
   show
 };
