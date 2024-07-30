import Navbar from './Navbar';
import './Cart.css';

const Cart = () => {
  return (
    <>
    <Navbar></Navbar>
    
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {/* Add your cart items here */}
    </div>
    <div className='shopping-cart'>
    <div className='product'>
        <table>
            <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUB-TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {/* Add your cart items here */}
                <tr>
                    <td>
                        <img src="/src/assets/img-1.jpg" width="120px" height="100px" alt="New Lenin Shirt" />
                        NEW Lenin Shirt
                    </td>
                    <td>$2999</td>
                    <td>
                        <input type="number" name="Quantity" min={1} max={10}/>
                    </td>
                    <td>
                     <input type="number" name="Price" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="/src/assets/img-2.jpg" width="120px" height="100px" alt="New Lenin Shirt" />
                        Chikindari Kurta
                    </td>
                    <td>$1999</td>
                    <td>
                        <input type="number" name="Quantity" min={1} max={10}/>
                    </td>
                    <td>
                     <input type="number" name="Price" />
                    </td>
                </tr>
                <button style={{backgroundColor:"#925ff0", color:"whitesmoke"}}><a href="#"><i class="fa-solid fa-arrow-left"></i>RETURN TO SHOP</a></button>
            </tbody>
        </table>
    </div>
    <div className='total'>
        <h2>TOTAL</h2>
        <h3>Subtotal    Rs.4998</h3>
        <h3>Shipping    $100</h3>
        <h3>Discount    $0</h3>
        <h3>Tax         $49.96</h3>
        <h3>Total       Rs.5098</h3>
        <button style={{backgroundColor:"#925ff0", color:"whitesmoke"}}><a href="#"><i class="fa-solid fa-arrow-right"></i> Buy Now</a></button>
    </div>
    </div>
    </>
    );
    };
export default Cart;