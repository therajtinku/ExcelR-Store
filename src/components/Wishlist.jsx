import Navbar from './Navbar';
import './Wishlist.css';

const Wishlist = () => {
  return (
    <>
    <Navbar></Navbar>
    <h1>WishList</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>PRODUCTS</th>
            <th>PRICE</th>
            <th>STOCK STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
           {/* Add your wishlist items here */}
          <tr>
          <td>
            <img src="/src/assets/img-1.jpg" width="120px" height="100px" alt="Error" />
            New Lenin Shirt</td>
            <td>$2999</td>
            <td style={{color:"green"}}>In Stock</td>
            <td>
           <button><a href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark"></i>
            </td>
          </tr>
          {/* Add more wishlist items */}
          <tr>
            <td><img src="/src/assets/img-2.jpg" width="120px" height="100px" alt="Error" />
              Chikindari Kurta</td>
            <td>$1999</td>
            <td style={{color:"green"}}>IN Stock</td>
            <td>
              <button><a href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark"></i>
            </td>
          </tr>
          {/* Add more wishlist items */}
          <tr>
            <td>
              <img src="/src/assets/img-3.jpg" width="120px" height="100px" alt="Error" />
              White Sneakers</td>
            <td>$1499</td>
            <td style={{color:"green"}}>IN Stock</td>
            <td>
              <button><a href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark"></i>
            </td>
          </tr>
          {/* Add more wishlist items */}
          <tr>
            <td>
              <img src="/src/assets/img-4.jpg" width="120px" height="100px" alt="Error" />
              White Sneakers</td>
            <td>$1499</td>
            <td style={{color:"green"}}>IN Stock</td>
            <td>
              <button><a href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark"></i>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    
      
    </>
  );
};

export default Wishlist;
