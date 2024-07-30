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
            <th></th>
            <th>PRICE</th>
            <th>STOCK STATUS</th>
            <th>ACTION</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
           {/* Add your wishlist items here */}
          <tr>
          <td>
            <img src="/src/assets/img-1.jpg" width="120px" height="100px" alt="Error" /></td>
            <td>New Lenin Shirt</td>
            <td>Rs.2999</td>
            <td style={{color:"green"}}>In Stock</td>
            <td>
           <button style={{backgroundColor:"#925ff0", color:"whitesmoke"}}><a href="#"><i className="fa-solid fa-cart-shopping"></i>  &nbsp;  Add To Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark" style={{fontSize:30}}></i>
            </td>
          </tr>
          {/* Add more wishlist items */}
          <tr>
            <td><img src="/src/assets/img-2.jpg" width="120px" height="100px" alt="Error" /></td>
              <td>Chikindari Kurta</td>
            <td>Rs.1999</td>
            <td style={{color:"green"}}>In Stock</td>
            <td>
              <button style={{backgroundColor:"#925ff0", color:"whitesmoke"}}><a href="#"><i className="fa-solid fa-cart-shopping"></i> &nbsp; Add To Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark" style={{fontSize:30}}></i>
            </td>
          </tr>
          {/* Add more wishlist items */}
          <tr>
            <td>
              <img src="/src/assets/img-3.jpg" width="120px" height="100px" alt="Error" /></td>
             <td> White Sneakers</td>
            <td>Rs.1499</td>
            <td style={{color:"green"}}>In Stock</td>
            <td>
              <button style={{backgroundColor:"#925ff0", color:"whitesmoke"}}><a href="#"><i className="fa-solid fa-cart-shopping"></i> &nbsp; Add To Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark" style={{fontSize:30}}></i>
            </td>
          </tr>
          {/* Add more wishlist items */}
          <tr>
            <td>
              <img src="/src/assets/img-4.jpg" width="120px" height="100px" alt="Error" /></td>
              <td>Watch</td>
            <td>Rs.1499</td>
            <td style={{color:"green"}}>In Stock</td>
            <td>
              <button style={{backgroundColor:"#925ff0", color:"whitesmoke", textalign:"center"}}><a href="#"><i className="fa-solid fa-cart-shopping"></i> &nbsp; Add To Cart</a></button>
            </td>
            <td>
              <i className="fa-solid fa-circle-xmark" style={{fontSize:30}}></i>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    
      
    </>
  );
};

export default Wishlist;
