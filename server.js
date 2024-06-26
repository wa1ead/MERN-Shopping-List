const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//BODY-PARSER MIDDLEWARE
app.use(bodyParser.json());
