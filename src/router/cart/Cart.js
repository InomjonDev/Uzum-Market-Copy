import React from "react";
import Empty from "../../components/Empty/Empty";
import "./Cart.css";
import cart from "../../context/cart";
import { useSelector } from "react-redux";
import CartWrapper from "../../components/cartWrapper/CartWrapper";

function Cart() {
  const cart = useSelector((s) => s.cart.value);
  console.log(cart);
  return (
    <div className="container cart">
      {cart.length ? <CartWrapper data={cart} /> : <Empty />}
    </div>
  );
}

export default Cart;
