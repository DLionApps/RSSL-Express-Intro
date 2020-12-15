const express = require("express");
const app = express();
var mongoose = require("mongoose");

const port = process.env.PORT || 4000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  var mongoDB =
    "mongodb+srv://SysAdmin:19921230@express-intro.vxg9g.mongodb.net/ExpressDB?retryWrites=true&w=majority";
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection.on("connected", () => {
    console.log("Mongo DB Connected");
  });

  mongoose.connection.on("error", () => {
    console.log(console, "MongoDB connection error:");
  });
} catch (ex) {
  console.log(ex);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

require("./src/controllers/UserContoller")(app);
module.exports = server;
