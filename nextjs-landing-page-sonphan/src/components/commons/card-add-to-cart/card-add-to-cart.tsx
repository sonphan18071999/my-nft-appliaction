import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CardAddToCart {
  className: string;
  onAddItemIntoCart: (id: string) => void;
  productId: string;
}

const CardAddToCart: React.FC<CardAddToCart> = ({
  className,
  onAddItemIntoCart,
  productId,
}) => {
  const handleAddItemIntoCart = () => {
    onAddItemIntoCart(productId);
  };

  return (
    <>
      <div className={className}>
        <button className="primary-btn text-white">Buy Now</button>
        <button
          className="primary-btn text-white"
          onClick={handleAddItemIntoCart}
        >
          <ShoppingCartOutlined />
        </button>
      </div>
    </>
  );
};

export default CardAddToCart;
