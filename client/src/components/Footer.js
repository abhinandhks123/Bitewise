import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css"; // External CSS for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / Logo Section */}
        <div className="footer-brand">
          <h2>BiteWise</h2>
          <p>BiteWise is your smart companion for making healthier, informed food choices. Whether you’re tracking calories, checking nutrition values, or exploring balanced meal ideas, BiteWise helps you eat better without the guesswork. <br/><br/>
          Keep it friendly, smart, and trustworthy — because you want users to feel both guided and understood.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blogs">blogs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: bitewise@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bitewise. All rights reserved.</p>
      </div>
    </footer>
  );
}
