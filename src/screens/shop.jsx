import React from "react";
import Coverscreeen from "../models/coverscreen/coverscreen";
import Popular from "../models/popular/popular";
import Offers from "../models/offers/offers";
import New from "../models/newcollections/new";
import Newsletter from "../models/newsletter/newsletter";
const Shop = () => {
    return(
        <div>
        <Coverscreeen/>
        <Popular/>
        <Offers/>
        <New/>
        <Newsletter/>
        </div>
    )
}

export default Shop