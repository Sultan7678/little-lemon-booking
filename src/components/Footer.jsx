import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>Little Lemon</h4>
          <p>123 Flavor Street, Riyadh, Saudi Arabia</p>
          <p>Email: contact@littlelemon.sa</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#booking">Book a Table</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-note">© 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
