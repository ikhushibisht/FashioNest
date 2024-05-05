import React from "react";
import './displayprod.css'
import star from '../assets/star1.png'
import star_dull from '../assets/star_dull.png'


const Displayprod = (props) => {
    const {product} = props;
    return(
        <div className="displayprod">
<div className="display-left">
<div className="display-img-list">
    <img src= {product.image} alt="" />
    <img src= {product.image} alt="" />
    <img src= {product.image} alt="" />
    <img src= {product.image} alt="" />
</div>
<div className="display-image">
    <img className= 'display-main-img' src={product.image} alt="" />
</div>
</div>
<div className="display-right">
<h1>{product.name}</h1>
<div className="display-right-star">
    <img src={star} alt="" style={{ width: '20px', height: '20px' }}/>
    <img src={star} alt="" style={{ width: '20px', height: '20px' }}/>
    <img src={star} alt="" style={{ width: '20px', height: '20px' }}/>
    <img src={star} alt="" style={{ width: '20px', height: '20px' }}/>
    <img src={star_dull} alt="" style={{ width: '20px', height: '20px' }}/>
    <p>(3.1k)</p>
</div>
<div className="display-right-prices">
    <div className="display-old-price">₹{product.old_price}</div>
    <div className="display-new-price">₹{product.new_price} </div>
    </div>
<div className="display-right-description">
A lightweight, baggy T-shirt, round neckline, half longe sleeves, funky printed designs, make you look cool.
<div className="display-right-sizes">
    <h1>Select Size</h1>
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
</div>
</div>
<button>ADD TO CART</button>
<p className= 'display-category'><span>Category :</span>Men, T-shirt, Oversized</p>
<p className= 'display-category'><span>Tags :</span>Modern, Latest, Printed</p>
</div>
</div>
    )
}

export default Displayprod