import React, { useRef, useState } from "react";

function CreateProduct() {
  // controlled form || component
  const [title, setTitle] = useState("");
  // uncontrolled form || component
  const price = useRef();
  const url = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newProduct = {
      title,
      price: +price.current.value,
      url: url.current.value,
    };

    console.log(newProduct);
  };

  return (
    <div>
      <h2>CreateProduct</h2>
      <form action="#" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          required
        />
        <input ref={price} type="number" placeholder="Price" required />
        <input ref={url} type="text" placeholder="Url" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
