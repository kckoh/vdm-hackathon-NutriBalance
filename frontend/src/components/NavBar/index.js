const NavPage = () => {
  return (
    <>
      <div className="p-4 bg-[#81C667]">
        <div className="m-auto flex" style={{justifyContent: 'space-between'}}>
          <h1 >
            <button>
              <img src='Icons/logoIcon.png' alt='logo'/>
            </button>
          </h1>
          <div className="text-3xl font-bold py-0.5 text-white pr-">
            <button>NutriBalance</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPage;
