import React, { useRef, useState } from "react";
import { db } from "../../../server";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function CreateProduct() {
  // ===== controlled form || component
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // ===== uncontrolled form || component =====
  // const price = useRef();
  // const url = useRef();

  const productRef = collection(db, "products");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newProduct = {
      title,
      price: +price,
      url,
    };

    setLoading(true);

    await addDoc(productRef, newProduct)
      .then((res) => {
        console.log(res);
        setTitle("");
        setPrice("");
        setUrl("");
        toast.success("Muvaffaqiyatli saqlandi");
        // price.current.value = "" for useRef
        // url.current.value = "" for useRef
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((e) => setLoading(false));
  };

  return (
    <div className="create-product">
      <div className="create-product__wrapper">
        <h2>Create New Product</h2>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="create-product__form"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            required
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
            required
          />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Url"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
