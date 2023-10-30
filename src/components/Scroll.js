import React from "react";

const Scroll = ({ children }) => {
  return <div style={{ overflowY: "auto", height: "500px" }}>{children}</div>;
};

export default Scroll;
