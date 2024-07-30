import "./Footer.css"

const Footer = ()=>{
    return(
        <>
        <footer>
    <div className="foot">
        <div className="f1"><img className="f11" src="../src/assets/excelrstore.png" alt="logo" style={{filter: "invert(100%)"}}/></div>
        <div className="f2">
            <p className="para"><i className="fa-solid fa-location-dot"></i>Banjara Hills, RoadNo 12, Hyderabad, Telangana</p>
            <p className="para"><i className="fa-solid fa-phone"></i>+91 9123456871</p>
            <p className="para"><i className="fa-solid fa-envelope"></i><span></span>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </p>
        </div>
    </div>
    <hr/>
    <div className="ft_ct">
        <p>Copyright @ ExcelR Store</p>
    </div>
    </footer>
    </>
    )
}
export default Footer;
