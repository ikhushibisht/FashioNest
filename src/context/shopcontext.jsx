import React, { createContext } from "react";
import all_prod from "../models/assets/allproducts";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextvalue = {all_prod};

    return (
    <ShopContext.Provider value= {contextvalue}>
        {props.children}
    </ShopContext.Provider>
    )
}

export default ShopContextProvider;