import React from "react";
import "./CartWrapper.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementCart } from "../../context/cart";
import { BsFillTrashFill } from "react-icons/bs";

function CardWrapper({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    let token = "6144853557:AAHD9rdfH1Abr0eUgGduGUucLA6e-VCGnzw";

    let chat_id = -987447222;

    let inp1 = encodeURIComponent(document.getElementById("text1").value);
    let inp2 = encodeURIComponent(document.getElementById("text2").value);
    let inp3 = encodeURIComponent(document.getElementById("text3").value);

    let my_text = `Mahsulot oluvhi:%0A - Mahsulot oluvhining ismi: ${inp1} %0A - Mahsulot oluvhining raqami: ${inp2}  %0A - Mahsulot oluvhining manzili: ${inp3} %0A%0A`;

    data?.forEach((item) => {
      my_text += `Nomi : ${item.title} %0A`;
      my_text += `Soni : ${item.quantity} %0A`;
      my_text += `Narxi : ${item.price} %0A%0A`;
    });

    my_text += `Jami: ${data?.reduce(
      (a, b) => a + b.price * b.quantity,
      0
    )} som %0A`;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message sent");

    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";
  };

  const dispatch = useDispatch();
  console.log(data);

  return (
    <div className="cart__wrapper">
      <div className="cart__wrapper-content">
        {data?.map((item) => (
          <div key={item.id} className="cart__wrapper-item">
            <div className="ight">
              <img src={item.url} width={80} alt="" />
            </div>
            <div className="eft">
              <h3>{item.title}</h3>
              <h2 className="price">{item.price} so'm</h2>
              <button
                disabled={item.quantity < 1}
                onClick={() => dispatch(decrementCart(item))}
              >
                -
              </button>
              &nbsp;&nbsp;&nbsp;
              <span>{item.quantity}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                <BsFillTrashFill />
              </button>
              <br />
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="cart__wrapper-form">
        <h3>Buyurtma berish</h3>
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" id="text1" placeholder="Ismingiz" />
          <input type="text" id="text2" placeholder="Raqamingiz" />
          <input type="text" id="text3" placeholder="Manzil" />
          <h3>
            Jami: {data?.reduce((a, b) => a + b.price * b.quantity, 0)} som
          </h3>
          <button type="submit">Olish</button>
        </form>
      </div>
    </div>
  );
}

export default CardWrapper;

// <div className="cart__wrapper">
//   <div className="cart__wrapper-content">
//     {data?.map((item) => (
//       <div key={item.id} className="cart__wrapper-item">
//         <img src={item.url} width={80} alt="" />

//         <div className="div__1">
//           <h3 className="title">{item.title}</h3>
//           <button onClick={() => dispatch(removeFromCart(item.id))}>
//             <BsFillTrashFill /> O'chirish
//           </button>
//         </div>
//         <div className="div__2">
//           <h2 className="price">{item.price} so'm</h2>
//           <button
//             disabled={item.quantity <= 1}
//             onClick={() => dispatch(decrementCart(item))}
//           >
//             -
//           </button>
//           &nbsp;&nbsp;&nbsp;
//           <span className="">{item.quantity}</span>&nbsp;&nbsp;&nbsp;&nbsp;
//           <button onClick={() => dispatch(addToCart(item))}>+</button>
//         </div>
//       </div>
//     ))}
//   </div>
//   <div className="cart__wrapper-form">
//     <h3>Buyurtma berish</h3>
//     <form id="form" onSubmit={handleSubmit}>
//       <input type="text" id="text1" placeholder="Ismingiz" required />
//       <input type="text" id="text2" placeholder="Raqamingiz" required />
//       <input type="text" id="text3" placeholder="Manzil" required />
//       <h3>
//         Jami: {data?.reduce((a, b) => a + b.price * b.quantity, 0)} som
//       </h3>
//       <button type="submit">Olish</button>
//     </form>
//   </div>
// </div>
