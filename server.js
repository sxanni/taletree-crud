var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//  require database
require('./config/database');

//  add method override " for the delete, you cannot delete stuff because deleting is a protected action, method override overides the protection "
const methodOverride = require('method-override');


// add entity routers
  //index router
  var indexRouter = require('./routes/index');

  //  add router for users
  var usersRouter = require('./routes/users');

  //  add router for post
  var postRouter = require('./routes/post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//add routes/listeners for the routers
app.use('/', indexRouter);

//  add routes for users
app.use('/users', usersRouter);

//  add routes for post
app.use('/post', postRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function(){
  console.log("listening on 3000, You Champ! 😎")
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
