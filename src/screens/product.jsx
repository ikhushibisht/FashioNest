import React, { useContext } from "react";
import { ShopContext } from '../context/shopcontext'
import { useParams } from "react-router-dom";
import Prodheader from "../models/prodheader/prodheader";
import Displayprod from "../models/displayprod/displayprod";

const Product = () => {
    const {all_prod} = useContext(ShopContext);
    const {productId} =useParams();
    const product= all_prod.find((e)=> e.id=== Number(productId))
    return(
        <div>
       <Prodheader product= {product} />
       <Displayprod product={product}/>
        </div>
    )
}

export default Product