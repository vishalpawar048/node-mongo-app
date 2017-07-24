var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
    name:{
        type:String,
        required:true
        
    },
    completed:{
        type:Boolean

    },
    completedAt:{
        type:Number
    }

});
module.exports={
    Todo
}
