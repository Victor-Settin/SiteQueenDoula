import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Blog.css';

const PerfectLatch = () => {
  return (
    <div className="blog-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>The Ultimate Guide to the Perfect Latch</span>
      </nav>

      <Link to="/blog" className="back-button">
        <FaArrowLeft className="back-icon" /> Back
      </Link>

      <article className="blog-article">
        <h1>🤱 The Ultimate Guide to the Perfect Latch: From Preparation to Breastfeeding Bliss</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>
          Let me start with a confession: when I was expecting my daughter, I thought breastfeeding would be like one of those idyllic scenes from a movie—specifically, I had <em>The Blue Lagoon</em> in mind. In that film, the baby just instinctively finds the breast and latches on like it’s the most natural thing in the world. And, of course, all the commercials made it look like a honeymoon phase—just baby, mom, and a perfect latch.
        </p>

        <p>
          Reality check: when my daughter arrived, I quickly realized that babies don’t come out knowing how to breastfeed. We both had to learn, and it was a journey of trial, error, and a lot of patience. So if you’re feeling a bit shocked or frustrated that it’s not all movie magic, you’re not alone. Think of this as your backstage guide to making that perfect latch happen, step by step.
        </p>

        <hr />
        <h2>Step 1: Pre-Baby Prep (Yes, Your Nipples Can Train Too!) 👶✨</h2>
        <ul>
          <li>🧴 <strong>Moisturize and Condition:</strong> Use a natural nipple balm or lanolin cream in the weeks leading up to birth. This helps keep the skin supple and less likely to crack.</li>
          <li>☀ <strong>Gentle Stimulation:</strong> Some lactation consultants recommend gentle massage or even a bit of sunlight exposure if possible. It’s like giving your nipples a pep talk: “We’ve got this!”</li>
        </ul>

        <hr />
        <h2>Step 2: The First Latch (Cue the Applause!) 🎉🤱</h2>
        <ol>
          <li>🛋 <strong>Get Comfortable:</strong> Find a cozy spot with good support for your back and arms. A nursing pillow can be a lifesaver.</li>
          <li>🤝 <strong>Baby’s Position:</strong> Hold your baby tummy-to-tummy with you. Make sure their head and body are in a straight line. Think of it as lining up a mini dance partner who’s ready to waltz.</li>
          <li>👄 <strong>The Rooting Reflex:</strong> Gently brush your nipple against baby’s upper lip. This will prompt them to open wide, like a little baby bird waiting for food.</li>
          <li>🤱 <strong>Bring Baby to Breast:</strong> Once that mouth is wide open, bring your baby quickly and gently onto the breast. Aim your nipple toward the roof of their mouth, getting as much of the areola in as possible.</li>
        </ol>

        <hr />
        <h2>Step 3: Checking the Latch (Or, “Did We Nail It?”) ✅💕</h2>
        <ul>
          <li>👄 Baby’s lips flanged out, like a little fish.</li>
          <li>🤏 Baby’s chin pressed into the breast, nose free or just touching.</li>
          <li>👶 Rhythmic suck–suck–swallow pattern without clicking sounds.</li>
        </ul>

        <hr />
        <h2>Step 4: Troubleshooting Common Challenges (Because Nobody’s Perfect!) 🔧💡</h2>
        <ul>
          <li>🔄 <strong>Repositioning:</strong> If it hurts, break the suction gently with your finger and try again.</li>
          <li>💧 <strong>Engorgement:</strong> Hand-express a little milk first to soften the areola.</li>
          <li>🛡 <strong>Nipple Shields:</strong> Use only with guidance from a lactation consultant.</li>
        </ul>

        <hr />
        <h2>Step 5: Celebrate the Small Victories (And Laugh a Little!) 🎊😂</h2>
        <p>
          Remember, every mom and baby pair is unique. Some get the hang of it on day one, while others take a few weeks. Be patient with yourself and your baby. Laugh at the funny faces and moments, and celebrate every little success—those moments add up.
        </p>
      </article>

      <Link to="/blog" className="back-button bottom">
        <FaArrowLeft className="back-icon" /> Back
      </Link>
    </div>
  );
};

export default PerfectLatch;
