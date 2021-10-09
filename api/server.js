const express = require('express');
const server = express();
const cors = require('cors')

// Configure your server here
server.use(express.json())
server.use(cors())
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const currentTime = new Date().toLocaleTimeString();

server.use("*", (req,res)=>{
    res.status(200).json({
        message: `Server is up and running at ${currentTime}`
    })
})

module.exports = server;
