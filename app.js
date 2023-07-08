const express = require('express');
const app = express();

const port = 3000;

const myLogger = (req,res,next)=>{
    console.log('middle ware 1')
    next();
}
const myLogger2 = (req,res,next)=>{
    console.log('middle ware 2')
    next();
}

//middlewares
app.use(express.static('public'))
app.use(myLogger);
app.use(myLogger2);

app.listen(port,(req,res)=>{
    console.log(`Sunucu başladı, port:${port}`)
})

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})