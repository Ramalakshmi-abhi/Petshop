import React from 'react';
import './Delivery.css';
import petparent from '../../Asset/petparent.png';
import delivery from '../../Asset/delivery.png';
import rewards from '../../Asset/rewards.png';
import help from '../../Asset/help.png';
import door from '../../Asset/door.png'

export default function Delivery() {
  return (
<>
    <div>
{/* <!-- Promise Delivery /--> */}
    <section className="promise-section">
        {/* <!-- promise delivery content --> */}
        <div className="promise-center">
            <div className="list-1">
                <img src={petparent} alt="petparent"/>
                <span>Making Pet parenting easy</span>
            </div>
            <hr/>
            <div className="list-2">
                <img src={delivery} alt="delivery"/>
                <span>Wide Range Free Delivery</span>
            </div>
            <hr/>
            <div className="list-3">
                <img src={rewards} alt="rewards"/>
                <span>save more with rewards</span>
            </div>
            <hr/>
            <div className="list-4">
                <img src={help} alt="help"/>
                <span>helping you choose the best</span>
            </div>
            <hr/>
            <div className="list-5">
                <img src={door} alt="door"/>
                <span>Delivered to your Door</span>
            </div>
        </div>
    </section>
    </div>
  
 </> );
}
