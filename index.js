const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { blackboard } = require('./Schema');
const config = require('./config');
//const bodyParser = require('body-parser');
mongoose.connect(config.mongoURL, {useNewUrlParser: true, useUnifiedTopology: true} ).then(()=>console.log('mongoDB Connected...'))

app.use(express.json());
app.listen(port, ()=>console.log("listening on port" + port + "   http://localhost:"+'3000'));

app.get('/',(req, res)=>{
    res.send('hello world!');
})
app.post('/getdata', (req, res)=>{
    console.log(req.body);
    let sche = new blackboard;
    sche.title = req.body.title;
    sche.text = req.body.text;
    sche.save(function(error, data){
        if(error){
            console.log(error);
        }else{
            console.log('saved');
        }
    })

    res.send(sche.title + " is saved");
})
app.post('/putdata',(req,res)=>{//error is occur
    console.log("put data");
    console.log(req.body.title);
    blackboard.findOne({title: req.body.title}, function(err, blackboard){
    
        if(err){
            console.log(err);
        }else if(!blackboard){
            console.log("no title");
        }else{
            console.log(blackboard);
            res.json(blackboard);
        }
    })
    return res;
})

app.get('/getalldata', (req, res)=>{
    console.log("show all data");
    //console.log(blackboard);
    const data = blackboard.find({},(err,data)=>{
        console.log(data);
        res.json(data);
    });
    
    return res;
})
