import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import { PRODUCTS } from "../../static";
import "./Products.css";
import ProductWrapper from "../product-wrapper/ProductWrapper";

function Products() {
  return (
    <div className="container">
      <ProductWrapper data={PRODUCTS} />
      <h2>Products</h2>
      <Skeleton />
    </div>
  );
}

export default Products;
