import React from "react";
import './item.css'
import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" style={{ width: '200px', height: '250px' }}/></Link>
            <p>{props.name}</p>
            <div className="itemprices">
                <div className="itemnewprice">
                    ₹{props.new_price}
                </div>
                <div className="itemoldprice">
                    ₹{props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item;
