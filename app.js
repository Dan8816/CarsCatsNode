// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response)
{
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/')
    {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/stylesheets/bootstrap.min.css')
    {
        fs.readFile('./stylesheets/bootstrap.min.css', 'utf8', function(errors, contents)
        {
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
    }
    else if(request.url === '/images/BMW.jpg')//1st car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/BMW.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Cruz.jpg')//2nd car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Cruz.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Finn.jpg')//3rd car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Finn.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/FireTruck.jpg')//4th car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/FireTruck.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Mater.jpg')//5th car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Mater.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/McQueen.jpg')//6th car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/McQueen.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Sally.jpg')//7th car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Sally.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Tractor.jpg')//8th car
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Tractor.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/RollCat.jpg')//cat 1
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/RollCat.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/HalfCat.jpg')//cat 2
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/HalfCat.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/MonaLisa.jpg')//cat 3
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/MonaLisa.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/CowboyCat.jpg')//cat 4
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/CowboyCat.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Felix.jpg')//cat 5
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Felix.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Garf.png')//cat 6
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Garf.png', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/Heath.jpg')//cat 7
    {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Heath.jpg', function(errors, contents)
        {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === "/cars")//this is how a route is extended
    {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents)//to look for a file xxxxx.html
        {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars/new")//this is how a route is extended
    {
        fs.readFile('./views/newcars.html', 'utf8', function (errors, contents)//to look for a file xxxxx.html
        {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats")//this is how a route is extended
    {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents)//to look for a file xxxxx.html
        {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else
    {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 6789");