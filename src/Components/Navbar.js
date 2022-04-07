import React from 'react'
import { Link } from 'react-router-dom';
import Cart from "../images/cart.png";
import SignIn from "../images/signin.png";


const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark py-4'>
            <h3 style={{color:"white"}}>PROSHOP</h3>
            
            <input className="textbox" type="text" placeholder='Search Products...'></input>
            <button className="searchButton">SEARCH</button>
            <Link to="/Cart" style={{color:"white"}} className="cart btn btn-dark"><img src={Cart} height="30" width="30"></img>CART</Link>
            <Link to="/Login" style={{color:"white"}} className="signin btn btn-dark"><img src={SignIn} height="25" width="25"></img>SIGN IN</Link>
        </nav>
    </div>
  )
}

export default Navbar;