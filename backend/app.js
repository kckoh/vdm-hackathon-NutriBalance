const port = 3060;
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const imageRouter = require("./routes/imageRoutes");

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credential: false,
  })
);

app.use("/api/v1/images", imageRouter);

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
