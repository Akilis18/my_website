/* Top navigation bar shown on all pages */

import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/notes">Notes</a></li>
            <li><a href="/apps">Apps</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>
    );
};

export default Navbar;
