import { useState } from "react";
import { useSelector } from "react-redux";

function Table() {
  const data = useSelector((state) => state.text.extractedText);

  const [dataArray, setDataArray] = useState(data);

  function ConvertDataFormat(data) {
    const newData = data.map((item) => {
      const newItem = {};
      newItem[item.Nutrition] = item.Value;
      return newItem;
    });
    return newData;
  }

  const convertedData = ConvertDataFormat(data); // where would it be more suitable?

  sessionStorage.setItem("data", JSON.stringify(convertedData));

  const AddRow = () => {
    setDataArray([...dataArray, { Nutrition: "", Value: "" }]);
  };

  const CorrectInput = (e, name, type) => {
    const newData = [...dataArray];
    const index = newData.findIndex((item) =>
      type === "Nutrition" ? item.Nutrition === name : item.Value === name
    );
    if (index !== -1) {
      newData[index][type] = e.target.value;
      setDataArray(newData);
    }
  };

  const ClickDeleteButton = (id) => {
    const newData = [...dataArray];
    const deleteItem = newData.findIndex((item) => item.id === id);
    if (deleteItem !== -1) {
      newData.splice(deleteItem, 1);
      setDataArray(newData);
    }
  };

  return (
    <div
      style={{ maxHeight: "250px", overflowY: "scroll", width: "inline-block" }}
    >
      <button
        style={{ position: "absolute", top: "64.5%", right: "32%", zIndex: 99 }}
      >
        <img
          onClick={AddRow}
          style={{ width: "18px", height: "18px" }}
          src="/Icons/addIcon.png"
          alt="add row icon"
        />
      </button>
      <table
        style={{
          border: "1px solid #81C667",
          width: "80%",
          borderSpacing: "0",
        }}
      >
        <thead
          style={{
            background: "#81C667",
            width: "100%",
            color: "#fff",
            position: "sticky",
          }}
        >
          <tr>
            <th style={{ padding: "15px", textAlign: "center" }}>Nutrition</th>
            <th style={{ padding: "15px", textAlign: "center" }}>
              *D/R Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((row) => {
            return (
              <tr key={row.id}>
                <td
                  style={
                    dataArray.indexOf(row) === dataArray.length - 1
                      ? { width: "50%", textAlign: "center", padding: "10px 0" }
                      : {
                          borderBottom: "1px solid #81C667",
                          width: "50%",
                          textAlign: "center",
                          padding: "10px 0",
                        }
                  }
                >
                  <input
                    style={{ border: "0px", backgroundColor: "transparent" }}
                    placeholder="Enter text"
                    onChange={(e) =>
                      CorrectInput(e, row.Nutrition, "Nutrition")
                    }
                    value={row.Nutrition}
                  />
                </td>
                <td
                  style={
                    dataArray.indexOf(row) === dataArray.length - 1
                      ? {
                          width: "100%",
                          textAlign: "center",
                          padding: "10px 0",
                          display: "flex",
                          justifyContent: "space-around",
                        }
                      : {
                          borderBottom: "1px solid #81C667",
                          width: "100%",
                          textAlign: "center",
                          padding: "10px 0",
                          display: "flex",
                          justifyContent: "space-around",
                        }
                  }
                >
                  <div>
                    <input
                      style={{ border: "0px", backgroundColor: "transparent" }}
                      placeholder="Enter text"
                      onChange={(e) => CorrectInput(e, row.Value, "Value")}
                      value={row.Value}
                    />
                  </div>
                  <div>
                    <button
                      style={{ width: "20px", height: "20px" }}
                      onClick={() => ClickDeleteButton(row.id)}
                    >
                      <img src="/Icons/closeIcon.png" alt="row delete icon" />
                    </button>
                    <button style={{ width: "20px", height: "20px" }}>
                      <img
                        src="/Icons/correctionIcon.png"
                        alt="row correcting icon"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>*D/R: Daily Recommended</p>
    </div>
  );
}

export default Table;
