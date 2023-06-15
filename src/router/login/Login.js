import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container login">
      <div className="login__wrapper">
        <h2 className="login__title">Telefon raqamini kiriting</h2>
        <p className="login__text">Tasdiqlash kodini SMS orqali yuboramiz</p>
        <input type="text" placeholder="+998 00 000-00-00" />
        <button className="login__btn">Kodni olish</button>
        <p className="btn__link">Parol bilan kirish</p>
        <p className="login__subtext">
          Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash
          siyosatiga rozilik bildirasiz
        </p>
      </div>
    </div>
  );
}

export default Login;
