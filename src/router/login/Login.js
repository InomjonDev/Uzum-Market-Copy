import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let newUser = { username, password };

    if (username === "iii-1208" && password === "iii-1208") {
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Log In");
      navigate("/admin/create-product");
    } else {
      toast.error("Parolning foydalanuvchi nomi noto'g'ri");
    }
  };

  return (
    <div className="container login">
      <form className="login__wrapper" onSubmit={handleLogin}>
        <h2 className="login__title">Telefon raqamini kiriting</h2>
        <p className="login__text">Tasdiqlash kodini SMS orqali yuboramiz</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login__btn">Kodni olish</button>
        <p className="btn__link">Parol bilan kirish</p>
        <p className="login__subtext">
          Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash
          siyosatiga rozilik bildirasiz
        </p>
      </form>
    </div>
  );
}

export default Login;
