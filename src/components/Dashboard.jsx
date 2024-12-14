import React from 'react';
import './Dashboard.css';
import {Link} from "react-router-dom";
const Dashboard = () => {
    return (
        <>
        <div>
            <main>
                {/* banner section */}
                <section className="banner">
                    <img src="../src/assets/banner3.png" alt="Exclusive online discounts await!"/>
                </section>

                {/* exclusive section */}
                <section className="products exclusive">
                    <h2>E X C L U S I V E</h2>
                    <div className="product-carousel exclusive-carousel">
                        <div className="product">
                            <img src="../src/assets/Exclusive1.jpg" alt="New Lenin Shirt" />
                            <h3>New Lenin Shirt</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <Link to="/prodinfo"><button>Shop now</button></Link>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Exclusive2.jpg" alt="Chikindari Kurta" />
                            <h3>Chikindari Kurta</h3>
                            <p>Rs.999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Exclusive3.jpg" alt="Orange Blast Tee" />
                            <h3>Orange Blast Tee</h3>
                            <p>Rs.799/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Exclusive4.jpg" alt="V-neck Tee" />
                            <h3>V-neck Tee</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Exclusive5.jpg" alt="Hand Bag" />
                            <h3>Hand Bag</h3>
                            <p>Rs.399/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Exclusive6.jpg" alt="Louis Devin Analog" />
                            <h3>Louis Devin Analog</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </section>

                {/* New FootWear Section */}
                <section className="products footwear">
                    <h2>F O O T W E A R</h2>
                    <div className="product-carousel footwear-carousel">
                        <div className="product">
                            <img src="../src/assets/Footware1.jpg" alt="White Sneaker" />
                            <h3>White Sneaker</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware2.jpg" alt="Leather Shoes" />
                            <h3>Leather Shoes</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware3.jpg" alt="Black Shoes" />
                            <h3>Black Shoes</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware4.jpg" alt="Black Leather Sneaker" />
                            <h3>Black Leather Sneaker</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware5.jpg" alt="Sports Shoes" />
                            <h3>Sports Shoes</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware6.jpg" alt="Mid-Top Shoes" />
                            <h3>Mid-Top Shoes</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware7.jpg" alt="Red Tape Sneakers" />
                            <h3>Red Tape Sneakers</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                        <div className="product">
                            <img src="../src/assets/Footware8.jpg" alt="Brown Leather Shoes" />
                            <h3>Brown Leather Shoes</h3>
                            <p>Rs.2999/- <span className="discount">50% off</span></p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </section>

                 {/* Mens Collection */}
                 <section className="menscollection">
                    <a href="#"><img src="../src/assets/mens.jpg" alt="error" width={1400}/></a>
                 </section>

                 {/* Women Collection */}
                 <section className="womencollection">
                    <a href="#"><img src="../src/assets/women.jpg" alt="error" width={1300}/></a>
                 </section>

                <section className="accessories">
                    <h2>A C C E S S O R I E S</h2>
                    <div className="accessory-grid">
                        <div className="accessory">
                            <img src="../src/assets/Belt.jpg" alt="Belts" />
                            <h3>Belts</h3>
                        </div>
                        <div className="accessory">
                            <img src="../src/assets/rings.jpg" alt="Rings" />
                            <h3>Rings</h3>
                        </div>
                        <div className="accessory">
                            <img src="../src/assets/jewellers.jpg" alt="Jewellers" />
                            <h3>Jewellers</h3>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
};

export default Dashboard;
