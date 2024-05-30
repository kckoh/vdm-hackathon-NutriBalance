const port = 3060;
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const imageRouter = require("./routes/imageRoutes");

dotenv.config();
morgan("tiny");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credential: false,
  })
);

app.use("/api/v1/images", imageRouter);

//만약 한 주소에 여러 method을 부르는 것이라면 아래와 같이 refactoring 할 수 있다
// app.route("/api/v1/tours").get(getTours).post(createTour)

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
