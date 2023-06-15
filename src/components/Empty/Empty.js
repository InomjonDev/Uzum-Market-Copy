import React from "react";
import EmptyCat from "../../assets/empty/shopocat.png";
import { Link } from "react-router-dom";
import "./Empty.css";

function Empty() {
  return (
    <div className="empty__wrapper">
      <div className="empty__img">
        <img src={EmptyCat} alt="Cat" width={128} />
      </div>
      <h2 className="empty__title">Hozirda mahsulot yo'q</h2>
      <p className="empty__text">
        Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv
        orqali toping
      </p>
      <Link className="empty__btn" to={"/"}>
        Bosh sahifa
      </Link>
    </div>
  );
}

export default Empty;
