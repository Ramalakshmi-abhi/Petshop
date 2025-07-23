import React from 'react';
import './Recentlyview.css';
import viewfood from '../../Asset/viewfood.jpeg'

export default function Recentlyview() {
  return (
    <><div>
      <section className="recentlyview">
        <h2>Recently Viewed Product:</h2>
      <div className="view">
        <div className="list1">
        <img src={viewfood} alt="viewfood"/>
      <h2>Lightweight Aluminum Clock</h2>
      <span>$60.40-$98.32</span>
        </div>
        <div className="list2">
          <img src={viewfood} alt="viewfood"/>
          <h2>Lightweight Aluminum Clock</h2>
      <span>$60.40-$98.32</span>
        </div>
<div className="list3">
          <img src={viewfood} alt="viewfood"/>
          <h2>Lightweight Aluminum Clock</h2>
      <span>$60.40-$98.32</span>
        </div>
        <div className="list4">
          <img src={viewfood} alt="viewfood"/>
          <h2>Lightweight Aluminum Clock</h2>
      <span>$60.40-$98.32</span>
        </div>
        <div className="list5">
          <img src={viewfood} alt="viewfood"/>
          <h2>Lightweight Aluminum Clock</h2>
      <span>$60.40-$98.32</span>
        </div>
      </div>
      </section>

    </div></>
  );
}
