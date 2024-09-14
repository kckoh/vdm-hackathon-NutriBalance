import Table from "../Components/Table/index";
import Button from "../Components/Button";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageContainer from "../Components/ImageContainer";
import { useSelector } from "react-redux";
import { requestMoreInfo } from "../util/api";

function SubmitInfoPage() {
  // get the data from the redux store
  const data = useSelector((state) => state.text.extractedText);
  const navigate = useNavigate();

  const [imgUrl, setImgUrl] = useState(null);
  const [screenshot, setScreenshot] = useState(false);
  const [dataArray, setDataArray] = useState(data);

  const requestMoreInfoHandler = async () => {
    navigate("/info");
    const moreInfo = await requestMoreInfo(dataArray);
    console.log(moreInfo);
  };

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
            onClick={requestMoreInfoHandler}
            className="text-white bg-[#81C667]"
            disabled={dataArray.length === 0}
          >
            More Info
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
