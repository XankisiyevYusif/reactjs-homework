import React from "react";
import ProductCard from "./ProductCard";

const goods = [
  {
    product_name: "Кровать TATRAN",
    product_description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    product_price: 120000,
    id: 1,
    url: "/photos/1.jpeg",
  },
  {
    product_name: "Кресло VILORA",
    product_description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    product_price: 21000,
    id: 2,
    url: "/photos/2.jpeg",
  },
  {
    product_name: "Стол MENU",
    product_description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    product_price: 34000,
    id: 3,
    url: "/photos/3.jpeg",
  },
  {
    product_name: "Диван ASKESTA",
    product_description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    product_price: 68000,
    id: 4,
    url: "/photos/4.png",
  },
  {
    product_name: "Кресло LUNAR",
    product_description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    product_price: 40000,
    id: 5,
    url: "/photos/5.jpeg",
  },
  {
    product_name: "Шкаф Nastan",
    product_description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    product_price: 80000,
    id: 6,
    url: "/photos/6.png",
  },
];

function ProductList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {goods.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
