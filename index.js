require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const apiRouter = require('./routers/allRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',apiRouter);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, function () {
  console.log("Listening on port ",port);
});