import Table from "../Components/Table/index";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageContainer from "../Components/ImageContainer";

function SubmitInfoPage() {
  const [imgUrl, setImgUrl] = useState(null);
  const [screenshot, setScreenshot] = useState(false);
  const navigate = useNavigate();

  // const SubmitData = () => {
  //   // after connecting to backend api. erase it
  //   // need to triger chatGPT APi

  //   navigate("/info");
  // };

  return (
    <>
      <div
        className="InfoDisplayPage"
        style={{ margin: "50px", padding: "5%" }}
      >
        <h3>Vitamin C</h3>
        <ImageContainer />
        <Table />
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Button
            onClick={() => navigate("/info")}
            className="text-white bg-[#81C667]"
          >
            Send
          </Button>
          <Button
            onClick={() => {
              setImgUrl(null);
              setScreenshot(false);
              navigate("/upload_image");
            }}
            className="bg-white text-[#81C667] border-2 border-[#81C668] "
          >
            Refresh
          </Button>
        </div>
      </div>
    </>
  );
}

export default SubmitInfoPage;
