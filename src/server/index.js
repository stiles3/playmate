var app = require('http').createServer()
var  io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection',SocketManager)

app.listen(PORT, ()=> {
    console.log("Connected to port:" + PORT);
})
io.on('error', function (err) { 
    console.log("Socket.IO Error"); 
    console.log(err.stack); // this is changed from your code in last comment
 });