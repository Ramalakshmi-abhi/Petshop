import React from 'react';
import './Trending.css';
import data from './categoriesdata';
import Starrating from './Starrating'

export default function Trending() {
  return (
    <><div>
      
<section className='trending'>
  <div className='trending-head'>
    <h3>Trending This Week:</h3>
          <a href='#'>All Items</a>
          <h4>Sales</h4>
          <h4>Featured</h4>
          <h4>BestSeller</h4>

  </div>
  <div className='trending-items'>
    {data.map(({id,name,image,category,price,rating,reviewCount}) => (
      <div className='listitems' key={id}>
        <div className='items'>
          <img src={image} alt={name}/>
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
    </div ></>
  );
}

