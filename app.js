const fs = require('fs');

//after ECMAScript 6 use require
//before ECMAScript 6 use import


//asynchronous method
//firstly print the end of the async program and then print the content of the file
fs.readFile('doc.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log("End of the async program");


//read as Buffer
// fs.readFile('doc.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


//synchronous method
const read = fs.readFileSync('doc.txt', 'utf-8');
//read as Buffer
const read2 = fs.readFileSync('doc.txt');
console.log(read);
console.log(read2);
console.log("End of the sync program");
