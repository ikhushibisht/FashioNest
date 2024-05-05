import React from "react";
import './offers.css'
import exclusive from '../assets/exclusive.webp'

const Offers = () => {
    return(
        <div className="offers">
<div className="offers-left">
    <h1>Exclusive</h1>
    <h1>Offers for You</h1>
    <p>ONLY ON BEST SELLERS PRODUCTS</p>
    <button>Check Now</button>
</div>
<div className="offers-right">
    <img src={exclusive} alt="" style={{width: '380px', height: '450px'}}/>
</div>
        </div>
    )
}

export default Offers