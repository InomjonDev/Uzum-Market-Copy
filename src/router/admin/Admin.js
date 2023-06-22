import React from "react";
import "./Admin.css";
import CreateProduct from "./createProduct/CreateProduct";
import ManageProduct from "./manageProduct/ManageProduct";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Admin() {
  return (
    <div className="admin">
      <div className="admin__sidebar">
        <Link to={"/"}>
          <button>
            <AiOutlineArrowLeft />
          </button>
        </Link>
        <h2>Admin dashboard</h2>
        <ul className="admin__collection">
          <li className="admin__item">
            <NavLink to={`create-product`} className="admin__link">
              Create Product
            </NavLink>
            <NavLink to={`manage-product`} className="admin__link">
              Manage Product
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/manage-product" element={<ManageProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
