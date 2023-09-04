const express = require("express");
const userRouter = require("./routes/userRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.DB_PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/db/users", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "port is listening on 4000" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
