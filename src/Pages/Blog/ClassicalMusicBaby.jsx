import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Blog.css';

const ClassicalMusicBaby = () => {
  return (
    <div className="blog-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>Why Is My Baby Smarter Than Me?</span>
      </nav>

      <Link to="/blog" className="back-button" aria-label="back para o blog">
        <FaArrowLeft className="back-icon" /> Back
      </Link>

      <article className="blog-article">
        <h1 className="blog-title">
          🎻 Why Is My Baby Smarter Than Me? (Blame Classical Music)
        </h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>So, you’ve got a newborn in one arm and a cup of cold coffee in the other, and suddenly you’re blasting Beethoven in the background because someone on the internet said it makes your baby smarter. But is that true?</p>
        <p>Well… sort of. Let’s break it down, giggles included.</p>

        <hr />
        <h2>🎼 Classical Music = Baby Brain Vitamins?</h2>
        <p>Okay, so classical music doesn’t literally make your baby a genius overnight (sorry, Ivy League). But studies suggest it can help your baby’s brain develop in some really cool ways, like:</p>
        <ul>
          <li>Better memory</li>
          <li>Improved language skills</li>
          <li>Emotional regulation</li>
          <li>More restful sleep</li>
        </ul>
        <p>Why? Because classical music is full of patterns, predictable rhythms, and complex tones that stimulate your baby’s auditory and cognitive development without overwhelming them.</p>

        <hr />
        <h2>🌙 1. Clair de Lune – Debussy</h2>
        <p>Soft, dreamy, and perfect for bedtime. Calms the nervous system and promotes sleepy vibes.</p>

        <h2>🩰 2. Gymnopédie No.1 – Erik Satie</h2>
        <p>Minimal, slow, and ideal for naptime or quiet feeds. Helps with focus and self-soothing.</p>

        <h2>🌌 3. Moonlight Sonata – Beethoven</h2>
        <p>Moody and emotional. Boosts auditory discrimination and language processing.</p>

        <h2>🎹 4. Prelude in C Major – Bach</h2>
        <p>Orderly and structured. Supports logic, memory, and sequencing.</p>

        <h2>🌸 5. Waltz of the Flowers – Tchaikovsky</h2>
        <p>Upbeat and expressive. Encourages sensorimotor development and joy.</p>

        <hr />
        <h2>🎧 Is Classical Music Better Than Other Music?</h2>
        <p>It depends! Calm rhythms, predictable melodies, moderate volume — and music you enjoy too — are the most important factors.</p>

        <hr />
        <h2>💜 Final Notes</h2>
        <p>Classical music is a beautiful, screen-free way to support your baby’s development — and maybe give your own brain a break, too.</p>
        <p>Whether you’re rocking out to Bach or bouncing to Tchaikovsky, you’re building your baby’s brain and your bond together.</p>
      </article>

      <Link to="/blog" className="back-button">
        <FaArrowLeft className="back-icon" /> Back
      </Link>
    </div>
  );
};

export default ClassicalMusicBaby;
