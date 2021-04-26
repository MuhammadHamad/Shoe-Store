import React from "react";
import shoes from "./PicsData.json";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const shoe = shoes[id];

  if (!shoe) return <h2>Products not found</h2>;

  return (
    <div>
      <h1>Welcome to Product Item</h1>

      <div className="link">
        <h2 className="products__header">{shoe.name}</h2>
        <img
          className="products__img"
          src={shoe.img}
          alt={shoe.name}
          height={360}
          width={420}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
