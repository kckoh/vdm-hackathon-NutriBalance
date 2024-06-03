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
      const response = await sendData(imgUrl);

      //get extracted text from backend
      dispatch(getExtractedText(response));
      console.log("Image sent successfully", response);
      navigate("/submitInfo");
    } catch (error) {
      console.error("Failed to send image", error);
    }
  };

  const onUserMedia = (e) => {
    console.log(e);
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
              onUserMedia={onUserMedia}
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
