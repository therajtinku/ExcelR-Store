import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
const Master = ()=>{
    return(
        <>
        <Navbar></Navbar>
        <Dashboard></Dashboard>

            {/* <BrowserRouter>
            <Link to="/comp3">comp3</Link>

                <Routes>
                    <Route path="/comp1" element={<Comp1></Comp1>}></Route>
                </Routes>
            </BrowserRouter> */}

            <Footer></Footer>
        </>
    )

}
export default Master;