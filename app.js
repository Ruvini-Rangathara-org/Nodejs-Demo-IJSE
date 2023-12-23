console.log("Welcome to Node.js");

const name = "IJSE";
console.log("Institute : "+name);

// Global Object
console.log(global);
global.setTimeout(() => {console.log("Timeout!!")}, 4000);
global.setInterval(() => {console.log("Interval!!")}, 4000);