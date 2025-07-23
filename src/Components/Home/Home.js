import React from 'react';
import './Home.css';
import headdog from '../../Asset/headdog.png.png'
export default function Home() {
  return (
    <>
    <section id="home" className="home">
        <div className="home-image">
            <img src={headdog} alt="headdog" />
        </div>
        <div className="home-content">

            <span>bring home a better pet</span>
            <h1>dog bed
                <span> and</span>
                <span>
                    bedding</span>
            </h1>
            <button className="shop">shop now</button>
        </div>
    </section>
{/* <!-- hero section -->
    <section className="Hero-section">
        {/* <!-- Image placed --> */}
        {/* <div className="left">
            <img src={headdog} alt="headdog"/>
        </div> */}
        {/* <!-- hero-page content placed --> */}
        {/* <div className="right">
            <span>Bring Home a Better Pet</span>
            <h1>Dog Bed
                <span>And</span>
                <span>Bedding</span>
            </h1>
            <button>Show Now</button>
        </div>
    </section>

    
    <div> */}
      {/* </div> */} 
      </>
  );
}

