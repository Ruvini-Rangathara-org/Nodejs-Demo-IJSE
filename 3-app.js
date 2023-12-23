const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request : "+req.toString());
    console.log("Response : "+res.toString());
    //
    console.log("Request URL : "+req.url.toString());
    // console.log("Response URL : "+res.url.toString());

    res.setHeader('Content-Type', 'text/html');

    let file = "index.html";


    switch (req.url) {
        case '/':
            // res.write('<html>');
            // res.write('<head><title>NodeJS Server</title></head>');
            // res.write('<body><h1>Home Page</h1></body>');
            // res.write('</html>');
            res.statusCode = 200;
            file = "index.html";

            break;
        case '/about':
            // res.write('<html>');
            // res.write('<head><title>NodeJS Server</title></head>');
            // res.write('<body><h1>About Page</h1></body>');
            // res.write('</html>');
            res.statusCode = 200;
            file = "about.html";
            break;
        case '/career':
            // res.write('<html>');
            // res.write('<head><title>NodeJS Server</title></head>');
            // res.write('<body><h1>Career Page</h1></body>');
            // res.write('</html>');
            res.statusCode = 200;
            file = "career.html";
            break;
        default:
            // res.write('<html>');
            // res.write('<head><title>NodeJS Server</title></head>');
            // res.write('<body><h1>404 Page Not Found</h1></body>');
            // res.write('</html>');
            res.statusCode = 404;
            file = "404.html";
            break;
    }

    fs.readFile(`./views/${file}`, (err,data)=>{
        if (err) {
            res.end('<h1>Sorry! Something went wrong!</h1>')
        }else {
            res.end(data);
        }

    });

});

server.listen(3000,"localhost", () => {
    console.log('Server is running...');
});

