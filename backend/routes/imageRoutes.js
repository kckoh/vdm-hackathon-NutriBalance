const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { createWorker } = require("tesseract.js");

//I need to get image from front here, and need to transform in
//over

//이미지 찍을때 control을 할 수 없을까?

//

//1. 영양제로 섭취간으한 성인이 필요로하는 주요 영양소 Top10
//2. Top10 - 해당 영양소를 이용해서 이미지에 포함되는

//error hanling - 1. there is no text in the image
//error handling - 2. there is no text related to our topic

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

// const worker = createWorker({
//   logger: (m) => console.log(m), // 로그 출력 설정
// });

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
