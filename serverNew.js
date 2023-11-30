// JSON Server module
const fs = require('fs');
const jsonServer = require("json-server");
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// https://github.com/typicode/json-server/issues/996

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)


server.use(jsonServer.bodyParser);
// pega os dados do body

// Define custom routes (routes.json)
const routes = JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')));
server.use(jsonServer.rewriter(routes));

server.use((req, res, next) => {
 // Add custom route here if needed
 next(),

 jsonServer.rewriter({
  "/*": "/$1",
 })

});
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running, 3000");
});

// Export the Server API
module.exports = server;