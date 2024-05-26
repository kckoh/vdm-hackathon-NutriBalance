const express = require("express");

const app = express();
const cors = require("cors");
const port = 3060;

const imageRouter = require("./routes/imageRoutes");

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
