import React from "react";

const DATA = [
  "Elektronika",
  "Maishiy Texnika",
  "Kiyim",
  "Poyabzal",
  "Aksessuarlar",
  "Go'zallik",
  "Salomatlik",
  "Uy-qurilish buyumlari",
  "Avtotovarlar",
];

function NavbarBottom() {
  return (
    <div className="container">
      <ul className="nav__bottom-collection">
        {DATA?.map((item, inx) => (
          <li className="nav__bottom-item" key={inx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarBottom;
