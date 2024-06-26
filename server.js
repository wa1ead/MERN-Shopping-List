const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Items = require("./routes/api/Items");

const app = express();

//BODY-PARSER MIDDLEWARE
app.use(bodyParser.json());

//DB CONFIG
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(db)
  .then(() => console.log("MongoDb connected..."))
  .catch((err) => console.log(err));

//GENERATE ROUTES
app.use("/api/items", Items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
