const express = require('express');
const server = express();
const {logger} = require("./middleware/middleware")
const userRouter = require("./users/users-router")

// remember express by default cannot parse JSON in request bodies
server.use(express.json())
server.use(logger("long"))
server.use(userRouter)
// global middlewares and the user's router need to be connected here

server.get('/api/test', (req, res) => {
  res.status(200).json({
		deleted: `Welcome ${process.env.DELETED_SUCCESS}`,
		
	})
})



server.use((err, req, res, next) => {
  console.log(err)

  res.status(500).json({message: "Something went wrong..."})

})

module.exports = server;
