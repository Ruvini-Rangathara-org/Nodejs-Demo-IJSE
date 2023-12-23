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
fs.readFile('doc.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});


//synchronous method
const read = fs.readFileSync('doc.txt', 'utf-8');
//read as Buffer
const read2 = fs.readFileSync('doc.txt');
console.log(read);
console.log(read2);
console.log("End of the sync program");


//write file asynchronous
fs.writeFile('doc2.txt', 'Hello world from file write async', (err) => {
    if (err) throw err;
    console.log("File is written in async mode");
});
console.log("End of the async write program");



// //write file synchronous
fs.writeFileSync('doc2.txt', 'Hello world from file write sync');

console.log("End of the sync write program");


///////////////////////////////////////////////////////////////////////////////////////////////////////////

//creating directory

fs.mkdir('./test', (err) => {
    if (err) throw err;
    console.log("Directory created");
});


fs.mkdirSync('./test1');


fs.rm('./test1', {recursive:true, force:true},(err) => {
    if (err) console.log(err)
    console.log("Directory removed");
});



////////////////////////////////////////////////////////////////////////////////////////////

//remove file
fs.unlink('doc2.txt', (err) => {
    if (err) throw err;
    console.log("File removed");
});

fs.unlinkSync('doc2.txt');
console.log("File removed");

//create js file
fs.writeFileSync('test.js', 'console.log("Hello world");');
console.log("File created");

//append text to file
fs.appendFileSync('test.js', 'console.log("Appended 2 Hello world");');
console.log("Text appended");
//
// //rename file
fs.renameSync('test.js', 'test2.js');
console.log("File renamed");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// check resource availability
if (fs.existsSync('test2.js')) {
    console.log("File exists");
} else {
    console.log("File not exists");
}
