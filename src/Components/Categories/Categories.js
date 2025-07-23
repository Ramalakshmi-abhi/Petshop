import React from 'react';
import './Categories.css';
import furniture from '../../Asset/furniture.png';
import toys from '../../Asset/toys.png.png';
import bed from '../../Asset/bed.png.png';
import bowls from '../../Asset/bowls.png.png';
import treats from '../../Asset/treats.png.png';
import crates from '../../Asset/crates.png.png'
export default function Categories() {
  return (
    <>

      {/* <section className="categories">
        <span>Browse By Categories</span>
        <div className="categories-browse">
          <div className="browse">
            <img src={furniture} alt="furniture" />
            <span>furniture</span>
            <img src={toys} alt="toys" />
            <span>Toys</span>
            <img src={bed} alt="bed" />
            <span>Beds</span>
            <img src={bowls} alt="bowls" />
            <span>Bowls</span>
            <img src={treats} alt="treats" />
            <span>Treats</span>
            <img src={crates} alt="crates" />
            <span>Crates</span>
          </div>
        </div>
      </section> */}
<section className="categories-section">
        <div className="categoriesilist">
            <h3>Browse By Categoirs:</h3>
            <div className="list-items">
                <div className="items">
                    <div className="list-item">
                        <img src={furniture} alt="furniture"/>
                    </div>
                    <span>Furniture</span>
                </div>
                <div className="items">
                    <div className="list-item">
                        <img src={toys} alt="toys"/>
                    </div>
                    <span>toys</span>
                </div>
                <div className="items">
                    <div className="list-item">
                        <img src={bed} alt="bed"/></div>
                    <span>Pet-Home</span>
                </div>
                <div className="items">
                    <div className="list-item">
                        <img src={bowls} alt="bowls"/>
                    </div>
                    <span>bowls</span>
                </div>
                <div className="items">
                    <div className="list-item">
                        <img src={treats} alt="treats"/>
                    </div>
                    <span>Treats</span>
                </div>
                <div className="items">
                    <div className="list-item">
                        <img src={crates} alt="crates"/>
                    </div>
                    <span>Crates</span>
                </div>
                
            </div>
        </div>
    </section>

    </>
  );
}
