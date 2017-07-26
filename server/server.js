const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectId}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var{Todo}=require('./models/todo');

var app=express();
const port=process.env.PORT || 3000;

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
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
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

app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectId.isValid(id)){
         return  res.status(404).send();
    }
         Todo.findByIdAndRemove(id).then((doc)=>{
             if(!doc){
                 return res.status(404).send();
             }
        res.send({doc});
}).catch((e)=>{
     res.status(400).send();
})
});

app.patch('/todos/:id',(req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body, ['name','completed']);
    if(_.isBoolean(body.completed) && true){
        body.completedAt=new Date().getTime();
    }else{
        body.complete=false;
        body.completedAt=null;
    }
    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((doc)=>{
        if(!doc){
           return res.status(404).send();

        }
        res.send(doc);
    }).catch((e)=>{
        res.send(e);
    })
       

});

app.listen(port,()=>{
    console.log(`App started on ${port}`);
})