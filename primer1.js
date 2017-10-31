var http = require('http');
var dt = require('./mojprvimodul');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Trenutni datum i vreme: "+dt.myDateTime());
    res.end();
}).listen(8000);