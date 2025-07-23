import React from 'react';
import './Offers.css';
import discounts from '../../Asset/Discounts.png';
import dogshirt from '../../Asset/dogshirt.png';
import petfood from '../../Asset/petfood.png';
import doggift from '../../Asset/doggift.png'
export default function Offers() {
  return (
    <><div>
      <section className="offer-section">
        <div className="collection-div">
            <h3>Offers On Pet:</h3>
             <div className="collection-list-items">
                <div className="collection-list">
                    <div className="collect-items1">
                        <div className="right-item">
                            <span>free shipping</span>
                        <h1>30%<br/><span>sale off</span></h1>
                        <a href="#">Shop now</a>
                        </div>
                        <div className="left-item">
                            <img src={discounts} alt="discounts"/>
                        </div>                      
                    </div>
                    <div className="collect-items2">
                        <div className="right-item">
                            <h1>$79.99</h1><h3>$99.99</h3>
                            <span>Best Seller Dog Shirt</span>
                        <h4>Everthing For Your Pet</h4>
                        </div>
                        <div className="left-item" >
                          <img src={dogshirt} alt="dogshirt"/>
                          </div>                      
                    </div>
                    <div className="collect-items3">
                        <div className="right-item">
                            <span>Upto</span>
                        <h1>20%<br/><span>0ff <br/> for Food Pet</span></h1>
                        <a href="#">Shop now</a>
                        </div>
                        <div className="left-item">
                          <img src={petfood} alt="petfood"/></div>                      
                    </div>
                    <div className="collect-items4">
                        <div className="right-item">
                            <span>Disount off</span>
                        <h1>15%<span>Gifts For Pets</span></h1>
                        <a href="#">Usecode:SALE15</a>
                        </div>
                        <div className="left-item">
                          <img src={doggift} alt="dogshirt"/></div>                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div></>
  )
}
