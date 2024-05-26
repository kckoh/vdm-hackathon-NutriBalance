import Table from "../Components/Table/index";

function SubmitInfoPage() {
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
      </div>
    </>
  );
}

export default SubmitInfoPage;
