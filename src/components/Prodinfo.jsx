import Navbar from "./Navbar";
import "./Prodinfo.css"
const Prodinfo = ()=>{
    return(
        <>
            <Navbar></Navbar>
            <div className="proddesc">
            <div className="prodimg">
            <img src="../src/assets/proddesc.jpg" alt="error" />
            </div>
            <div className="pinfo">
            <h4>New Linen Shirt</h4>
            <p><span style={{color:"gray"}}>Availability :</span> <span style={{color:"green"}}>in stock</span></p>
            <p><span style={{color:"gray"}}>Brand :</span> Allen Soly</p>
            <p><span style={{color:"gray"}}>Category :</span> Mens Clothing</p>
            <h2 style={{color:"#925ff0"}}>Rs.2999/-</h2>
            <hr />
            <div className="colsize">
                <p className="color">Color</p>
                <p>Size</p>
            </div>
            <div className="colsize">
                <p className="color">Color</p>
                <select name="sizes">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>

            </div>
           
                
            </div>
        </>
    )

}
export default Prodinfo;