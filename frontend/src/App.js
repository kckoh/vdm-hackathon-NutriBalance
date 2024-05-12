import "./App.css";
import NavPage from "./components/NavBar";
import img from "./image/clickLogo.png";

function App() {
  return (
    <div className="grid grid-rows-10 border-4 border-sky-500 h-screen">
      <div className="row-span-1 border-4 border-red-500 flex bg-[#81C667]">
        <div className="justify-center m-auto">
          <NavPage />
        </div>
      </div>
      <div className="flex flex-col row-span-9 border-4 border-green-500 h-full px-5">
        <div className="flex basis-1/4 justify-center items-center border-4 border-blue-400">
          Unlock personalized supplements and elevate your health journey
          effortlessly!
        </div>

        <div className="flex basis-3/4 justify-center items-center border-4 border-pink-400">
          {/* <Routes>
          <Route path="/about" element={<ImgUploadPage />} />
        </Routes> */}
          <div className="flex border-4 border-red-900 max-h-40 max-w-40">
            <button>
              <img
                className="size-auto border-4 border-red"
                src={img}
                alt="img"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
