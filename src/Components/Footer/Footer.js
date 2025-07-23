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
       <hr></hr>
        
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
          <div classname='footer-links'>
            <h4>USEFUL LINKS</h4>
        <a href="#">New Products</a>
        <a href="#">Best Sellers</a>
        <a href="#">Bundle & Save</a>
        <a href="#">Online Gift Card</a>
        <a href="#">Discount</a>
        <a href="#">Pet Store Locator</a>
        </div>   

      </footer>
    </div></>
  );
}
