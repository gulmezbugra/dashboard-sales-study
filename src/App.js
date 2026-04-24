import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/TopBar";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import ProductDetails from "./Components/ProductDetail";

function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar active={active} setActive={setActive} />
        <div className="main-wrap">
          <Topbar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
