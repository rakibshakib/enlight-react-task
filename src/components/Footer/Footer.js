import React from "react";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h2>ES-Shoping</h2>
            <p>
              To me, photography is an art of observation. It’s about finding
              something interesting an ordinary place… I’ve found it has little
              to do with the things you see and everything to do with the way
              you see them.
            </p>
          </div>
          <div className="footer-col">
            <h4>Important Link</h4>
            <li>Facebook</li>
            <li>Recent</li>
            <li>Trending</li>
            <li>Contact</li>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <li>Email: email@gmail.com </li>
            <li>Phone: +880123456789</li>
            <li>Address: Mirpur DOHS</li>
            <li>Bangladesh</li>
          </div>
        </div> 
        <hr />
        <p className="copyright">All Right Reserved © ES Shopping - 2022</p>
      </div>
    </div>
  );
};

export default Footer;
