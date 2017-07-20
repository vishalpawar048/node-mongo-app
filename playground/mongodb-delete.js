const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('MongoDB://localhost:27017/users',(err,db)=>{
    if(err){
        return console.log("Unable to connect",err);

    }
    console.log("Connected to mongoDB");

    // db.collection('todos').deleteMany({name:'suraj'}).then((result)=>{
    //     console.log(result);
    //  db.collection('todos').deleteOne({name:'vishal'}).then((result)=>{
    //     console.log(result);
         db.collection('todos').findOneAndDelete({name:'vishal'}).then((result)=>{
        console.log(result);
    })
})