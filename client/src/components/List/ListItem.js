import React from "react";

export const ListItem = props =>
  <li className="list-group-item bg-light text-dark">
    {props.children}
  </li>;