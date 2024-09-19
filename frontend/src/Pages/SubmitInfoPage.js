import Table from "../Components/Table/index";
import Button from "../Components/Button";
import ImageContainer from "../Components/ImageContainer";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { requestMoreInfo } from "../util/api";

function SubmitInfoPage() {
  const navigate = useNavigate();

  // get the extracted texts from the redux store
  const data = useSelector((state) => state.text.extractedText);

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    setDataArray(data);
  }, [data]);

  const requestMoreInfoHandler = async () => {
    navigate("/infoDisplayPage");
    //To get more info by using chatGPT API, and need to pass this data to next page.
    //I think there are two ways to do so,
    //First, I need to pass this data to next page with a certain component with props.
    //Second, I can use redux to store this data and use it in the next page.
    //I think the second way is better because it is more convenient to manage the data.
    const getMoreInfo = await requestMoreInfo(dataArray);
    console.log("getMoreInfo", getMoreInfo);
  };

  return (
    <>
      <div
        className="InfoDisplayPage"
        style={{ margin: "50px", padding: "5%" }}
      >
        <h3>Captured Image</h3>
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
