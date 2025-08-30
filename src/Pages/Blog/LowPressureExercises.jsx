import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Blog.css';

const LowPressureExercises = () => {
  return (
    <div className="blog-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>Low-Pressure Exercises – Gentle but Mighty</span>
      </nav>

      <Link to="/blog" className="back-button" aria-label="back para o blog">
        <FaArrowLeft className="back-icon" /> Back
      </Link>

      <article className="blog-article">
        <h1 className="blog-title">🌸 Low-Pressure Exercises – Gentle but Mighty</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>
          Low-pressure exercises are perfect for strengthening your core without stressing your pelvic floor. 
          They improve posture, help with circulation, and support abdominal recovery after birth. 
          Think of them as a gentle hug for your body while giving results.
        </p>

        <hr />
        <h2>✨ Benefits</h2>
        <ul>
          <li><strong>Prenatal:</strong> Reduces back pain, maintains core strength, improves posture.</li>
          <li><strong>Postpartum:</strong> Supports abdominal recovery, prevents pelvic pressure problems, helps circulation.</li>
          <li><strong>Bonus:</strong> Keeps balance in check—handy when carrying your baby and coffee! ☕👶</li>
        </ul>

        <hr />
        <h2>📋 Step-by-Step Routine</h2>
        <h3>1. Pelvic Tilt (Prenatal & Postpartum)</h3>
        <p>Lie on your back, knees bent. Exhale, tilt pelvis upward, engaging abs. Inhale and relax. Repeat 10–15 times.</p>

        <h3>2. Heel Slides</h3>
        <p>Lie on back, knees bent. Slide one heel out, back in. Alternate legs. 10 reps each.</p>

        <h3>3. Seated March</h3>
        <p>Sit upright, lift one knee at a time. 10–12 reps per leg.</p>

        <h3>4. Side-Lying Leg Lifts</h3>
        <p>Lie on your side, legs stacked. Lift top leg slowly, then lower. 10 reps per leg.</p>

        <hr />
        <h2>🤣 Funny Reality Check</h2>
        <p>
          Some moves might feel like a puzzle for your body, but every rep counts. 
          And yes, if your baby becomes your “weight,” that’s totally allowed!
        </p>
      </article>

      <Link to="/blog" className="back-button">
        <FaArrowLeft className="back-icon" /> Back
      </Link>
    </div>
  );
};

export default LowPressureExercises;
