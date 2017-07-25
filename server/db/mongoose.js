const mongoose=require('mongoose');

// var co = require('co');
// var Promise = require('mpromise');

 mongoose.connect('MongoDB://localhost:27017/todoapp', {
  useMongoClient: true,
  /* other options */
});
mongoose.Promise=global.Promise;
// mongoose.connect('');
module.exports={
    mongoose,
  

}