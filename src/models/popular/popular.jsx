import React from "react";
import './popular.css'
import data_prod from '../assets/data'
import Item from "../items/item";

const Popular = () => {
    return(
        <div className="popular">
<h1>POPULAR IN WOMEN</h1>
<hr />
<div className="popular-item">
    {data_prod.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})} 
    </div>
        </div>
    )
}

export default Popular