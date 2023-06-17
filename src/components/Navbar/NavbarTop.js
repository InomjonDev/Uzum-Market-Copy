import React from "react";

import { GrLocation } from "react-icons/gr";

function NavbarTop() {
  return (
    <div className="navbar__top">
      <div className="container navbar__top-wrapper">
        <div>
          <GrLocation />
          <p>&nbsp; Shahar</p>
        </div>
        <div>
          <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
        </div>
        <div>
          <p>Savol-javoblar</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
