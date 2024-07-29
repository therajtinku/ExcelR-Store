import React from 'react';
import Navbar from './Navbar.jsx';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                {/* banner section */}
                <section className="banner">
                    <img src="banner3.png" alt="Exclusive online discounts await!" />
                </section>

                {/* exclusive section */}
                <section className="products exclusive">
                    <h2>Exclusive</h2>
                    <div className="product-carousel exclusive-carousel">
                        <div className="product">
                            <img src="Exclusive1.jpg" alt="New Lenin Shirt" />
                            <h3>New Lenin Shirt</h3>
                            <p>Rs.2999</p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Exclusive2.jpg" alt="Chikindari Kurta" />
                            <h3>Chikindari Kurta</h3>
                            <p>Rs.999</p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Exclusive3.jpg" alt="Orange Blast Tee" />
                            <h3>Orange Blast Tee</h3>
                            <p>Rs.799</p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Exclusive4.jpg" alt="V-neck Tee" />
                            <h3>V-neck Tee</h3>
                            <p>Rs.2999</p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Exclusive5.jpg" alt="Hand Bag" />
                            <h3>Hand Bag</h3>
                            <p>Rs.399</p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Exclusive6.jpg" alt="Louis Devin Analog" />
                            <h3>Louis Devin Analog</h3>
                            <p>Rs.2999</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </section>

                {/* New FootWear Section */}
                <section className="products footwear">
                    <h2>FootWear</h2>
                    <div className="product-carousel footwear-carousel">
                        <div className="product">
                            <img src="Footware1.jpg" alt="White Sneaker" />
                            <h3>White Sneaker</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware2.jpg" alt="Leather Shoes" />
                            <h3>Leather Shoes</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware3.jpg" alt="Black Shoes" />
                            <h3>Black Shoes</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware4.jpg" alt="Black Leather Sneaker" />
                            <h3>Black Leather Sneaker</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware5.jpg" alt="Sports Shoes" />
                            <h3>Sports Shoes</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware6.jpg" alt="Mid-Top Shoes" />
                            <h3>Mid-Top Shoes</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware7.jpg" alt="Red Tape Sneakers" />
                            <h3>Red Tape Sneakers</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="Footware8.jpg" alt="Brown Leather Shoes" />
                            <h3>Brown Leather Shoes</h3>
                            <p>Rs.2999 <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </section>
                <section className="accessories">
                    <h2>Accessories</h2>
                    <div className="accessory-grid">
                        <div className="accessory">
                            <img src="/Belt.jpg" alt="Belts" />
                            <h3>Belts</h3>
                        </div>
                        <div className="accessory">
                            <img src="images/rings.jpg" alt="Rings" />
                            <h3>Rings</h3>
                        </div>
                        <div className="accessory">
                            <img src="Jewellers.jpg" alt="Jewellers" />
                            <h3>Jewellers</h3>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-content">
                    <p>ExcelR STORE</p>
                    <address>
                        Banjara Hills, Road No 12, Hyderabad, 500034<br />
                        +91-7013408368
                    </address>
                    <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <p>&copy; 2024 ExcelR Store Inc.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
