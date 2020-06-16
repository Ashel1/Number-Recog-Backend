const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json('Initial get req');
});

app.post("/img", (req, res) => {
    console.log('/img was connected')
    const img= res.json(req.body.imgURL);
    res.json('5');
});

app.listen(3000,()=>{
    console.log('App is running on port 3000');
})