"use client";

import React, { useState } from "react";
import { Badge, Button, Empty, InputNumber, Modal } from "antd";
import styles from "./shopping-cart-modal.module.css";

import {
  CloseOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSearchStore } from "@/hooks/useSearchStore";

const ShoppingCartModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { itemsInCart } = useSearchStore();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const removeItem = (id: string) => {
    console.log("id", id);
  };

  return (
    <div className={styles.shoppingCartContainer}>
      <Badge count={itemsInCart?.length || 0} showZero>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined className={styles.iconSize} />}
          size="large"
          onClick={showModal}
          className={"primary-btn text-white"}
        />
      </Badge>

      <Modal
        title="Shopping Cart"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<CloseOutlined className={styles.iconSize} />}
        width={600}
        className={styles.cartModal}
      >
        {itemsInCart?.length === 0 ? (
          <Empty description="Your cart is empty" />
        ) : (
          <>
            <div className={styles.cartItems}>
              {itemsInCart?.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    {/*<Image*/}
                    {/*  src={item.imageId || "/placeholder.svg"}*/}
                    {/*  alt={item.title}*/}
                    {/*  width={80}*/}
                    {/*  height={80}*/}
                    {/*  className={styles.productImage}*/}
                    {/*/>*/}
                  </div>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.title}</h3>
                    <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.itemQuantity}>
                    <InputNumber
                      min={1}
                      max={99}
                      value={+item.quantity}
                      className={styles.quantityInput}
                    />
                  </div>
                  <div className={styles.itemTotal}>
                    ${(item.price * +item.quantity).toFixed(2)}
                  </div>
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined className={styles.iconSize} />}
                    onClick={() => removeItem(item.id)}
                    className={styles.removeButton}
                  />
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              {/*<div className={styles.summaryRow}>*/}
              {/*  <span>Subtotal:</span>*/}
              {/*  <span>${totalPrice.toFixed(2)}</span>*/}
              {/*</div>*/}
              {/*<div className={styles.summaryRow}>*/}
              {/*  <span>Shipping:</span>*/}
              {/*  <span>Free</span>*/}
              {/*</div>*/}
              {/*<div className={`${styles.summaryRow} ${styles.total}`}>*/}
              {/*  <span>Total:</span>*/}
              {/*  <span>${totalPrice.toFixed(2)}</span>*/}
              {/*</div>*/}
            </div>

            <div className={styles.cartActions}>
              <Button onClick={handleCancel}>Continue Shopping</Button>
              <Button type="primary">Checkout</Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ShoppingCartModal;
