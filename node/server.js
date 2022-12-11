const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const port = process.env.port;
const path = require("path");

const server = express();
const productRouter = express.Router();

server.use(morgan("combined"));
server.use(express.static(path.join(__dirname, "/public/")));

server.set("views", "./src/views");
server.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.send("Production");
});
server.use("/product", productRouter);

server.get("/", (req, res) => {
  res.render("index", {
    username: "parwer",
    customer: ["parwrar", "kut", "somethingelse"],
  });
  // res.send("156789")
});

server.listen(port, () => {
  debug(`Listening on port ${port}`);
});
