const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const nutrientsList = require("../lib/nutrientsLists");
const Fuse = require("fuse.js");

const { createWorker } = require("tesseract.js");
const { getNutrientsNames } = require("../util/index");

//I need to get image from front here, and need to transform in
//over

//이미지 찍을때 control을 할 수 없을까?

//Get Top 20 nutrients that can be taken from supplements for adult men and women
const nutrientsNameLists = async () => {
  const names = await getNutrientsNames();
  console.log(names);
};

nutrientsNameLists();

//error hanling - 1. there is no text in the image
//error handling - 2. there is no text related to our topic

// Compare the text in the image with the top 20 nutriens
const options = {
  includeScore: true,
  threshold: 0.3,
  keys: ["name"],
};

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

router.post("/send", upload.single("file"), async (req, res) => {
  try {
    //filePath를 통해서 저장된 파일의 path를 알 수 있다.
    const filePath = req.file.path;
    console.log(filePath);

    const text = (async () => {
      const worker = await createWorker("eng");
      const ret = await worker.recognize(filePath);
      console.log(ret.data.text);
      await worker.terminate();
    })();

    res.status(200).send(text);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
