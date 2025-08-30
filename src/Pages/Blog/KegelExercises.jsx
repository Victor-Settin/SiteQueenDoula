import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Blog.css';

const KegelExercises = () => {
  return (
    <div className="blog-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>Kegel (Wegel) Exercises – Strengthening Your Pelvic Floor</span>
      </nav>

      <Link to="/blog" className="back-button" aria-label="back para o blog">
        <FaArrowLeft className="back-icon" /> Back
      </Link>

      <article className="blog-article">
        <h1 className="blog-title">🤰💪 Kegel (Wegel) Exercises – Strengthening Your Pelvic Floor</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>
          Pregnancy and labor put enormous pressure on your pelvic floor—yes, the muscles that hold everything in place! 
          Kegel exercises (sometimes called Wegel exercises) are your best friends here. They help with bladder control, 
          postpartum recovery, and sexual health. Bonus: you can do them anywhere—on the couch, at the office, 
          or while waiting for your coffee.
        </p>

        <hr />
        <h2>✨ Why Kegels Are a Must</h2>
        <ul>
          <li><strong>Before Labor:</strong> Strengthens pelvic muscles to better handle contractions and delivery.</li>
          <li><strong>After Birth:</strong> Helps prevent incontinence, speeds recovery, and supports pelvic organ health.</li>
          <li><strong>Fun Bonus:</strong> Strong Kegels can even make intimacy more enjoyable. 😉</li>
        </ul>

        <hr />
        <h2>📋 Step-by-Step Kegel Routine</h2>
        <h3>1. Identify Your Muscles:</h3>
        <p>Try stopping your urine midstream. Those are the muscles to train (but don’t practice during actual peeing regularly—it’s bad for you).</p>

        <h3>2. Basic Kegel:</h3>
        <ul>
          <li>Contract: Squeeze pelvic muscles for 5 seconds.</li>
          <li>Relax: Release for 5 seconds.</li>
          <li>Repeat: 10 times.</li>
        </ul>

        <h3>3. Quick Flicks:</h3>
        <p>Squeeze for 1 second, relax for 1 second, repeat 10–15 times. Good for endurance.</p>

        <h3>4. Long Holds:</h3>
        <p>Squeeze for 10 seconds, relax 10 seconds, repeat 5 times.</p>

        <h3>5. Frequency:</h3>
        <ul>
          <li>Prenatal: 3 times a day.</li>
          <li>Postpartum: 3–5 times a day (with your doctor’s approval).</li>
        </ul>

        <hr />
        <h2>💡 Tips</h2>
        <ul>
          <li>Breathe normally.</li>
          <li>Don’t tighten your thighs or buttocks.</li>
          <li>Consistency is key!</li>
        </ul>

        <hr />
        <h2>😅 Funny Reality Check</h2>
        <p>
          Some days you’ll feel like a Kegel queen, other days your muscles might protest. 
          That’s normal—just keep at it!
        </p>
      </article>

      <Link to="/blog" className="back-button">
        <FaArrowLeft className="back-icon" /> Back
      </Link>
    </div>
  );
};

export default KegelExercises;
