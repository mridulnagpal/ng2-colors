var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('log', function(msg){
    console.log("\x1b[32m", msg);
  });
  socket.on('error', function(msg){
    console.log("\x1b[31m", msg);
  });
  socket.on('warn', function(msg){
    console.log('\x1b[33m%s\x1b[0m: ', msg);
  });


});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
