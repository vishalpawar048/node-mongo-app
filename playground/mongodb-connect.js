const MongoClient=require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/users',(err,db)=>{

    if(err){
        return console.log('Not founde');
    }
    console.log('Connected to db');

    db.collection('todos').insertOne({
        name:'vishal',
        location:'4125'
    },(err,result)=>{
        if(err){
          return  console.log('unable to insert a data',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    db.close();
});