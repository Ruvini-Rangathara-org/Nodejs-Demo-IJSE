console.log("Welcome to Node.js");

const name = "IJSE";
console.log("Institute : "+name);

//open cmd in this directory
//type to run node app.js

// Global Object
// console.log(global);

// global.setTimeout(() => {console.log("Timeout!!")}, 4000);
// global.setInterval(() => {console.log("Interval!!")}, 4000);

//enviroment variables
console.log("Port : "+process.env.PORT);
console.log("Username : "+process.env.USERNAME);
console.log("Path : "+process.env.PATH);
console.log("Directory name : "+__dirname);
console.log("File name : "+__filename);


//in terminal
//npm init
//nodemon
//npm install --save-dev nodemon

//package.json
// {
//     "name": "nodejs-demo",
//     "version": "1.0.0",
//     "description": "",
//     "main": "app.js",
//     "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//===============================================================
//         "start": "nodemon app.js"
// },
//     "author": "",
//     "license": "ISC",
//     "devDependencies": {
//     "nodemon": "^3.0.2"
// }
// }

//in cmd , npm start


console.log("Welcome to Nodemon");
console.log("Welcome again");
console.log("Welcome to Node.js");