import React from 'react';
import './Sellingfordogs.css';
import product from '../../Asset/product.jpeg';
import fourstarreview from '../../Asset/fourstarreview.png'
export default function selling() {
  return (
    <>    <div>
      <section className='selling'>
        <div className='selling-head'>
          <h3>Best Selling For Dog:</h3>
        </div>
        <div className='selling-cards'>
          <div className='sellingcard-lists'>
            <div className='sellingcard-list1'>
              <div className='sellingcard-top'>
                <img src={product} alt="product" />
              </div>
              <div className='sellingcard-bottom'>
                <h1>$63.13-$98.32</h1>
                <h2>Lightweight Aluminum Clock</h2>
               <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            <div className='sellingcard-list2'>
              <div className='sellingcard-top'>
                <img src={product} alt="product" />
              </div>
              <div className='sellingcard-bottom'>
                <h1>$63.13-$98.32</h1>
                <h2>Lightweight Aluminum Clock</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            
            <div className='sellingcard-list3'>
              <div className='sellingcard-top'>
                <img src={product} alt="product" />
              </div>
              <div className='sellingcard-bottom'>
                <h1>$63.13-$98.32</h1>
                <h2>Lightweight Aluminum Clock</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
          
             
            <div className='sellingcard-list4'>
              <div className='sellingcard-top'>
                <img src={product} alt="product" />
              </div>
              <div className='sellingcard-bottom'>
                <h1>$63.13-$98.32</h1>
                <h2>Lightweight Aluminum Clock</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
          
        <div className='sellingcard-list5'>
              <div className='sellingcard-top'>
                <img src={product} alt="product" />
              </div>
              <div className='sellingcard-bottom'>
                <h1>$63.13-$98.32</h1>
                <h2>Lightweight Aluminum Clock</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

