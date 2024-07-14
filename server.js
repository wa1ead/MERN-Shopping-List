const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

//CORS HEADER
app.use(cors());

//BODY-PARSER MIDDLEWARE
app.use(express.json());

//DB CONFIG
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected..."))
  .catch((err) => console.log(err));

//GENERATE ROUTES
app.use("/api/items", require("./routes/api/Items"));
app.use("/api/users", require("./routes/api/Users"));

//SERVE STATIC ASSETS
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
