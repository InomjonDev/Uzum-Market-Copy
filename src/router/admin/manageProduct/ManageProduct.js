import React, { useEffect, useState } from "react";
import { db } from "../../../server";
import { collection, getDocs } from "firebase/firestore";
import ProductWrapper from "../../../components/product-wrapper/ProductWrapper";
import Skeleton from "../../../components/Skeleton/Skeleton";

function ManageProduct() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);

      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, []);

  console.log(data);
  return (
    <div className="manage-product" style={{ padding: 30 }}>
      {data?.length ? <ProductWrapper data={data} /> : <Skeleton />}
    </div>
  );
}

export default ManageProduct;
