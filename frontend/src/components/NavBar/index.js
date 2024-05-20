import { Link } from "react-router-dom";

const NavPage = () => {
  return (
    <>
      <div className="flex py-4 bg-[#81C667]">
        <div className="justify-center m-auto">
          <div className="text-3xl font-bold py-0.5 text-white">
            <Link to="/">NutriBalance</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPage;
