import img from "../image/clickLogo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex basis-1/5 justify-center items-center py-20 font-semibold text-xl">
        Unlock personalized supplements and elevate your health journey
        effortlessly!
      </div>

      <div className="flex basis-4/5 justify-center items-center">
        {/* <Routes>
        <Route path="/about" element={<ImgUploadPage />} />
      </Routes> */}
        <div className="h-96 w-96 justify-center items-center mb-16">
          <Link
            className="justify-center items-center text-[#56D837] text-4xl font-semibold"
            to="/upload_image"
          >
            <img className="mb-5" src={img} alt="img" />
            <div className="flex justify-center">Click</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
