import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTeethOpen } from 'react-icons/fa';
import './Blog.css';

const TeethingTroubles = () => {
  return (
    <div className="blog-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>Teething Troubles</span>
      </nav>

      <Link to="/blog" className="back-button" aria-label="back para o blog">
        <FaArrowLeft className="back-icon" /> Back
      </Link>

      <article className="blog-article">
        <h1 className="blog-title">
          😬 Teething Troubles: What’s Normal, What’s Not, and Why Your Baby Might Be Vomiting
        </h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>Let’s talk about something every parent hears about, dreads a little, and googles at 2am: teething.</p>
        <p>That magical time when your sweet baby starts sprouting tiny teeth… and suddenly becomes drooly, cranky, and maybe even a little suspiciously pukey. Wait — vomiting? Could it be from teething?</p>
        <p>Let’s break it down with love, clarity, and a bit of humor — because if you’re cleaning up baby barf, you deserve at least a few laughs.</p>

        <hr />
        <h2>🦷 What Is Teething, Really?</h2>
        <p>Teething usually begins somewhere between 4 and 7 months, but like everything baby-related, that timeline can vary...</p>
        <ul>
          <li>Lots (and I mean LOTS) of drooling</li>
          <li>Chewing on anything within reach</li>
          <li>Red or swollen gums</li>
          <li>Mild fussiness or disrupted sleep</li>
          <li>Slight increase in body temperature</li>
        </ul>

        <hr />
        <h2>🤢 But Can Teething Cause Vomiting?</h2>
        <p>Here’s the truth: Teething itself doesn’t directly cause vomiting — but it can lead to behaviors and reactions that might trigger it.</p>

        <h3>💧 1. Excess Drool Overload</h3>
        <p>Swallowing too much drool can upset little tummies.</p>

        <h3>🤮 2. Gag Reflex Triggered</h3>
        <p>Constant chewing can sometimes trigger gagging.</p>

        <h3>😷 3. Throat Irritation</h3>
        <p>Drool sliding down the throat may cause coughing and spit-up.</p>

        <h3>😴 4. General Sensitivity</h3>
        <p>Some babies just have more sensitive systems during teething.</p>

        <hr />
        <h2>🚨 When to Call the Pediatrician</h2>
        <ul>
          <li>High fever (over 38°C)</li>
          <li>Vomiting more than a day</li>
          <li>Green or bloody vomit</li>
          <li>Signs of dehydration</li>
        </ul>

        <hr />
        <h2>🧸 What You Can Do to Help</h2>
        <ul>
          <li>Cold teething toys</li>
          <li>Clean finger gum massage</li>
          <li>Feeding for comfort</li>
          <li>Wipe excess drool</li>
          <li>Lots of cuddles</li>
        </ul>

        <p>For babies over 6 months, ask your pediatrician about safe remedies.</p>

        <hr />
        <h2>💬 Final Thoughts</h2>
        <p>Teething is messy, magical, and temporary. Soon your little one will be flashing toothy grins!</p>
      </article>

      <Link to="/blog" className="back-button">
        <FaArrowLeft className="back-icon" /> Back
      </Link>
    </div>
  );
};

export default TeethingTroubles;
