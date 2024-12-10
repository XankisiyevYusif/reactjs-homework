import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", width: "300px", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
      <img src={product.url} alt={product.product_name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "10px 0" }}>{product.product_name}</h3>
        <p style={{ color: "#555" }}>{product.product_description}</p>
        <p style={{ fontWeight: "bold", margin: "10px 0" }}>{product.product_price} руб.</p>
      </div>
    </div>
  );
}

export default ProductCard;
