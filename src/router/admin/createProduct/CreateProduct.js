import React, { useRef, useState } from "react";

function CreateProduct() {
  // controlled form || component
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  // uncontrolled form || component
  // const price = useRef();
  // const url = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newProduct = {
      title,
      price: +price,
      url,
    };

    console.log(newProduct);

    setTitle("");
    setPrice("");
    setUrl("");
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
