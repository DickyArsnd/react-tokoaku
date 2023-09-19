import Mainlayout from "./layout/mainlayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/homepage/homepage";
import Checkout from "./pages/keranjang/keranjang";
import Pesanan from "./pages/Pesanan/pesanan"
import AboutTokoku from "./pages/about/about";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pesanan" element={<Pesanan/>} />
        <Route path="/about" element={<AboutTokoku/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
