import Button from "../components/Button/index";

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: { exact: "environment" },
};

const ImgUploadPage = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const [screenshot, setScreenshot] = useState(false);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setScreenshot(true);

    setUrl(imageSrc);
  }, [webcamRef]);

  //Manage State
  const onUserMedia = (e) => {
    console.log(e);
  };

  const [cameraOn, setCameraOn] = useState(true);

  const sendPicture = () => {
    console.log("succeed");
  };

  console.log(url);

  return (
    <div className="flex-col">
      <div className="justify-center border-4 border-[#81C668] m-10 p-5 rounded-lg">
        {!screenshot ? (
          <Webcam
            className="size-full rounded-lg"
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
            onUserMedia={onUserMedia}
            mirrored={true}
          />
        ) : (
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        )}

        <div className="flex justify-center">
          {!screenshot ? (
            <Button onClick={capturePhoto} className="text-white bg-[#81C667]">
              Capture
            </Button>
          ) : (
            <>
              <Button onClick={sendPicture} className="text-white bg-[#81C667]">
                Send
              </Button>
              <Button
                onClick={() => {
                  setUrl(null);
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
  );
};

{
  /* // <div className="flex justify-center items-center">
    //   {cameraOn ? ( */
}
{
  /* //     <div>
    //       <div>
    //         <Camera />
    //       </div>
    //       <div>
    //         <ButtonComponent />
    //       </div>
    //     </div>
    //   ) : (
    //     <div>
    //       <div>
    //         <MainWindow />
    //       </div>
    //       <div>
    //         <ButtonComponent />
    //       </div>
    //     </div>
    //   )}
    // </div> */
}

export default ImgUploadPage;
