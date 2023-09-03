const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.DB_PORT;

app.listen(PORT, (req, res) => {
  console.log(`server is listening on port ${PORT}`);
});
