var express=require('express');
var bodyParser=require('body-parser');
var {ObjectId}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var{Todo}=require('./models/todo');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        name: req.body.name
    });
    todo.save().then((doc)=>{
        res.send(doc);

    },(e)=>{
        res.status(400).send(e);
    })
});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectId.isValid(id)){
      return  res.status(404).send();
    }
    Todo.findById(id).then((doc)=>{
        res.send({doc});
    },(e)=>{
        res.status(400).send(e);
    })
    
});

app.listen(3000,()=>{
    console.log('App started on port 3000');
})