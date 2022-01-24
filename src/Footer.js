import React from 'react';

function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>&copy; Roland Levy {thisYear}</span>
      <a href="https://rolandlevy.co.uk" className="new-tab-icon" target="_blank">see more of my projects</a>
    </footer>
  );
}

export default Footer;
