import React from "react";

import "./Custombutton.scss";

const Custombutton = ({
  children,
  isInverted,
  isGoogleSignin,
  ...otherProps
}) => {
  return (
    <button
      className={` ${isInverted ? "inverted" : ""} ${
        isGoogleSignin ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Custombutton;
