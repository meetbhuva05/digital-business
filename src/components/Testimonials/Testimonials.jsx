import React from 'react'
import SlickSlider from './SlickSlider';
import "./testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="t-wrapper">
        <div className="container">
          <div className="t-container">
            <div className="t-head">
              <span className='tag'>Testimonials</span>
              <span className='title'>
                Access Capital That Complements Traditional Funding Options
              </span>
              <span className='des'>
              What people say about us
              </span>
            </div>
          </div>

          <SlickSlider/>
        </div>
      </div>
    </>
  )
}

export default Testimonials
