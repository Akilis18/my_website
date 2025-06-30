/* Landing/homepage content */

import React from "react";
import "./Home.css";

const Home: React.FC = () => {
    return (
    <main className="home">
      <section className="home-content">
        <h1 className="home-title">Welcome to Akilisyou.app</h1>
        <p className="home-subtitle">This is the homepage of my personal website.</p>
      </section>
    </main>
  );
};

export default Home;
