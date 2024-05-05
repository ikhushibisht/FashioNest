import React, { useContext } from "react";
import '../CSS/categories.css'
import { ShopContext } from "../context/shopcontext";
import dropdown_icon from '../models/assets/dropdown_icon.png'
import Item from '../models/items/item'

const Categories = (props) => {
    const { all_prod } = useContext(ShopContext);

    // Filter products based on category
    const filteredProducts = all_prod.filter(item => props.category === item.category);

    return (
        <div className="categories">
            <img className="categories-banner" src={props.banner} alt="" />
            <div className="categories-indexSort">
                <p>
                    <span>
                        Showing 1-{filteredProducts.length}
                    </span> out of {all_prod.length} products
                </p>
                <div className="categories-sort">
                    Sort by <img src={dropdown_icon} alt="" style={{ width: '10px', height: '10px' }} /> 
                </div>
            </div>
            <div className="categories-product">
                {filteredProducts.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    );
}

export default Categories;
