import { useSelector } from "react-redux";

export default function ImageContainer({ image }) {
  const img = useSelector((state) => state.camera.image);

  return (
    <div
      style={{
        width: "50%",
        height: "250px",
        border: "1px solid orange",
        marginBottom: "50px",
        marginTop: "20px ",
      }}
    >
      <img src={img} alt="Captured" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
