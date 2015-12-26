var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static/templates', express.static('./app/templates'));
app.use('/app', express.static('./app'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/static/css', express.static('./app/css'));
app.use('/static/vendor', express.static('./app/vendor'));

/*
  GLOBAL VARIABLES
*/
var USERS = [];
var MESSAGES = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// API
app.get('/api/users/register', function(req, res){
  if (MESSAGES.includes(req.query.q))
    res.send(false);
  else{
    MESSAGES.push(req.query.q);
    res.send(true);
  }
});

// redirection
app.get('/connect', function(req, res){
  res.redirect('/');
});
app.get('/chat-room', function(req, res){
  res.redirect('/');
});

// socket
io.on('connection', function(socket){

  socket.on('disconnect', function(){
  });

  socket.on('chat message', function( msg ){
    console.log(msg);
    io.emit('chat message', msg);  });
});

http.listen(3000, function(){
  console.log('listen on *:3000');
});
