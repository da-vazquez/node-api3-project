// require your server and launch it

const { eventNames } = require("./api/server")
const server = require("./api/server")

const port = process.env.PORT || 4000

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})