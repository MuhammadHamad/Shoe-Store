import React from "react";
import shoes from "./PicsData.json";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products section</h1>
      <div className="products">
        {Object.keys(shoes).map((keyname) => {
          const shoe = shoes[keyname];
          return (
            <Link key={keyname} className="link" to={`/products/${keyname}`}>
              <h2 className="products__header">{shoe.name}</h2>
              <img
                className="products__img"
                src={shoe.img}
                alt={shoe.name}
                height={260}
                width={320}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
