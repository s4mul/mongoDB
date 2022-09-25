const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { blackboard } = require('./Schema');
//const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://Sunwoo:s4mulsun@hellomongo.j8xwpyd.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true} ).then(()=>console.log('mongoDB Connected...'))

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

    res.send("is there?");
})
app.get('/putdata',(req,res)=>{//error is occur
    console.log("put data");
    let sche = new blackboard;
    sche.findOne({title: req.body.title}, function(err, blackboard){
        if(err){
            console.log(err);
        }else{
            console.log(sche);
            req.send(sche);
        }
    })

})
