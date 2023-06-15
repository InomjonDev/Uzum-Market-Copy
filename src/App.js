import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./router/home/Home";
import Wishlist from "./router/wishlist/Wishlist";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Singlerouter from "./router/Singlerouter/Singlerouter";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Singlerouter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
