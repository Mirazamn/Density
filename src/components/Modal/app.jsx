import React from 'react';
import './style.css'; 

const SubscribeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Get Started?</h2>

        <input
          type="email"
          placeholder="Your email"
          className="email-input"
        />
        <a href="../../../index.html">
          <button className="subscribe-btn">Join Now</button>
        </a>

        <p className="follow-text">Follow us</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">
            <i className="fab fa-behance"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="contact-info">
          <a href="tel:+1234567890" className='follow-text'> <p><strong>Phone:</strong> +123 456 7890</p> </a>
          <a href="mailto:hello@example.com" className='follow-text'> <p><strong>Email:</strong> hello@example.com</p> </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;