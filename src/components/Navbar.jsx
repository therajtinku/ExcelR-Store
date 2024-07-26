import "./Navbar.css"
const Navbar = ()=>{
    return(
        <header className="coolcream_header">
        <img src="../src/assets/excelrstore.png" width="120px" alt="Logo" />
        <input type="search" placeholder="Search here..." />
        <div className="navbar">
            <a href="#"><i className="fa-solid fa-house"></i>Home</a>
            <a href="#"><i className="fa-solid fa-chess-king"></i>Men</a>
            <a href="#"><i className="fa-solid fa-chess-queen"></i>Women</a>
            <a href="#"><i className="fa-solid fa-children"></i>Kids</a>
            <a href="#"><i className="fa-solid fa-cart-shopping"></i>Wishlist</a>
            <a href="#"><i className="fa-solid fa-heart"></i>Cart</a>
            <a href="#"><i className="fa-solid fa-right-to-bracket"></i>Login/Signup</a>
        </div>
        </header>

    )

}
export default Navbar;