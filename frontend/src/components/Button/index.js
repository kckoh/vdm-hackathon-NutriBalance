const ButtonComponent = ({ onClick, children, className = "", ...props }) => {
  console.log(className);
  return (
    <button
      onClick={onClick}
      className={`px-10 py-5 m-5 mb-2 rounded-lg ${className} font-bold`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
