import React, { useEffect, useState } from 'react';
import './Home.css';
import deusaGregaImg from '../../Images/deusa-grega.jpg'; // Corrigido o caminho da imagem
import cliente1 from '../../Images/img_rnt.jpg'; // Importe imagens fictícias
import cliente2 from '../../Images/img_rnt.jpg';
import cliente3 from '../../Images/profile_photo.jpg';
import cliente4 from '../../Images/img123.jpg';
import cliente5 from '../../Images/img111.jpg';
import cliente6 from '../../Images/img929.jpg';
import cliente7 from '../../Images/jul-profile.jpg';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // Importa o ícone da seta
import Slider from 'react-slick'; // Importa o componente Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoulaServices from '../../Components/DoulaServices/DoulaServices';
import { useMediaQuery } from 'react-responsive'; // Importa o hook para responsividade
// import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import FirstimgHome from '../../Images/foto-home1.jpg';
import AOS from 'aos'; // Importa a biblioteca AOS
import 'aos/dist/aos.css'; // Importa o CSS do AOS

const Home = () => {
  // const navigate = useNavigate(); // Usar o hook useNavigate

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duração da animação
      offset: 80, // Offset da animação
      once: false, // Animação ocorre apenas uma vez
    });
  }, []);



  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY; // Posição da seção
      const offsetAdjustment = 200; // Ajuste de 100px acima
      window.scrollTo({
        top: offsetTop - offsetAdjustment, // Rolagem ajustada
        behavior: 'smooth', // Rolagem suave
      });
    }
  };
  

  const recommendations = [
    {
      name: "Sarah",
      image: cliente1,
      rating: 5,
      date: "10/16/2022", // Data individual
      location: "San Bruno - California", // Local individual
      comment: "“When my first daughter was born I felt very alone because I didn't have any family around and Raquel helped me a lot! I'm very grateful for everything!”"
    },
    {
      name: "Nathalia",
      image: cliente3,
      rating: 5,
      date: "10/26/2023", // Data individual
      location: "Daly City - California", // Local individual
      comment: "“I had my baby in November 2023 and I don't know what my postpartum period would have been like without Raquel's help. She was essential for my recovery and the baby's well-being. Postpartum was the most difficult time of my life and it was great to have someone so experienced and respectful helping me recover and take care of my baby. She taught me how to bathe my son, how to keep him safe, and took care of him so I could rest. Raquel, thank you so much for everything!”"
    },
    {
      name: "Sarah",
      image: cliente2,
      rating: 5,
      date: "09/02/2024", // Data individual
      location: "San Mateo - California", // Local individual
      comment: "“Raquel had helped us a lot with my first baby and we had no doubts about being with her when our second princess arrived. We highly recommend her!”"
    },
    {
      name: "Revşan",
      image: cliente4,
      rating: 5,
      date: "12/26/2024", // Data individual
      location: "San Mateo - California", // Local individual
      comment: "“ I came to US already pregnant with no English. Raquel was very supportive and patient with me and my family. It was very important having her around. Thank you ”"
    }
    ,
    {
      name: "Ana Quinonez",
      image: cliente5,
      rating: 5,
      date: "12/26/2024", // Data individual
      location: "San Mateo - California", // Local individual
      comment: "“ I have known Raquel Martins Rodrigues for over 5 years. We were coworkers working for the same family in Hillsborough California. This family had 3 children and 3 Nannies. Raquel is very knowledgeable about child development and has taken many classes. She has a lot of experience working with new born babies since she has her postpartum Doula certificate. She also has experience working with toddlers and children of all ages. She's very loving, kind, patient, and caring, warm, compassionate, trustworthy and respectful. She's also a great team player, helpful, gets along with everyone. She is very resourceful and has great problem solving skills. In addition, of being an exceptional Doula and a fantastic Nanny she is the best house cleaner I have ever met. She would transform a very  disorganized and dirty house into a spotless and neat place. She has wonderful organization skills and works in house projects. Raquel goes above and beyond with all the families she works with. I would highly recommend her. ”"
    },
    {
      name: "Aaron",
      image: cliente6,
      rating: 5,
      date: "03/17/2024", // Data individual
      location: "RedWood City- California", // Local individual
      comment: "“ I am thrilled to share my experience with Raquel, our Nanny and Doula. Raquel‘s gentle and loving approach, made quite the difference. It was evident that my girls adored Raquel; they would light up the room whenever they saw her. Raquel was incredibly attentive to our girls, providing the care and support we needed during those early months. Her expertise and sleep training was particularly invaluable. Thanks to her guidance. We were able to establish a sleep routine that had our twin girls sleeping 11 hours a night by just four months of age. That’s not only improved their well-being, but also allowed us to regain some much-needed rest. Additionally, Raquel maintain excellent communication with me, keeping me informed and involved. I highly recommend Raquel. Her warmth experience and dedication have made a lasting positive impact on our family. ”"
    },{
      name: "Julie Barton",
      image: cliente7,
      rating: 5,
      date: "04/03/2025", // Data individual
      location: "South San Jose - California", // Local individual
      comment: "“ I can't say enough good things about Raquel- if you're considering a nighttime doula, you can't go wrong with inviting her into your home and having her take care of your little one. She supported me with my 2-month-old twin boys, helping to get their nighttimes more regulated and their sleep better - a true lifesaver!. ”"
    }
    // Mais recomendações
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

  return (
    <>
       {/* Seção inicial */}
       {/* <div class="section-welcome">
        <div class="section-title home">
        As a postpartum doula, I can bring a lot of love to your new family and try to ease the burden that new parents inevitably feel. What I love most in life is love loving people!
        </div>
       </div> */}
      <div className="content-box" >
        <img src={FirstimgHome} alt="FirstimgHome" />
      </div>
      <PageWrapper>
      <div className="home-wrapper">

        {/* Seta animada */}
        <div className="scroll-indicator" data-aos="fade-up">
          <FaArrowDown className="arrow-icon" />
        </div>

        {/* Serviços */}
        <div style={{ width: "100%" }} >
          <DoulaServices  />
        </div>


        <button
                className="schedule-button"
                onClick={handleContactClick}
                data-aos="fade-up"
                style={{ marginTop: "10px" }}
              >
                <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
                Schedule a Free Consultation
              </button>

        {/* About Me */}
        <div id="about" className="section-about-me" >
          <div className="photo-about-me" data-aos="fade-up"  data-aos-duration="1200">
            <img src={deusaGregaImg} alt="Deusa Grega" className="home-image" />
          </div>
          <div className="description-about-me">
            <div className="content-side-about-me">
              <b className="title-about-me" data-aos="slide-right" data-aos-duration="1300" data-aos-delay="0">About Me</b>
              <p className="text-about-me" data-aos="fade-up" data-aos-duration="1500"
          data-aos-delay="0" >
                I am a Brazilian postpartum doula who has been living in San Mateo for over 5 years.
                I have been a nanny for almost 10 years caring for toddlers, babies and school-aged children. I pride myself on being loving, warm, trustworthy, loyal, empathetic and communicative.
                Back home I have a bachelor’s degree in accounting and two MBAs in accounting and finance, but I have found myself once again working with newborns and babies here in the United States.
                It is wonderful to be with families at such a special time and to be able to treat each child as the individual person they are, with respect, warmth and integrity.
                I am fully vaccinated and do not smoke.
                I have my own reliable car.
                I am pet-friendly and completely stigma-free.
                I would be happy to share more information with your family over the phone or in an interview to further discuss my qualifications and provide my references.<br></br>
                As a postpartum doula, I can bring a lot of love to your new family and try to ease the burden that new parents inevitably feel. What I love most in life is love loving people!
              </p>
              <button
                className="schedule-button"
                onClick={handleContactClick}
                data-aos="fade-up"
              >
                <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Galeria */}
        <div id="gallery" style={{ width: "100%" }} data-aos="fade-up">
          <Gallery />
        </div>

        <button
          className="schedule-button"
          onClick={handleContactClick}
          data-aos="fade-up"
          style={{ marginTop: "0px" }}
        >
          <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
          Schedule a Free Consultation
        </button>

        {/* Contato */}
        <div id="contact" style={{ width: "100%" }} data-aos="fade-up">
          <Contact />
        </div>

        {/* Recomendações */}
        <div className="recommendations-section" id="reviews" data-aos="fade-up">
          <h2 className="section-title">What Our Clients Say</h2>
          <Slider {...settings}>
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-card" data-aos="zoom-in">
                <img src={rec.image} alt={rec.name} className="client-image" />
                <h3 className="client-name">{rec.name}</h3>
                <div className="client-rating">
                  {"★".repeat(rec.rating)}{"☆".repeat(5 - rec.rating)}
                </div>
                <div className="date-location">
                  <span className="date">{rec.date}</span> |{" "}
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
                    {expanded[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </PageWrapper>
    </>);
};

export default Home;
