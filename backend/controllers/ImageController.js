const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const { ImageAnnotatorClient } = require("@google-cloud/vision");
const client = new ImageAnnotatorClient({
  keyFilename: "./nutribalance.json",
});

const Fuse = require("fuse.js");

const nutrientsNameLists = fs.readFileSync(
  "./lib/nutrientsLists.json",
  "utf-8"
);
const nutrientsList = JSON.parse(nutrientsNameLists);

// Image handling
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자 추출
      const basename = path.basename(file.originalname, ext);
      done(null, basename + "_" + new Date().getTime() + ext);
    },
  }),
  limits: { fieldNameSize: 20 * 1024 * 1024 },
});

exports.sendImage = router.post(
  "/send",
  upload.single("file"),
  async (req, res) => {
    try {
      //filePath를 통해서 저장된 파일의 path를 알 수 있다.
      if (!req.file) {
        return res.status(400).send("No file uploaded");
      }

      const filePath = req.file.path;
      const [result] = await client.textDetection(filePath);
      const detections = result.textAnnotations;

      if (!detections)
        return "there is no text! Please take a picture properly";

      const text = detections.length ? detections[0].description : "";

      console.log("Text is successfully extracted!");
      console.log(text);

      const options = {
        includeScore: true,
        threshold: 0.8,
        keys: ["name"],
      };

      const fuse = new Fuse(
        nutrientsList.supplements.map((item) => ({
          name: item.name,
          value: item.dailyRecommendedAmount,
        })),
        options
      );

      const fuseResults = fuse.search(text);

      //만약 찾고자 하는 영양소가 리스트에 없는 경우에 추가할 수 있을까? 그럴려면
      //영양소 리스트를 데이터 base에 저장해서 찾는 방식으로 approach하고 없는 경우는
      //없는 영양소를 하루 추천 권장량과 데이터 베이스에 추가 해야 한다

      //change the data format
      console.log("fuuuuuuuuuuuuuuuuuuuu", fuseResults);

      const formattedResults = fuseResults.map((result) => ({
        Nutrition: result.item.name,
        Value: result.item.value,
      }));

      //////////////////////////// temporarly code to seperate texts and number by using geral expression ////////////////////////////////////////////////
      // const fuse = new Fuse(nutrientsList.supplements, options);

      // const formattedResults = fuseResults.forEach((result) => {
      //   const regex = new RegExp(
      //     `(${result.item.name} \\d+\\s*(mg|g|IU))`,
      //     "i"
      //   );
      //   const match = text.match(regex);
      //   if (match) {
      //     const parts = match[0].split(" ");
      //     console.log({
      //       Nutrition: parts.slice(0, -2).join(" "),
      //       Value: parts.slice(-2).join(" "),
      //     });
      //   }
      // });
      //////////////////////////////////////////////////////////////////////////////////////////////////

      //Data 형식은 [
      // {item: {name: Vitamin B Complex}}
      // ]

      res.status(200).send(formattedResults);
    } catch (error) {
      console.error(error);
    }
  }
);
