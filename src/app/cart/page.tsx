"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  removeFromCart,
  addToCart,
  deleteItem,
  clearCart,
} from "@/lib/slices/cartSlice";
import Image from "next/image";
import styles from "./page.module.css";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items, totalQuantity, totalAmount } = useAppSelector(
    (state) => state.cart,
  );

  const handleAddOne = (item: any) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      }),
    );
  };

  const handleRemoveOne = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <FaShoppingCart className={styles.emptyIcon} />
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Shopping Cart</h1>
        <button onClick={handleClearCart} className={styles.clearBtn}>
          Clear Cart
        </button>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
              </div>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => handleRemoveOne(item.id)}
                  className={styles.quantityBtn}
                >
                  <FaMinus />
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => handleAddOne(item)}
                  className={styles.quantityBtn}
                >
                  <FaPlus />
                </button>
              </div>
              <div className={styles.itemTotal}>
                <p>${item.totalPrice.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className={styles.deleteBtn}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Total Items:</span>
            <span>{totalQuantity}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className={styles.summaryTotal}>
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
