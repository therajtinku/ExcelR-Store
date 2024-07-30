import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'New Linen Shirt',
      price: 299,
      quantity: 1,
      imageUrl: '../src/assets/img-1.jpg'
    },
    {
      id: 2,
      name: 'Chikindari Kurta',
      price: 599,
      quantity: 3,
      imageUrl: '../src/assets/img-2.jpg'
    }
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = subtotal * 0.1; 
    const tax = (subtotal - discount) * 0.033; 
    return subtotal - discount + tax;
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imageUrl} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>Rs. {item.price}/-</td>
                  <td>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td>Rs. {(item.price * item.quantity).toFixed(2)}/-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="total-item">
            <span>Sub-total</span>
            <span>Rs. {calculateSubtotal().toFixed(2)}/-</span>
          </div>
          <div className="total-item">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="total-item">
            <span>Discount</span>
            <span>10%/</span>
          </div>
          <div className="total-item">
            <span>Tax</span>
            <span>3.3%</span>
          </div>
          <div className="total-item">
            <span>Total</span>
            <span>Rs. {calculateTotal().toFixed(2)}/-</span>
          </div>
          <button className="buy-now-button">BUY NOW →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;