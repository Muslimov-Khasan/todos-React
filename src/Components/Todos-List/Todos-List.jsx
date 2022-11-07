import React from "react";
import "./Todos-List.scss";

export const List = ({ children }) => {
  return (
    <>
      <ul className="list">{children}</ul>
    </>
  );
};