const fs = require ('fs');

//after ECMAScript 6
//before ECMAScript 6 use import


fs.readFile('doc.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


//read as Buffer
fs.readFile('doc.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});