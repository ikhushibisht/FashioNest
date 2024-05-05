import React from "react";
import './new.css'
import new_coll from '../assets/newcollections'
import Item from "../items/item";

const New = () => {
    return(
        <div className="new-collections">
<h1>NEW COLLECTIONS</h1>
<hr />
<div className="collections">
    {new_coll.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
        </div>
    )
}

export default New