// index.js
const express = require("express");
const hubsRouter = require("./hubs/hubs-router.js"); // <<<<<<<<<<<<
// 5 import the router
const productsRouter = require("./products/products-router.js");
const server = express();
server.use(express.json());
// endpoints
// when the url of the request begins with /api/hubs use the router
server.use("/api/hubs", hubsRouter); // <<<<<<<<<
// 6 use the router for any request the begin with /api/products
server.use("/api/products", productsRouter);
server.get("/", (req, res) => {
  res.send(`
  <h2>Lambda Hubs API</h>
  <p>Welcome to the Lambda Hubs API</p>
`);
});
// router to handle products
const port = 4000;
server.listen(port, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
