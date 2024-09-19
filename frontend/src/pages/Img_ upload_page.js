import Button from "../Components/Button/index";

import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { saveImage } from "../reducers/saveImage";
import { getExtractedText } from "../reducers/getText";
import { sendData } from "../util/api";

const videoConstraints = {
  facingMode: "environment",
  // facingMode: { exact: "environment" },
};

const ImgUploadPage = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imgUrl, setImgUrl] = useState(null);
  const [screenshot, setScreenshot] = useState(false);

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setScreenshot(true);
    setImgUrl(imageSrc);
  }, [webcamRef]);

  const sendPicture = async () => {
    try {
      //save image to transfer to info page
      dispatch(saveImage(imgUrl));

      //response have texts from the image //이 해당 response을 이곳이 아닌 다른 페이지로 넘어갈 때 자동적으로
      //해당 페이지에서 동작하게 해서 해당 이미지에서 받은 text를 해당 페이지에 보여주면 되는 거 아닌가? 해당 작업을
      //수행하지 전에 이 response로 받은 text를 어느곳에서 사용되는지 확인해야함
      const extractedText = await sendData(imgUrl);

      // TODO: I need to know the structure of extractedText to create the model of redux

      //Save extracted nutrients from image into redux store.
      dispatch(getExtractedText(extractedText));

      console.log("Image sent successfully", extractedText);
      navigate("/submitInfo");
    } catch (error) {
      console.error("Failed to send image", error);
    }
  };

  return (
    <>
      <div className="flex-col">
        <div className="justify-center border-4 border-[#81C668] m-10 p-5 rounded-lg">
          {!screenshot ? (
            <Webcam
              className="size-full rounded-lg transform -scale-x-1"
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/png"
              videoConstraints={videoConstraints}
              // onUserMedia={onUserMedia} // If I need to implement some call back function, I can use this.
              mirrored={false}
            />
          ) : (
            <div>
              <img src={imgUrl} alt="Screenshot" />
            </div>
          )}

          <div className="flex justify-center">
            {!screenshot ? (
              <Button
                onClick={capturePhoto}
                className="text-white bg-[#81C667]"
              >
                Capture
              </Button>
            ) : (
              <>
                <Button
                  onClick={sendPicture}
                  className="text-white bg-[#81C667]"
                >
                  Send
                </Button>
                <Button
                  onClick={() => {
                    setImgUrl(null);
                    setScreenshot(false);
                  }}
                  className="bg-white text-[#81C667] border-2 border-[#81C668] "
                >
                  Refresh
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgUploadPage;
