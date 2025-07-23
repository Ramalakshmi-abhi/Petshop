import React from 'react';
import './Trending.css';
import moderndog from '../../Asset/moderndog.jpeg';
import fourstarreview from '../../Asset/fourstarreview.png'
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
        <div className='cards'>
          <div className='card-lists'>
            <div className='card-list1'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            <div className='card-list2'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            <div className='card-list3'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            <div className='card-list4'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            <div className='card-list5'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
            <div className='card-list6'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
             <div className='card-list7'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div></div>
            <div className='card-list8'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
             <div className='card-list9'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>
             <div className='card-list10'>
              <div className='card-top'>
                <img src={moderndog} alt="moderndog" />
              </div>
              <div className='card-bottom'>
                <h1>$63.13</h1>
                <h2>moderndog</h2>

                <span>  <img src={fourstarreview} alt="fourstarreview" />
                  <h6>(4Reviews)</h6></span>
              </div>
            </div>  
          </div>
        </div>
      </section>

    </div></>
  );
}
