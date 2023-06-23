import React from "react";
import "./ProductWrapper.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { useSelector } from "react-redux";
import { addToCart } from "../../context/cart";
import { FiTrash2 } from "react-icons/fi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../server";

function ProductWrapper({ data, admin }) {
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="products">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <div className="card__image">
            <Link to={`/product/${item.id}`} state={{ item }}>
              <img src={item.url} alt="" />
            </Link>
            <button className="cart__heart">
              {heart.some((i) => i.id === item.id) ? (
                <AiFillHeart
                  fill="#8967f0"
                  onClick={() => dispatch(removeFromHeart(item))}
                />
              ) : (
                <AiOutlineHeart
                  fill="#8967f0"
                  onClick={() => dispatch(addToHeart(item))}
                />
              )}
            </button>
          </div>
          <div className="card__body">
            <p className="card__title">{item.title}</p>
            <p className="card__rating">
              <AiFillStar />
              <span>5.0 (585 baho) </span>
            </p>
            <div className="card__monthly">
              <span>{Math.round((item.price * 1.44) / 12)} so'm/oyiga</span>
            </div>
            <div className="card__price">
              <div>
                <del>{Math.round(item.price * 1.5)} so'm</del>
                <p>{item.price} so'm</p>
              </div>
              {admin ? (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="price__cart"
                >
                  <FiTrash2 />
                </button>
              ) : (
                <button
                  className="price__cart"
                  onClick={() => dispatch(addToCart(item))}
                >
                  <AiOutlineShoppingCart />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductWrapper;
