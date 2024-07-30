import React, { useState } from "react";
import "./Wishlist.css";
import Navbar from "./Navbar";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "New Lenin Shirt",
      image: "/src/assets/img-1.jpg",
      price: 2999,
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Chikindari Kurta",
      image: "/src/assets/img-2.jpg",
      price: 1999,
      stock: "In Stock",
    },
    {
      id: 3,
      name: "White Sneakers",
      image: "/src/assets/img-3.jpg",
      price: 1499,
      stock: "In Stock",
    },
    {
      id: 4,
      name: "Watch",
      image: "/src/assets/img-4.jpg",
      price: 1499,
      stock: "In Stock",
    },
  ]);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };

  return (
    <div className="wishlist-container">
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>PRODUCTS</th>
            <th></th>
            <th>PRICE</th>
            <th>STOCK STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id} className="table-row">
              <td className="product-image">
                <img src={item.image} alt={item.name} />
              </td>
              <td>{item.name}</td>
              <td>Rs. {item.price}</td>
              <td style={{ color: "green" }}>{item.stock}</td>
              <td>
                <button className="cart-button">
                  <a href="#">
                    <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                  </a>
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
