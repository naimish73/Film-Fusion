const express = require("express");
const userRouter = require("./routes/userRouter");
const movieRouter = require("./routes/movieRouter");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.DB_PORT;

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/db/users", userRouter);
app.use("/fetchMovieData", movieRouter);

app.get("/", (req, res) => {
  res.json({ message: "port is listening on 4000" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

const db = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
if (db) {
  console.log("MongoDB connected");
} else {
  console.log("Retry");
}
