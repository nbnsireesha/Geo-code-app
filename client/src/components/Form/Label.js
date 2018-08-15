import React from "react";

export const Label = props =>
  <label {...props} className="form-label">
    {props.children}
  </label>;