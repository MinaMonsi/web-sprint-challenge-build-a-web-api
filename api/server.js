const express = require('express');
const server = express();
const cors = require('cors')

// Configure your server here
server.use(express.json())
server.use(cors())
// Build your actions router in /api/actions/actions-router.js
const actionsRouter = require('./actions/actions-router')
// Build your projects router in /api/projects/projects-router.js
const projectsRouter = require('./projects/projects-router')
// Do NOT `server.listen()` inside this file!
const currentTime = new Date().toLocaleTimeString();

server.use("/api/actions", actionsRouter)
server.use("/api/projects", projectsRouter)

server.use("*", (req,res)=>{
    res.status(200).json({
        message: `Server is up and running at ${currentTime}`
    })
})

module.exports = server;
