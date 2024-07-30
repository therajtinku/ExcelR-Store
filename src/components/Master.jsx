import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Prodinfo from "./Prodinfo";
import Billing from "./Billing";
import Cart from "./Cart"
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
            {/* <Link to="/prodinfo">comp3</Link> */}
            <Navbar></Navbar>
                <Routes>
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/billing" element={<Billing></Billing>}></Route>
                <Route path="/prodinfo" element={<Prodinfo></Prodinfo>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                </Routes>
            </BrowserRouter>

            <Footer></Footer>
            
        </>
    )

}
export default Master;