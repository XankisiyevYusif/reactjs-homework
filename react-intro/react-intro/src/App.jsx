import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <header style={{ padding: "20px", background: "#f4f4f4", textAlign: "center" }}>
        <h1>Интерьер.</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
