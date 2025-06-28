import React from "react";
import mypic from "./mypic.jpg";

function Home() {
  return (
    <section className="home-section">
      <img src={mypic} className="mypic" alt='profile pic' />
      <h1>Hi, I'm Arjun R</h1>
      <p>Full Stack Developer | Problem Solver | Critical Thinker</p>
    </section>
  );
}

export default Home;
