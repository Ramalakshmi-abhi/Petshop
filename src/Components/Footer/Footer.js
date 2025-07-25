import React from 'react';
import './Footer.css';
import logoshop from '../../Asset/logoshop.png';
import Phone from '../../Asset/Phone.png';
import facebook from '../../Asset/Facebook.png';
import X from '../../Asset/X.png';
import Instragram from '../../Asset/Instragram.jpg';
import emailenvelope from '../../Asset/emailenvelope.png'
export default function Footer() {
  return (
    <><div>
      <footer>
       <hr/>
        
          <div className='logos'>
            <img src={logoshop} alt='logoshop'/>
            <div className='describe'>
            <h3>Your Online Pet Store For Friendly 
             Service And Trusted Pet products</h3>
             <h4><img src={Phone} alt='Phone'/> Helpline(24/7)</h4>
             
             <span>877-123-4567</span>
             <div className='socialicon'>
             <button className='socialicon1'>
              <img src={facebook} alt='facebook'/>
             </button>
             <button className='socialicon2'>
              <img src={X} alt='X'/>
              </button>
              <button className='socialicon3'>
                <img src={Instragram} alt='Instragram'/>
              </button>
              </div>
              </div>
          </div>    
          <div className='user-links'>
            <h4>USEFUL LINKS</h4>
        <a href="#">New Products</a><br></br>
        <a href="#">Best Sellers</a><br></br>
        <a href="#">Bundle & Save</a><br></br>
        <a href="#">Online Gift Card</a><br></br>
        <a href="#">Discount</a><br></br>
        <a href="#">Pet Store Locator</a>
        </div> 
        <div className='my-account'>
            <h4>MY ACCOUNTS</h4>
        <a href="#">My Profile</a><br></br>
        <a href="#">MY Order History</a><br></br>
        <a href="#">My Wish List</a><br></br>
        <a href="#">order Tracking</a><br></br>
        <a href="#">Shipping Info</a><br></br>
        <a href="#">Shopping Cart</a>
        </div> 
        <div className='company'>
            <h4>COMPANY</h4>
        <a href="#">About Us</a><br></br>
        <a href="#">Careers</a><br></br>
        <a href="#">Blog</a><br></br>
        <a href="#">Contact Us</a><br></br>
        <a href="#">Gift cards</a>
        </div> 
        <div className='newsletter'>
          <h4> NEWSLETTER</h4>
          <p>Subscribe & Get 10% Discount.Get E-Mail
            Updates About ur Latest Shop And Special Offers.
          </p>
     <form action="#" method="post">
          <input type="email" name="email" placeholder="Your email"/>
          <button type="submit">
            <img src={emailenvelope} alt="emailenvelope"/>
          </button>
        </form>
          </div>  
    
        
         <div class="footer-bottom">
    <div class="copyright">
      © 2025 Cuifity Pets. All Rights Reserved
    </div>
    <div class="legal-links">
      <a href="#">Privacy &amp; Cookie Policy</a>
      <span>|</span>
      <a href="#">Terms Of Service</a>
    </div>
  </div>

      </footer>
    </div></>
  );
} 
