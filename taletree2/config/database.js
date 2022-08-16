// added mongoose
const mongoose = require('mongoose');

// add MongoDB URI
//had an error with conneecting with below uri, had to change it to the current one 
//error -> mongoose.connect('mongodb://localhost/taletreedb', {

mongoose.connect('mongodb://127.0.0.1/taletreedb', {

  useNewUrlParser: true,
  useUnifiedTopology: true
});

// add DB
// shortcut to mongoose.connection object
const db = mongoose.connection;

//this is a message that will let developer know everything is working , on connecting to db
db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);// connected at {host name} and {port}
});
