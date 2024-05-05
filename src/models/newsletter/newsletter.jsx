import React from "react";
import './newsletter.css'

const Newsletter = () => {
    return(
        <div className="newsletter">
        <h1>Get Exclusive OFFERS on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="Your Email Id"/>
            <button>Subscribe</button>
        </div>
        </div>
    )
}

export default Newsletter