import React from 'react'
import EmailBox from '../EmailBox/EmailBox';
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-container">
            <span className="title">
              Get Funded Today?
            </span>
            <EmailBox />
            <hr />
            <div className="footer-menu">
              <span>Home</span>
              <span>what we do </span>
              <span>how it works</span>
              <span>who we invest in </span>
              <span>testimonials</span>
            </div>
            <hr />
            <span className='text'>Made with ❤️ by ZAINKEEPSCODE</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
