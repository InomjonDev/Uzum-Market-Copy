import React from "react";
import "./Wishlist.css";
import Empty from "../../components/Empty/Empty";
import { useSelector } from "react-redux";
import ProductWrapper from "../../components/product-wrapper/ProductWrapper";

function Wishlist() {
  const heart = useSelector((s) => s.heart.value);
  console.log(heart);
  return (
    <div className="container wishlist">
      {heart.length ? <ProductWrapper data={heart} /> : <Empty />}
    </div>
  );
}

export default Wishlist;
