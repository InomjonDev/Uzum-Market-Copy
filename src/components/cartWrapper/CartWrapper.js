import React from "react";
import "./CartWrapper.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementCart } from "../../context/cart";

function CartWrapper({ data }) {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className="cart__wrapper">
      <div className="cart__wrapper-content">
        <h2>CartWrapper</h2>
        {data?.map((item) => (
          <div key={item.id} className="cart__wrapper-item">
            <img src={item.url} width={80} alt="" />
            <h3>{item.title}</h3>
            <h2>{item.quantity * item.price} so'm</h2>
            <button
              onClick={() => dispatch(decrementCart(item))}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              O'chirish
            </button>
            <p>{item.price} so'm</p>
            <br />
            <br />
            <hr />
            <br />
          </div>
        ))}
      </div>
      <div className="cart__wrapper-form">
        <h3>Buyurtma berish</h3>
        <form action="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </form>
        <h3>
          Jami: {data?.reduce((a, b) => a + b.price * b.quantity, 0)} so'm
        </h3>
      </div>
    </div>
  );
}

export default CartWrapper;
