import Navbar from "./Navbar"
import "./Billing.css"



const Billing = ()=>{
    return(
        <>
        <Navbar></Navbar>
        <div className="c1">
        <h2>Billing Information</h2>
        <form id="billingForm">
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
            <select id="paymentMethod" name="paymentMethod" required>
                <option value="creditCard">Credit Card</option>
                <option value="paytm">Paytm</option>
                <option value="phonepe">Phonpe</option>
                <option value="Gpay">Gpay</option>
            </select><br /><br />

            <label htmlFor="cardNumber">Credit Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" /><br /><br />

            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" /><br /><br />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" /><br /><br />

            <label htmlFor="billingAddress">Billing Address (if different from shipping):</label>
            <input type="text" id="billingAddress" name="billingAddress" /><br /><br />

            <h3>Order Summary</h3>
            <p>Summary of items being purchased...</p>

            <button type="submit">Place Order</button>
        </form>
    </div>
    </>
        
    )

}
export default Billing;