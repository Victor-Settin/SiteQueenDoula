// src/Pages/Blog/BlogIndex.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBaby, FaUtensils, FaBed } from 'react-icons/fa';
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
    title: '😴 Sleep Training with Dr. Ferber: Why It’s Not Cruel, Just Clever',
    icon: <FaBed />,
    summary: 'Discover the Ferber Method and how it helps your baby learn to self-soothe and sleep independently.',
  },
];

const BlogIndex = () => {
  return (
    <div className="blog-index-container">
      <h1 className="blog-index-title">Purple Turtle's Blog</h1>
      <p className="blog-index-intro">Welcome to our blog! Explore our helpful articles below.</p>
      
      <div className="blog-articles-list">
        {articles.map(({ id, title, icon, summary }) => (
          <div key={id} className="blog-article-card">
            <div className="blog-article-icon" style={{ color: '#7b3f9a' }}>{icon}</div>
            <h2 className="blog-article-title" style={{ color: '#7b3f9a' }}>{title}</h2>
            <p className="blog-article-summary">{summary}</p>
            <Link to={`/blog/${id}`} className="blog-readmore-btn" style={{ backgroundColor: '#7b3f9a' }}>
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
