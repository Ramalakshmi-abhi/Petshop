import React from 'react';
import './Sellingforfish.css';
import data from './fishdata';
import Starrating from '../Trending/Starrating';
export default function Sellingforfish() {
  return (
    <div>
      <section className='sellingfish'>
        <div className='sellingfish-head'>

          <h3>Best Selling for fish:</h3>

        </div>
        <div className='fish-items'>
          {data.map(({ id, name, image, category, price, rating, reviewCount }) => (
            <div className='fishlistitems' key={id}>
              <div className='fishitems'>
                <img src={image} alt={name} />
              </div>
              <span>{name}</span>
              <div className="review">
                <Starrating rating={rating} />
                {/* <span className='review-count'>
    ({formatCount(reviewCount || 0)} reviews)
   </span> */}
              </div>
              {/* <button className='AddToCart'
   onClick={() => addToCart({ id,name,image,price})}
   >
Add to Cart
   </button> */}
            </div>
          )
          )}
        </div>
      </section>
    </div>
  );
}
