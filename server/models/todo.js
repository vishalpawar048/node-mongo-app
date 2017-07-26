var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
    name:{
        type:String,
        required:true
        
    },
    completed:{
        type:Boolean,
       default: false

    },
    completedAt:{
        type:Number,
        default: null
    }

});
module.exports={
    Todo
}
