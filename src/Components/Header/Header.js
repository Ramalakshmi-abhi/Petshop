import React from 'react';
import './Header.css';
import logoshop from '../../Asset/logoshop.png';
import search from '../../Asset/search.png';
import wishlist from '../../Asset/wishlist.png';
import cart from '../../Asset/cart.png';
import login from '../../Asset/login.png';
export default function Header() {
  return (
  
    //   <header>
    //   <div className="navbar">
    //              <div className="logo">
    //             <img src={logoshop} alt="logo" />
    //         </div>
    //         <nav>
    //             <a href="#home">Home</a>
    //             <a href="#shop">Shop</a>
    //             <a href="#pages">Pages</a>
    //             <a href="#blog">Blog</a>
    //             <a href="#contact">contact</a>
    //         </nav>
    //         <div className="search-div">
    //             <input type="search" name="" id="" placeholder="Search" /><img src={search} alt="search" />
    //         </div>

    //         <div className="img-small">
    //             <a href="#wishlist" /><img src={wishlist} alt="wishlist"/>
    //             <a href="#cart" /><img src={cart} alt="cart"/>
    //             <a href="#login" /><img src={login} alt="login" />
    //         </div>
    //      </div>
      
    // </header>
    // <!-- Header -->
    <header>
        <div className="navbar">
            {/* <!-- logo --> */}
            <div className="logo">
                <img src={logoshop} alt="logoshop"/>
            </div>
            {/* <!-- navbar --> */}
            <nav>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Track</a>
                <a href="#">Contact</a>
            </nav>
            {/* <!-- search box --> */}
            <div className="search-div">
                <input type="search" placeholder="Search Products" name="" id=""/>
                <img src={search} alt="search"/>
            </div>
            {/* <!-- user cart,wishlist,login --> */}
            <div className="user-icons">
                <a href="#">
                    <img src={wishlist} alt="wishlist"/>
                </a>
                <a href="#">
                    <img src={cart} alt="cart"/>
                </a>
                <a href="#">
                    <img src={login} alt="login"/>
                </a>
            </div>
        </div>
    </header>

     );
}
