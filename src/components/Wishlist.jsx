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
      <h1>WishList</h1>
      <div className="wishlist-table">
        <div className="table-header">
          <div>PRODUCTS</div>
          <div></div>
          <div>PRICE</div>
          <div>STOCK STATUS</div>
          <div>ACTION</div>
          <div></div>
        </div>
        {wishlist.map((item) => (
          <div key={item.id} className="table-row">
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div>{item.name}</div>
            <div>Rs.{item.price}</div>
            <div style={{color:"green"}}>{item.stock}</div>
            <div className="cart-button">
            <button style={{backgroundColor:"#925ff0", color:"whitesmoke", textalign:"center"}}><a href="#"><i className="fa-solid fa-cart-shopping"></i>  &nbsp;  Add To Cart</a></button>
          </div>
            <div className="remove">
               <i className="fa-solid fa-circle-xmark"
                onClick={() => handleRemoveFromWishlist(item.id)}>
                </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;