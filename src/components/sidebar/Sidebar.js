import React from "react";
import "./Sidebar.css";

function Sidebar({ show, setShow }) {
  return (
    <>
      {show ? (
        <div className="sidebar__shadow" onClick={() => setShow(false)}></div>
      ) : (
        <></>
      )}

      <div className={`sidebar ${show ? "show" : ""}`}></div>
    </>
  );
}

export default Sidebar;
