import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
        <header className="excelrstore_header">
        <img src="../src/assets/excelrstore.png" alt="Logo"/>
        <input type="search" placeholder="Search here..." />
        <div className="navbar">
            <Link to="/"><i className="fa-solid fa-house"></i>Home</Link>
            <a href="#"><i className="fa-solid fa-chess-king"></i>Men</a>
            <a href="#"><i className="fa-solid fa-chess-queen"></i>Women</a>
            <a href="#"><i className="fa-solid fa-children"></i>Kids</a>
            <a href="#"><i className="fa-solid fa-heart"></i>Wishlist</a>
            <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>Cart</Link>
            <a href="#"><i className="fa-solid fa-right-to-bracket"></i>Login</a>
        </div>
        </header>
        </>

    )

}
export default Navbar;