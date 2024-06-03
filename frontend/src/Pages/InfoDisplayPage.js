import { useSelector } from "react-redux";

function InfoDisplayPage() {
  //base64로 인코딩된 이미지는 그대로 sorce로도 사용가능
  const img = useSelector((state) => state.camera.image);
  const text = useSelector((state) => state.text.extractedText);
  console.log(text.map((nutrients) => nutrients.item.name));

  return (
    <>
      <div
        className="InfoDisplayPage"
        style={{ margin: "50px", padding: "5%" }}
      >
        <h3>Vitamin C</h3>
        <div
          style={{
            width: "50%",
            height: "250px",
            border: "1px solid orange",
            marginBottom: "50px",
            marginTop: "20px ",
          }}
        >
          <img
            src={img}
            alt="Captured"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
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
            {text.map((nutrients) => (
              <li>{nutrients.item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InfoDisplayPage;
