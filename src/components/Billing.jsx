import React, { useState } from "react";
import QRCode from "qrcode.react";
import Navbar from "./Navbar"; 
import "./Billing.css";

const Billing = () => {
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [items] = useState([
        { name: "Item 1", price: 100 },
        { name: "Item 2", price: 200 },
        { name: "Item 3", price: 150 },
    ]);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const calculateTotalAmount = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    const generateUPIQRString = () => {
        const upiID = "your-upi-id@upi";
        const amount = calculateTotalAmount();
        const name = "Your Name";
        return `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&cu=INR`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
    };

    return (
        <>
            <Navbar />
            <div className="c1">
                <h2>Billing Information</h2>
                <form id="billingForm" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required /><br /><br />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required /><br /><br />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required /><br /><br />

                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required /><br /><br />

                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" required /><br /><br />

                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" name="country" required /><br /><br />

                    <label htmlFor="postalCode">Postal Code:</label>
                    <input type="text" id="postalCode" name="postalCode" required /><br /><br />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required /><br /><br />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required /><br /><br />

                    <h3>Payment Method</h3>
                    <label htmlFor="paymentMethod">Choose a payment method:</label>
                    <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} required>
                        <option value="creditCard">Credit Card</option>
                        <option value="upi">UPI</option>
                        <option value="cod">Cash on Delivery</option>
                    </select><br /><br />

                    {paymentMethod === "creditCard" && (
                        <>
                            <label htmlFor="cardNumber">Credit Card Number:</label>
                            <input type="text" id="cardNumber" name="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" required /><br /><br />

                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" required /><br /><br />

                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv" placeholder="XXX" required /><br /><br />
                        </>
                    )}

                    {paymentMethod === "upi" && (
                        <div className="upi-qr-code">
                            <p>Scan the QR code to pay via UPI:</p>
                            <QRCode value={generateUPIQRString()} />
                        </div>
                    )}
                    <hr /><hr />
                    <label htmlFor="billingAddress">Billing Address:</label>
                    <input type="text" id="billingAddress" name="billingAddress" placeholder="Billing Address" /><br /><br />

                    <h3>Order Summary</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.name}: Rs.{item.price}</li>
                        ))}
                    </ul>
                    <p>Total: Rs.{calculateTotalAmount()}</p>

                    <button type="submit">Place Order</button>
                </form>
            </div>
        </>
    );
}

export default Billing;