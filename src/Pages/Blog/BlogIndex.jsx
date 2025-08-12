import React from 'react';
import { Link } from 'react-router-dom';
import { FaBaby, FaUtensils, FaHourglassStart, FaTeethOpen, FaMusic } from 'react-icons/fa';
import './Blog.css';

const articles = [
  {
    id: 'ultimate-baby-registry',
    title: '🍼 The Ultimate Baby Registry Guide: What You Actually Need for the First 3 Months',
    icon: <FaBaby />,
    summary: 'Prepare for your baby’s arrival with a thoughtful registry covering essentials from clothing to feeding gear.',
  },
  {
    id: 'introducing-foods-preventing-allergies',
    title: '🍽️ Introducing Foods & Preventing Allergies in Babies: What Parents Need to Know',
    icon: <FaUtensils />,
    summary: 'Learn how and when to introduce solids safely and prevent allergies with expert tips and supplement options.',
  },
  {
    id: 'sleep-training',
    title: '⏳ Sleep Training with Dr. Ferber: Why It’s Not Cruel, Just Clever',
    icon: <FaHourglassStart />,
    summary: 'Discover the Ferber Method and how it can help your baby learn to sleep independently with gentle guidance.',
  },
  {
    id: 'teething-troubles',
    title: '🦷 Teething Troubles? How to Help Your Baby (and Yourself) Survive',
    icon: <FaTeethOpen />,
    summary: 'Tips and tricks for soothing teething pain while keeping your sanity intact.',
  },
  {
    id: 'classical-music-baby',
    title: '🎻 Why Is My Baby Smarter Than Me? (Blame Classical Music)',
    icon: <FaMusic />,
    summary: 'Discover how classical music can boost your baby’s brain development and create magical bonding moments.',
  },
  {
    id: 'perfect-latch',
    title: '🤱 The Ultimate Guide to the Perfect Latch',
    icon: <FaBaby />,
    summary: 'Learn how to achieve a comfortable, effective latch for a smooth breastfeeding journey.',
  },
];

const BlogIndex = () => {
  return (
    <div className="blog-index-container">
      <h1 className="blog-index-title">Purple Turtle&apos;s Blog</h1>
      <p className="blog-index-intro">Welcome to our blog! Explore our helpful articles below.</p>
      
      <div className="blog-articles-list">
        {articles.map(({ id, title, icon, summary }) => (
          <div key={id} className="blog-article-card">
            <div className="blog-article-icon" style={{ color: '#7b3f9a' }}>{icon}</div>
            <h2 className="blog-article-title" style={{ color: '#7b3f9a' }}>{title}</h2>
            <p className="blog-article-summary">{summary}</p>
            <Link to={`/blog/${id}`} className="blog-readmore-btn" style={{ backgroundColor: '#7b3f9a' }}>
              See more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
