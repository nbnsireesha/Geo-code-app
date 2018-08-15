import React from "react";

export const Col = ({ size, children }) =>
  <div className={`mx-auto ${size.split(" ").map(size => "col-" + size).join(" ")}`}>
    {children}
  </div>;