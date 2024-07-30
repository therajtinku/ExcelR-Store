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
            <h3>New Linen Shirt</h3>
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
                <div className="pink" style={{marginRight:"30px"}}>
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM3O3QYCDmN0FOIie-_QXztpF_INF2xlzKHewbFtMb3KTCvuh5eJ0xH6RR4KnQzz-pfgkUScEVSBVTM1j-OAdUXzDjHLAhAfzoa_8IumJpO_bvT7oxTvegGefaOIgfOTy7VtKLieJQom8/s1600/seamless_background_texture-light_pink.jpg" width="50px" style={{borderRadius:"50%", border:"3px solid black"}}/>
                </div>
                <div className="graycol" style={{marginRight:"260px"}}>
                    <img src="https://cdn-icons-png.freepik.com/512/16551/16551140.png?ga=GA1.1.2057705288.1706880166" width="50px" style={{borderRadius:"50%"}}/>
                </div>
                <select name="sizes">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
                <a href="#"><button className="cart">Add to Cart</button></a>
                <a href="#"><button className="buynow">Buy Now</button></a>



            </div>
           
                
            </div>
        </>
    )

}
export default Prodinfo;