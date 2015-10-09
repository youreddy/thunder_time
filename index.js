var express = require('express')
var app = express();
var http = require('http').Server(app);
// express has defined the method get
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.set('port', process.env.PORT || 3000);

http.listen(app.get('port'), function(){
  console.log('listening on *:3000');
});
