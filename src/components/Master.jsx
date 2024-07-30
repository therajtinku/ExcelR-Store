import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
const Master = ()=>{
    return(
        <>
            
            <BrowserRouter>
            <Link to="/comp3">comp3</Link>

                <Routes>
                    <Route path="/comp1" element={<Comp1></Comp1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default Master;