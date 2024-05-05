import React, { useState } from 'react';
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.jpg'
import { Link } from 'react-router-dom';
const Navbar = () => {
   
    const [menu,set]=useState("shop");


    return (
        <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" style={{width: '80px', height: '80px'}}/>
            <p>FashioNest</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{set("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{set("men")}}><Link style={{textDecoration: 'none'}} to ='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{set("women")}}><Link style={{textDecoration: 'none'}} to ='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{set("kids")}}><Link style={{textDecoration: 'none'}} to ='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login">
            <Link to= '/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" style={{width: '40px', height: '30px'}}/></Link>
            <div className="nav-shop-item">0</div>
        </div>
        </div>
    )
}

export default Navbar