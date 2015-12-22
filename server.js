var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static/templates', express.static('./app/templates'));
app.use('/app', express.static('./app'));
app.use('/node_modules', express.static('./node_modules'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// redirection
app.get('/connect', function(req, res){
  res.redirect('/');
});
app.get('/chat-room', function(req, res){
  res.redirect('/');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });

  socket.on('chat message', function( msg ){
    console.log('message: ' + msg);
    io.emit('chat message', msg);  });
});

http.listen(3000, function(){
  console.log('listen on *:3000');
});
