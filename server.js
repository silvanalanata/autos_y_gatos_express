// Carga el módulo de Express (¿de dónde crees que viene esto?)
var myexpress = require("express");

var app = myexpress();

app.use(myexpress.static(__dirname + "/static"));

//al acceder a http://localhost:8000/ entra automaticamente a index.html
app.get('/', function(request, response) {
  fs.readFile('./index.html', 'utf8', function (errors, contents) {
    response.writeHead(200, { 'Content-Type': 'text/html' });  
    response.write(contents);  
    response.end(); 
});
  })
  
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
  
    