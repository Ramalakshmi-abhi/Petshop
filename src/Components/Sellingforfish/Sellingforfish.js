import React from 'react';
import './Sellingforfish.css';
import fish from '../../Asset/fish.jpeg';
import fourstarreview from '../../Asset/fourstarreview.png'
export default function Sellingforfish() {
  return (
    <div>
      <section className='sellingfish'>
        <div className='sellingfish-head'>
          <h3>Best Selling For Fish:</h3>
        </div>
        <div className='sellingfish-cards'>
          <div className='sellingfishcard-lists'>
            <div className='sellingfishcard-list1'>
              <div className='sellingfishcard-top'>
                <img src={fish} alt="fish" />
              </div>
              <div className='sellingfishcard-bottom'>
                <h1>$368.84</h1>
                <h2>Gorgeous Bronze knife</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
        </div>    
        <div className='sellingfishcard-list2'>
              <div className='sellingfishcard-top'>
                <img src={fish} alt="fish" />
              </div>
              <div className='sellingfishcard-bottom'>
                <h1>$368.84</h1>
                <h2>Gorgeous Bronze knife</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
        </div> 
        <div className='sellingfishcard-list3'>
              <div className='sellingfishcard-top'>
                <img src={fish} alt="fish" />
              </div>
              <div className='sellingfishcard-bottom'>
                <h1>$368.84</h1>
                <h2>Gorgeous Bronze knife</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
        </div> 
        <div className='sellingfishcard-list4'>
              <div className='sellingfishcard-top'>
                <img src={fish} alt="fish" />
              </div>
              <div className='sellingfishcard-bottom'>
                <h1>$368.84</h1>
                <h2>Gorgeous Bronze knife</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
        </div> 
        <div className='sellingfishcard-list5'>
              <div className='sellingfishcard-top'>
                <img src={fish} alt="fish" />
              </div>
              <div className='sellingfishcard-bottom'>
                <h1>$368.84</h1>
                <h2>Gorgeous Bronze knife</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
        </div> 

        </div>
      </div>
      </section>
    </div>
  );
}
