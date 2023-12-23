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
    res.send('Home');
});

app.get('/about',(req,res) =>{
    res.send('About');
});

app.get('/career',(req,res) =>{
    res.send('Career');
});

app.use((req, res)=>{
    res.send('404');
});
