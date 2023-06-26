import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./router/home/Home";
import Wishlist from "./router/wishlist/Wishlist";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Singlerouter from "./router/Singlerouter/Singlerouter";
import Admin from "./router/admin/Admin";
import Auth from "./router/auth/Auth";

// Toast modal
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/" element={<Auth />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
