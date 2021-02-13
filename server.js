const express = require('express');
const app = express();
const server = app.listen(5000);
const io = require('socket.io')(server);
io.on('connection', socket =>{
    console.log(`A player has connected ${socket.id}`);
    socket.on('disconnect', ()=>{
        console.log(`A player has disconnected: ${socket.id}`)
    });
    socket.on('msg', msg =>{
        console.log(msg);
        socket.broadcast.emit('msg', msg);
    })
})
app.use(express.static('public'));