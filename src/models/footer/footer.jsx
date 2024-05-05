import React from "react";
import './footer.css'
import footer_logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import pinterest from '../assets/pinterest.png'
import whatsapp from '../assets/whatsapp.png'

const Footer = () => {
    return(
        <div className="footer">
<div className="footer-logo">
    <img src={footer_logo} alt="" style={{width: '60px', height: '60px'}}/>
    <p>FashioNest</p>
</div>
<ul className="footer-links">
   <li>Company</li> 
   <li>Products</li> 
   <li>Offices</li> 
   <li>About</li> 
   <li>Contact</li> 
</ul>
<div className="footer-icons">
    <div className="footer-icons-container">
        <img src={instagram} alt="" style={{width: '30px', height: '30px'}}/>
    </div>
    <div className="footer-icons-container">
        <img src={pinterest} alt="" style={{width: '30px', height: '30px'}}/>
    </div>
    <div className="footer-icons-container">
        <img src={whatsapp} alt="" style={{width: '30px', height: '30px'}}/>
    </div>
</div>
<div className="footer-copyright">
    <hr />
    <p>Copyright @2024 - All Rights Reserved</p>
</div>
        </div>
    )
}

export default Footer