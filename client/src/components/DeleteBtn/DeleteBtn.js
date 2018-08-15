import React from "react";
//import "./DeleteBtn.css";

const DeleteBtn = props => (
  <span className="delete-btn" {...props} style={{ float: "right", marginBottom: 10 }}>
    &times;
  </span>
);

export default DeleteBtn;