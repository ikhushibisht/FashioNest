import React from "react";
import './prodheader.css'
import arrow_icon from '../assets/arrowfor.png'

const Prodheader = (props) => {
    const {product} = props;
    return(
        <div className="prodheader">
HOME <img src={arrow_icon} alt="" style={{ width: '10px', height: '10px' }} /> SHOP <img src={arrow_icon} alt="" style={{ width: '10px', height: '10px' }} />
{product.category} <img src={arrow_icon} alt="" style={{ width: '10px', height: '10px' }} />
{product.name}
        </div>
    )
}

export default Prodheader