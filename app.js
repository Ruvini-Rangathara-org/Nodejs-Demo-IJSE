//import express
const express = require ('express');

//invoke express
const app = express();

//run server
// app.listen(3000);
app.listen(3000,"localhost", () => {
    console.log('Server is running...');
});

app.get('/',(req,res) =>{
    // res.status(200).send('Home');
    res.sendFile('./views/index.html',{root:__dirname})
});

app.get('/about',(req,res) =>{
    // res.status(200).send('About');
    res.sendFile('./views/about.html',{root:__dirname})
});

app.get('/career',(req,res) =>{
    // res.status(200).send('Career');
    res.sendFile('./views/career.html', {root:__dirname})
});

app.use((req, res)=>{
    // res.status(404).send('404');
    res.sendFile('./views/404.html', {root:__dirname})
});


