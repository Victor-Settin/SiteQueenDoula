// src/Pages/Blog/IntroducingFoodsAndAllergies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Blog.css';

const IntroducingFoodsAndAllergies = () => {
  return (
    <div className="blog-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator"> / </span>
        <span>Introducing Foods & Preventing Allergies</span>
      </nav>

      {/* Botão back topo */}
      <Link to="/blog" className="back-button" aria-label="back para o blog">
        <FaArrowLeft className="back-icon" />
        Back
      </Link>

      <article className="blog-article">
        <h1 className="blog-title">🍽️ Introducing Foods & Preventing Allergies in Babies: What Parents Need to Know</h1>
        <p className="blog-author">By Purple Turtle Doula & Nanny Services</p>

        <p>Starting solids is an exciting (and slightly nerve-wracking) milestone for many parents...</p>

        <h2>🍼 When Can I Start Feeding My Baby Solids?</h2>
        <p>Most babies are ready to start solids around 6 months...</p>

        <ul>
          <li>Can sit up with little or no support</li>
          <li>Has good head and neck control</li>
          <li>Shows interest in what you’re eating</li>
          <li>Can move food to the back of the mouth and swallow</li>
        </ul>

        <h2>🥄 How to Introduce New Foods</h2>
        <p>Start slow and keep it simple...</p>

        <ul>
          <li>Puréed vegetables (carrots, sweet potatoes, peas)</li>
          <li>Mashed fruits (banana, avocado, pear)</li>
          <li>Baby cereal (iron-fortified oats or rice)</li>
          <li>Well-cooked lentils or beans (smooth texture)</li>
        </ul>

        <h2>⚠ What About Allergy-Prone Foods?</h2>
        <ul>
          <li>Peanut</li>
          <li>Egg</li>
          <li>Cow’s milk (in baked or processed form)</li>
          <li>Soy</li>
          <li>Wheat</li>
          <li>Tree nuts</li>
          <li>Shellfish</li>
          <li>Fish</li>
          <li>Sesame</li>
        </ul>

        <p>📝 Start with tiny amounts, like a teaspoon of peanut butter thinned with water or breastmilk...</p>

        <h2>🧪 How Can I Make It Easier?</h2>
        <p>If you’re nervous about introducing allergens...</p>

        <h2>💡 Spotlight: Ready. Set. Food!</h2>
        <ul>
          <li>✅ Easy to use daily</li>
          <li>✅ Clinically studied and pediatrician recommended</li>
          <li>✅ Ideal for families who want an extra layer of support</li>
        </ul>

        <h2>🩺 When to Be Cautious:</h2>
        <ul>
          <li>Has moderate to severe eczema</li>
          <li>Has a diagnosed food allergy</li>
          <li>Has a sibling with a history of food allergies</li>
        </ul>

        <p className="doula-tip"><strong>❤ Doula Tip:</strong> Introducing solids is not just about nutrition — it’s about connection...</p>

        <p><strong>💬 Want a custom feeding plan?</strong><br />
        Reach out to Purple Turtle Doula & Nanny Services for help with:<br />
        • First foods schedule<br />
        • Product recommendations<br />
        • One-on-one guidance through your baby’s milestones</p>
      </article>

      {/* Botão back fim */}
      <Link to="/blog" className="back-button bottom" aria-label="back para o blog">
        <FaArrowLeft className="back-icon" />
        Back
      </Link>
    </div>
  );
};

export default IntroducingFoodsAndAllergies;
