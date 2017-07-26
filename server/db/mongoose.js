const mongoose=require('mongoose');

// var co = require('co');
// var Promise = require('mpromise');

 mongoose.connect('mongodb://<vishal>:<123456>@ds125183.mlab.com:25183/nodeapp2', {
  useMongoClient: true,
  /* other options */
});
mongoose.Promise=global.Promise;
// mongoose.connect('');
module.exports={
    mongoose,
  

}