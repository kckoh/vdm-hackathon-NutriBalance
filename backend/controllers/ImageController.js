const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const { ImageAnnotatorClient } = require("@google-cloud/vision");
const client = new ImageAnnotatorClient();

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
      const filePath = req.file.path;
      const [result] = await client.textDetection(filePath);
      const detections = result.textAnnotations;
      const text = detections.length ? detections[0].description : "";

      console.log("Text is successfully extracted!");

      const options = {
        includeScore: true,
        threshold: 0.8,
        keys: ["name"],
      };

      const fuse = new Fuse(
        nutrientsList.supplements.map((item) => ({
          name: item.name,
        })),
        options
      );

      const extractedText = fuse.search(text);

      res.status(200).send(extractedText);
    } catch (error) {
      console.error(error);
    }
  }
);
