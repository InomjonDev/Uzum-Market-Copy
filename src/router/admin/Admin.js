import React from "react";
import "./Admin.css";
import CreateProduct from "./createProduct/CreateProduct";
import ManageProduct from "./manageProduct/ManageProduct";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineAppstoreAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

function Admin() {
  return (
    <div className="admin">
      <div className="admin__sidebar">
        <div className="title">
          <Link to={"/"}>
            <button className="to-home">
              <AiOutlineArrowLeft fill="#519f64" />
            </button>
          </Link>
          &nbsp; Admin dashboard
        </div>
        <ul className="admin__collection">
          <li className="admin__item">
            <NavLink to={`create-product`} className="admin__link">
              <AiOutlineAppstoreAdd /> &nbsp;Create Product
            </NavLink>
            <NavLink to={`manage-product`} className="admin__link">
              <FiEdit /> &nbsp;Manage Product
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
