import Table from "../Components/Table/index";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SubmitInfoPage() {
  const [imgUrl, setImgUrl] = useState(null);
  const [screenshot, setScreenshot] = useState(false);
  const navigate = useNavigate();

  const SubmitData = () => {
    const data = sessionStorage.getItem("data");
    console.log("Submit Data", data); // after connecting to backend api. erase it
  };

  return (
    <>
      <div
        className="InfoDisplayPage"
        style={{ margin: "50px", padding: "5%" }}
      >
        <h3>Vitamin C</h3>
        <div
          style={{
            width: "25%",
            height: "200px",
            border: "1px solid orange",
            marginBottom: "50px",
          }}
        ></div>
        <Table />
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Link to="/result">
            <Button
              onClick={() => SubmitData()}
              className="text-white bg-[#81C667]"
            >
              Send
            </Button>
          </Link>
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
