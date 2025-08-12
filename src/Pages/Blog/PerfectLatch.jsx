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
        <h1>🤱 The Ultimate Guide to the Perfect Latch</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>When it comes to breastfeeding, a good latch can mean the difference between a smooth, pain-free journey and one filled with sore nipples, frustration, and endless adjustments. But here’s the good news: perfecting the latch is a skill you and your baby can learn together.</p>

        <hr />
        <h2>💡 Why the Latch Matters</h2>
        <p>A deep, comfortable latch ensures your baby gets enough milk while protecting your nipples from damage. Without it, you might experience:</p>
        <ul>
          <li>Cracked or sore nipples</li>
          <li>Poor milk transfer</li>
          <li>Frustration for both mom and baby</li>
          <li>Blocked ducts or mastitis</li>
        </ul>

        <hr />
        <h2>🪞 Step 1: Get Comfortable</h2>
        <p>Whether you’re in bed, on the couch, or in your favorite nursing chair, your comfort is just as important as your baby’s. Use pillows or a breastfeeding cushion to support your arms and baby’s body.</p>

        <h2>👶 Step 2: Baby’s Position</h2>
        <p>Bring your baby to your breast — not the other way around. Their head, neck, and spine should be in a straight line, with their nose level with your nipple.</p>

        <h2>👄 Step 3: Wait for the Big Yawn</h2>
        <p>Tickle your baby’s lips with your nipple until they open wide — like a big yawn. This is your cue to bring them onto the breast quickly and smoothly.</p>

        <h2>📏 Step 4: Aim for More Areola</h2>
        <p>Your baby’s mouth should cover more of the lower part of the areola than the top. Their chin should be pressed into your breast, and their nose should remain clear for breathing.</p>

        <hr />
        <h2>🔍 Signs of a Good Latch</h2>
        <ul>
          <li>No pain after the first few seconds</li>
          <li>Baby’s cheeks are rounded (not sucked in)</li>
          <li>You hear or see swallowing</li>
          <li>Your nipples look the same shape after feeding</li>
        </ul>

        <h2>🚨 Signs of a Poor Latch</h2>
        <ul>
          <li>Pain that persists through the feed</li>
          <li>Clicking or smacking sounds</li>
          <li>Shallow mouth position</li>
          <li>Flattened or creased nipples afterward</li>
        </ul>

        <hr />
        <h2>💜 Final Thoughts</h2>
        <p>Breastfeeding is a journey of patience, practice, and connection. If you’re struggling with pain or your baby isn’t gaining weight as expected, reach out to a lactation consultant or doula for hands-on support.</p>
        <p>Remember: you and your baby are a team, and every feed is a step toward mastering the perfect latch.</p>
      </article>

      <Link to="/blog" className="back-button bottom">
        <FaArrowLeft className="back-icon" /> Back
      </Link>
    </div>
  );
};

export default PerfectLatch;
