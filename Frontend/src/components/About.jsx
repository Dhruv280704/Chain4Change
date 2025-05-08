import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          We started with a simple belief—that giving should be easy, transparent, and borderless. In a world where millions need support, we saw the potential of cryptocurrency to revolutionize donations. Our platform was born from the desire to connect generous hearts with meaningful causes using the power of blockchain. By combining technology with compassion, we built a secure, fast, and transparent space where every contribution, big or small, creates real impact. This is just the beginning of our mission to reshape the future of giving.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;