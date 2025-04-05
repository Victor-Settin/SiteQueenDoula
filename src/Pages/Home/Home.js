import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa';
import Slider from 'react-slick';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import deusaGregaImg from '../../assets/Images/deusa-grega.jpg';
import FirstimgHome from '../../assets/Images/foto-home1.jpg';
import cliente1 from '../../assets/Images/img_rnt.jpg';
import cliente2 from '../../assets/Images/img_rnt.jpg';
import cliente3 from '../../assets/Images/profile_photo.jpg';
import cliente4 from '../../assets/Images/img123.jpg';
import cliente5 from '../../assets/Images/img111.jpg';
import cliente6 from '../../assets/Images/img929.jpg';
import cliente7 from '../../assets/Images/jul-profile.jpg';
import DoulaServices from '../../Components/DoulaServices/DoulaServices';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import FaqAccordion from '../../Components/FaqAccordion/FaqAccordion';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 80, once: false });
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const recommendations = [
    {
      name: 'Sarah',
      image: cliente1,
      rating: 5,
      date: '10/16/2022',
      location: 'San Bruno - California',
      comment: '“When my first daughter was born I felt very alone because I didn’t have any family around and Raquel helped me a lot! I’m very grateful for everything!”',
    },
    {
      name: 'Nathalia',
      image: cliente3,
      rating: 5,
      date: '10/26/2023',
      location: 'Daly City - California',
      comment: '“I had my baby in November 2023 and I don’t know what my postpartum period would have been like without Raquel’s help. She was essential...”',
    },
    {
      name: 'Sarah',
      image: cliente2,
      rating: 5,
      date: '09/02/2024',
      location: 'San Mateo - California',
      comment: '“Raquel had helped us a lot with my first baby and we had no doubts about being with her when our second princess arrived...”',
    },
    {
      name: 'Revşan',
      image: cliente4,
      rating: 5,
      date: '12/26/2024',
      location: 'San Mateo - California',
      comment: '“I came to US already pregnant with no English. Raquel was very supportive and patient with me and my family...”',
    },
    {
      name: 'Ana Quinonez',
      image: cliente5,
      rating: 5,
      date: '12/26/2024',
      location: 'San Mateo - California',
      comment: '“I have known Raquel Martins Rodrigues for over 5 years. We were coworkers working for the same family...”',
    },
    {
      name: 'Aaron',
      image: cliente6,
      rating: 5,
      date: '03/17/2024',
      location: 'RedWood City - California',
      comment: '“I am thrilled to share my experience with Raquel, our Nanny and Doula. Raquel‘s gentle and loving approach made quite the difference...”',
    },
    {
      name: 'Julie Barton',
      image: cliente7,
      rating: 5,
      date: '04/03/2025',
      location: 'South San Jose - California',
      comment: '“I can’t say enough good things about Raquel - if you’re considering a nighttime doula, you can’t go wrong with inviting her into your home...”',
    },
  ];

  const [expanded, setExpanded] = useState(Array(recommendations.length).fill(false));
  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: isSmallScreen ? '30px' : '220px',
  };

  const faqs = [
    {
      question: 'What does a postpartum doula do?',
      answer: 'A postpartum doula supports families after birth with newborn care, recovery, and household tasks.',
    },
    {
      question: 'How do I schedule a consultation?',
      answer: 'Click "Schedule a Free Consultation" and fill out the contact form!',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Purple Turtle Doula & Nanny Services | San Mateo, CA</title>
        <meta name="description" content="Postpartum doula and nanny services in San Mateo, CA. Loving, trustworthy care for your family." />
        <meta name="keywords" content="postpartum doula, nanny services, San Mateo, newborn care" />
      </Helmet>

      <div className="content-box">
        <img src={FirstimgHome} alt="First image of Purple Turtle Services" loading="lazy" />
      </div>

      <PageWrapper>
        <div className="home-wrapper">
          <div className="scroll-indicator" data-aos="fade-up">
            <FaArrowDown className="arrow-icon" />
          </div>

          <DoulaServices />

          <button className="schedule-button" onClick={handleContactClick} data-aos="fade-up">
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </button>

          <div id="about" className="section-about-me">
            <div className="photo-about-me" data-aos="fade-up">
              <img src={deusaGregaImg} alt="Raquel, Brazilian postpartum doula" className="home-image" loading="lazy" />
            </div>
            <div className="description-about-me">
              <div className="content-side-about-me">
                <b className="title-about-me" data-aos="slide-right">About Me</b>
                <p className="text-about-me" data-aos="fade-up">
                  I am a Brazilian postpartum doula who has been living in San Mateo for over 5 years. I have been a nanny for almost 10 years caring for toddlers, babies and school-aged children. I pride myself on being loving, warm, trustworthy, loyal, empathetic and communicative. Back home I have a bachelor’s degree in accounting and two MBAs in accounting and finance, but I have found myself once again working with newborns and babies here in the United States. It is wonderful to be with families at such a special time and to be able to treat each child as the individual person they are, with respect, warmth and integrity. I am fully vaccinated and do not smoke. I have my own reliable car. I am pet-friendly and completely stigma-free. I would be happy to share more information with your family over the phone or in an interview to further discuss my qualifications and provide my references.<br />
                  As a postpartum doula, I can bring a lot of love to your new family and try to ease the burden that new parents inevitably feel. What I love most in life is love loving people!
                </p>
                <button className="schedule-button" onClick={handleContactClick} data-aos="fade-up">
                  <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
                  Schedule a Free Consultation
                </button>
              </div>
            </div>
          </div>

          <Gallery />

          <Contact />

          <div className="recommendations-section" id="reviews" data-aos="fade-up">
            <h2 className="section-title">What My Clients Say</h2>
            <Slider {...settings}>
              {recommendations.map((rec, index) => (
                <div key={index} className="recommendation-card" data-aos="zoom-in">
                  <img src={rec.image} alt={`Photo of ${rec.name}`} className="client-image" loading="lazy" />
                  <h3 className="client-name">{rec.name}</h3>
                  <div className="client-rating">
                    {'★'.repeat(rec.rating)}
                    {'☆'.repeat(5 - rec.rating)}
                  </div>
                  <div className="date-location">
                    <span className="date">{rec.date}</span> |{' '}
                    <span className="location">{rec.location}</span>
                  </div>
                  <p className={`client-comment ${expanded[index] ? 'expanded' : 'collapsed'}`}>
                    {rec.comment}
                  </p>
                  {rec.comment.length > 100 && (
                    <button
                      className="read-more-button"
                      onClick={() => toggleExpand(index)}
                      aria-expanded={expanded[index]}
                    >
                      {expanded[index] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          <FaqAccordion faqs={faqs} />

          {showTopBtn && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              ↑
            </button>
          )}
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;