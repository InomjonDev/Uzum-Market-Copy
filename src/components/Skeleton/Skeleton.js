import React from "react";
import "./Skeleton.css";

function Skeleton() {
  return (
    <div className="skeleton">
      {new Array(10).fill("").map((__, inx) => (
        <div key={inx} className="skeleton__item">
          <div className="skeleton__img skeleton__anime"></div>
          <div className="skeleton__title skeleton__anime"></div>
          <div className="skeleton__desc skeleton__anime"></div>
          <div className="skeleton__btns">
            <div className="skeleton__price skeleton__anime"></div>
            <div className="skeleton__circle skeleton__anime"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
