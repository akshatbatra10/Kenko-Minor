import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState, setLoggedIn } = useStateContext();

  return (
    <button
      type='button'
      onClick={() => {
        if (text === "Logout") {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("Doctor");
          setLoggedIn(false);
        } else {
          setIsClicked(initialState);
        }
      }}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>
      {icon} {text}
    </button>
  );
};

export default Button;
