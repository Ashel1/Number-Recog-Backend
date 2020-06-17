const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json('Initial get req');
});

app.post("/img", (req, res) => {
    //const img= req.body.imgURL;
    callNumber(req,res);
});

function callNumber(req,res){
    var spawn= require('child_process').spawn;

    var process = spawn('python',['./number.py',req.body.firstname,req.body.lastname]);

    process.stdout.on('data',function(data){
        res.send(data.toString());
    })
}

app.listen(3000,()=>{
    console.log('App is running on port 3000');
})