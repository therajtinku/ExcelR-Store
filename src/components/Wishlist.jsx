import "./Navbar.jsx";
import { useState } from "react";
import './Wishlist.jsx';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([
      { id: 1, name: 'Orange-shirt', price: '2999',img:"WhatsApp Image 2024-07-19 at 23.16.59_c5751dc0"},
      { id: 2, name: 'Shoes', price: '2999',img:"IMG-20240720-WA0102" },
      { id: 3, name: 'frock', price: '3000',img:"IMG-20240720-WA0009" }
    ]);
    return (
        <div className="wishlist">
            <h1>MyWishList</h1>
            {Wishlist.map(item =>(
                <WishlistItem key={item.id} item={item}/>
            ))}
        </div>
    );
}
export default Wishlist;