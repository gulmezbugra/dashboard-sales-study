import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/TopBar";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";

function PageContent({ active }) {
  switch (active) {
    case "Dashboard": return <Dashboard />;
    case "Products":  return <Products />;
    default:
      return (
        <main className="main">
          <h1 className="page-title">{active}</h1>
          <p style={{ color: "#202020", fontSize: 14 }}>Bu sayfa henüz yapım aşamasında.</p>
        </main>
      );
  }
}

function App() {
  const [active, setActive] = useState("Dashboard");

  return (

    <div className="app">
      <Sidebar active={active} setActive={setActive} />
      <div className="main-wrap">
        <Topbar />
        <PageContent active={active} />
      </div>
    </div>
  );
}

export default App;
