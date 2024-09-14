import { Outlet } from "react-router-dom";
import NavPage from "../Components/NavBar/index";

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
