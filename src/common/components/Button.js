import { IconSpinner } from "./Icons";

const Button = ({
  loading = false,
  style,
  type = "button",
  children,
  onClick = () => console.log("Button Clicked"),
}) => {
  const primary = `border-blue-500 text-blue-500 border-2 uppercase font-bold py-2 px-4 w-full rounded-lg 
  hover:text-white hover:bg-blue-500 focus:outline-none focus:text-white focus:bg-blue-500 ease-out 
  duration-300`;

  const secondary = `border-gray-500 text-gray-500 border-2 uppercase font-bold py-2 px-4 w-full rounded-lg 
  hover:text-blue-500 hover:border-blue-500 focus:outline-none focus:text-blue-500 focus:border-gray-700 ease-out 
  duration-300`;

  const getStyles = () => {
    switch (style) {
      case "primary":
        return primary;
      case "secondary":
        return secondary;
      default:
        return primary;
    }
  };

  return (
    <button
      disabled={loading}
      type={type}
      className={getStyles()}
      onClick={onClick}
    >
      <div className="mx-auto">
        {loading ? <IconSpinner colorClass="w-6 h-6" /> : <div>{children}</div>}
      </div>
    </button>
  );
};

export default Button;
