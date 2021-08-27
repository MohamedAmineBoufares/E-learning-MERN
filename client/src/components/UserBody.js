import React from "react";
import Card from "./Client/Card/Card";
// redux
import { useSelector } from "react-redux";

const UserBody = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="row">
        <div className="card-deck">
          {products &&
            products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default UserBody;
