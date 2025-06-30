/* Bottom footer with contact info or links */

import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Akilisyou. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
