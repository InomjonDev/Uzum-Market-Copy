import React from "react";
import Empty from "../../components/Empty/Empty";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartWrapper from "../../components/cartWrapper/CartWrapper";
import Cat from "../../assets/empty/shopocat.png";

function Cart() {
  const cart = useSelector((s) => s.cart.value);
  console.log(cart);
  return (
    <div className="container cart">
      {cart.length ? (
        <CartWrapper data={cart} />
      ) : (
        <Empty title="Savatchada" url={Cat} />
      )}
    </div>
  );
}

export default Cart;
