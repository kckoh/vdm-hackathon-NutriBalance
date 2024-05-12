import { useNavigate } from "react-router-dom";

const StartButton = () => {
  // const navigate = useNavigate();

  const buttonHandling = () => {
    console.log("hello");
  };

  return (
    <>
      <div>
        <button onClick={buttonHandling}>
          <img src="../image/clickLogo.png" alt="image" />
          click
        </button>
      </div>
    </>
  );
};

export default StartButton;
