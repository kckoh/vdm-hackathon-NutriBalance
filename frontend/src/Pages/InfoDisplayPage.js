import { useSelector } from "react-redux";
import ImageContainer from "../Components/ImageContainer";

function InfoDisplayPage() {
  //base64로 인코딩된 이미지는 그대로 sorce로도 사용가능
  const text = useSelector((state) => state.text.extractedText);
  console.log(text);

  return (
    <>
      <div
        className="InfoDisplayPage"
        style={{ margin: "50px", padding: "5%" }}
      >
        <h3>Vitamin C</h3>
        <ImageContainer />
        <div>
          <span style={{ position: "absolute", top: "75%", left: "40%" }}>
            <img src="/Icons/loadingIcon.png" alt="Loading" />
          </span>
          <ul
            style={{
              width: "500px",
              height: "300px",
              overflowY: "scroll",
              borderRadius: "10px",
              border: "1px solid #81C667",
            }}
          >
            {text.map((item) => (
              <li>{item.Nutrition}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InfoDisplayPage;
