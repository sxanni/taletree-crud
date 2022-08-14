//Explore controller!

function show(req, res){
res.render('explore', { title: 'explore' });
}


/*
* Export Modules
*/
module.exports = {
   show
 };
