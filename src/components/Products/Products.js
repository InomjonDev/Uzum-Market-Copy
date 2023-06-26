import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import "./Products.css";
import ProductWrapper from "../product-wrapper/ProductWrapper";
import { db } from "../../server";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import proReload from "../../context/proReload";

function Products() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);

      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      {data?.length ? <ProductWrapper data={data} /> : <Skeleton />}
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
