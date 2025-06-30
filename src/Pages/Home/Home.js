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
import cliente2 from '../../assets/Images/no-profile.jpg';
import cliente3 from '../../assets/Images/profile_photo.jpg';
import cliente4 from '../../assets/Images/img123.jpg';
import cliente5 from '../../assets/Images/img111.jpg';
import cliente6 from '../../assets/Images/img929.jpg';
import noprofile from '../../assets/Images/no-profile.jpg';
import julprofile from '../../assets/Images/jul-profile.jpg';
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
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const nearBottom = scrollPosition + windowHeight >= documentHeight - 500;

      setShowTopBtn(nearBottom);
    };

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
      name: 'Julie',
      image: julprofile,
      rating: 5,
      date: '04/03/2025',
      location: 'South San Jose - California',
      comment: '“I can’t say enough good things about Raquel - if you’re considering a nighttime doula, you can’t go wrong with inviting her into your home and having her take care of your little one. She supported me with my 2-month-old twin boys, helping to get their nighttimes more regulated and their sleep better - a true lifesaver!”',
    },
    {
      name: 'Nathalia',
      image: cliente3,
      rating: 5,
      date: '10/26/2023', 
      location: 'Daly City - California',
      comment: '“I had my baby in November 2023 and I don´t know what my postpartum period would have been like without Raquel´s help. She was essential for my recovery and the baby´s well-being. Postpartum was the most difficult time of my life and it was great to have someone so experienced and respectful helping me recover and take care of my baby. She taught me how to bathe my son, how to keep him safe, and took care of him so I could rest. Raquel, thank you so much for everything!”',
    },
    {
      name: 'Sarah',
      image: cliente2,
      rating: 5,
      date: '09/02/2024',
      location: 'San Bruno - California',
      comment: '“Raquel had helped us a lot with my first baby and we had no doubts about being with her when our second princess arrived. We highly recommend her!”',
    },
    {
      name: 'Ana Quinonez',
      image: cliente5,
      rating: 5,
      date: '12/26/2024',
      location: 'Burlingame - California',
      comment: '“I have known Raquel Martins Rodrigues for over 5 years. We were coworkers working for the same family in Hillsborough California. This family had 3 children and 3 Nannies. Raquel is very knowledgeable about child development and has taken many classes. She has a lot of experience working with new born babies since she has her postpartum Doula certificate. She also has experience working with toddlers and children of all ages. She´s very loving, kind, patient, and caring, warm, compassionate, trustworthy and respectful.  She´s also a great team player, helpful, gets along with everyone. She is very resourceful and has great problem solving skills. In addition, of being an exceptional Doula and a fantastic Nanny she is the best house cleaner I have ever met. She would transform a very  disorganized and dirty house into a spotless and neat place. She has wonderful organization skills and works in house projects. Raquel goes above and beyond with all the families she works with. I would highly recommend her.”',
    },
    {
      name: 'Aaron',
      image: cliente6,
      rating: 5,
      date: '03/17/2024',
      location: 'Redwood City - California',
      comment: '“I am thrilled to share my experience with Raquel, our Nanny and Doula. Raquel‘s gentle and loving approach, made quite the difference. It was evident that my girls adored Raquel; they would light up the room whenever they saw her. Raquel was incredibly attentive to our girls, providing the care and support we needed during those early months. Her expertise and sleep training was particularly invaluable. Thanks to her guidance. We were able to establish a sleep routine that had our twin girls sleeping 11 hours a night by just four months of age. That’s not only improved their well-being, but also allowed us to regain some much-needed rest. Additionally, Raquel maintain excellent communication with me, keeping me informed and involved. I highly recommend Raquel. Her warmth experience and dedication have made a lasting positive impact on our family.”',
    },
    {
      name: 'Revşan',
      image: cliente4,
      rating: 5,
      date: '12/26/2024',
      location: 'Burlingame - California',
      comment: '“I came to US already pregnant with no English. Raquel was very supportive and patient with me and my family It was very important having her around. Thank you!”',
    },
    {
      name: 'Sarah',
      image: noprofile,
      rating: 5,
      date: '10/16/2022',
      location: 'San Bruno - California',
      comment: '“When my first daughter was born I felt very alone because I didn’t have any family around and Raquel helped me a lot! I’m very grateful for everything!”',
    },
    {
      name: "Hind B.",
      image: noprofile,
      rating: 5,
      date: "06/23/2025", // Data individual
      location: "Redwood City - California", // Local individual
      comment: "“ I highly recommend Raquel. I delivered few weeks earlier than expected and she made herself available to help us when we got home . It was great having her, she took a great care of my newborn , which allowed me to sleep and recover . In addition she helped with the laundry and tidying up the kitchen. We woke up to a content baby and an organized living area. ”"
    }
    ,
    {
      name: "Rena and Jake",
      image: noprofile,
      rating: 5,
      date: "06/23/2025", // Data individual
      location: "San Francisco - California", // Local individual
      comment: "“ My second baby was my 'rainbow baby,' so I've always been afraid to sleep train her and somewhat over protective. Raquel arrived and made me feel so calm. From the minute I met her I trusted her with my baby. Her calm demeanor and her clear expertise made me feel at ease. In just 2 weeks my baby was sleep trained without any issues. The baby is happy and thriving and the whole family is doing really well. Additionally Raquel is like a therapist and helps the family through stress. 10/10 recommend! ”"
    }
    ,
    {
      name: "Julie B",
      image: julprofile,
      rating: 5,
      date: "06/23/2025", // Data individual
      location: "South San Jose - California", // Local individual
      comment: "“ Raquel is fantastic and I can't recommend her enough. She was so helpful with my baby twins, not just taking good care of them overnight but also helping me as a first-time mom know good scheduling practices and other tips. ”"
    }
     ,
    {
      name: "Savannah",
      image: noprofile,
      rating: 5,
      date: "06/14/2025", // Data individual
      location: "San Francisco - California", // Local individual
      comment: "“ Hi Raquel,I just wanted to say what a true joy it was working with you. I've had the chance to work with a lot of sleep trainers thanks to my eclectic nanny experience, and you were hands down the most immediately effective and also the most kindhearted.You brought such a calming energy into the home and made everything feel so natural and warm. It was an honor to be part of this sleep journey with you. Wishing you all the best and hoping our paths cross again soon. ”"
    }
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
        <title>Purple Turtle Doula & Nanny Services | Daly City 94014, CA</title>
        <meta name="description" content="Postpartum doula and nanny services in Daly City 94014, CA. Loving, trustworthy care for your family." />
        <meta name="keywords" content="postpartum doula, nanny services, Daly City 94014, newborn care" />
      </Helmet>

      <div className="content-box">
        <img src={FirstimgHome} alt="Purple Turtle Services" loading="lazy" />
      </div>

      <PageWrapper>
        <div className="home-wrapper">
          <div className="scroll-indicator" data-aos="fade-up">
            <FaArrowDown className="arrow-icon" />
          </div>

          <div id="about" className="section-about-me">
            <div className="photo-about-me" data-aos="fade-up">
              <img src={deusaGregaImg} alt="Raquel, Brazilian postpartum doula" className="home-image" loading="lazy" />
            </div>
            <div className="description-about-me">
              <div className="content-side-about-me">
                <b className="title-about-me" data-aos="slide-right">About Me</b>
                <p className="text-about-me" data-aos="fade-up">
                  I am a Brazilian postpartum doula who has been living in Bay Area for over 5 years. I have been a nanny for almost 10 years caring for toddlers, babies and school-aged children. I pride myself on being loving, warm, trustworthy, loyal, empathetic and communicative. Back home I have a bachelor’s degree in accounting and two MBAs in accounting and finance, but I have found myself once again working with newborns and babies here in the United States. It is wonderful to be with families at such a special time and to be able to treat each child as the individual person they are, with respect, warmth and integrity. I am fully vaccinated and do not smoke. I have my own reliable car. I am pet-friendly and completely stigma-free. I would be happy to share more information with your family over the phone or in an interview to further discuss my qualifications and provide my references.<br />
                  As a postpartum doula, I can bring a lot of love to your new family and try to ease the burden that new parents inevitably feel. What I love most in life is love loving people!
                </p>
                <button className="schedule-button" onClick={handleContactClick} data-aos="fade-up">
                  <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
                  Schedule a Free Consultation
                </button>
              </div>
            </div>
          </div>

          <DoulaServices />

          <button className="schedule-button" onClick={handleContactClick} data-aos="fade-up">
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </button>

          {/* Galeria */}
          <Gallery />

          <Contact />

          <div className="recommendations-section" id="reviews" data-aos="fade-up">
            <h2 className="section-title">What My Clients Say</h2>
            <Slider {...settings}>
              {recommendations.map((rec, index) => (
                <div key={index} className="recommendation-card" data-aos="zoom-in">
                  <img src={rec.image} alt={`${rec.name}`} className="client-image" loading="lazy" />
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