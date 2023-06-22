import React from "react";
import "./Sidebar.css";
import {
  BsHeadphones,
  BsFillCalendar2WeekFill,
  BsBuildingsFill,
} from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { TbPaperBagOff } from "react-icons/tb";
import { MdFoodBank, MdOutlineInterests, MdChildCare } from "react-icons/md";
import {
  GiVendingMachine,
  GiClothes,
  GiBallerinaShoes,
  GiAutoRepair,
  GiHealthNormal,
} from "react-icons/gi";
import { FaHeart, FaPumpSoap, FaFistRaised } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { WiWindBeaufort2 } from "react-icons/wi";
import { BiLeaf } from "react-icons/bi";

function Sidebar({ show, setShow }) {
  const icons = [
    { name: <BsHeadphones fill="#76797F" />, text: "Elektronika" },
    {
      name: <GiVendingMachine fill="#8A5DE3" />,
      text: "Maishiy Texnika",
    },
    { name: <GiClothes fill="#54C6FF" />, text: "Kiyim" },
    { name: <GiBallerinaShoes fill="#FF5353" />, text: "Poyabzal" },
    { name: <BiLeaf />, text: "Aksessuarlar" },
    { name: <WiWindBeaufort2 />, text: "Go'zallik" },
    { name: <GiHealthNormal />, text: "Salomatlik" },
    { name: <BsBuildingsFill />, text: "Uy-qurilish buyumlari" },
    { name: <GiAutoRepair />, text: "Avtotovarlar" },
  ];
  return (
    <>
      {show ? (
        <div className="sidebar__shadow" onClick={() => setShow(false)}></div>
      ) : (
        <></>
      )}

      <div className={`sidebar ${show ? "show" : ""}`}>
        {icons?.map((icon, inx) => (
          <ul key={inx} className="sidebar__list">
            <li className="sidebar__item">
              <span>{icon.name}</span>
              <p>{icon.text}</p>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
