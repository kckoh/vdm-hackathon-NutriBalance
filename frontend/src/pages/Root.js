import { Outlet } from "react-router-dom";
import NavPage from "../Components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavPage />
      <div className="flex-col">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
