import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import { PRODUCTS } from "../../static";
import "./Products.css";
import ProductWrapper from "../product-wrapper/ProductWrapper";

function Products() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="container">
      {!isDataLoaded && <Skeleton />} <ProductWrapper data={PRODUCTS} />
    </div>
  );
}

export default Products;

// import React from "react";
// import Skeleton from "../Skeleton/Skeleton";
// import { PRODUCTS } from "../../static";
// import "./Products.css";
// import ProductWrapper from "../product-wrapper/ProductWrapper";

// function Products() {
//   return (
//     <div className="container">
//       {!PRODUCTS.length && <Skeleton />} <ProductWrapper data={PRODUCTS} />
//       <h2>Products</h2>
//     </div>
//   );
// }

// export default Products;
