import React, { useEffect } from 'react';
import './Home.css';
import deusaGregaImg from '../../Images/deusa-grega.jpg'; // Corrigido o caminho da imagem
import cliente1 from '../../Images/img_rnt.jpg'; // Importe imagens fictícias
import cliente2 from '../../Images/img_rnt.jpg';
import cliente3 from '../../Images/profile_photo.jpg';
import cliente4 from '../../Images/img123.jpg';
import cliente5 from '../../Images/img111.jpg';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // Importa o ícone da seta
import Slider from 'react-slick'; // Importa o componente Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DoulaServices from '../../Components/DoulaServices/DoulaServices';
import { useMediaQuery } from 'react-responsive'; // Importa o hook para responsividade
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import FirstimgHome from '../../Images/foto-home1.jpg';
import AOS from 'aos'; // Importa a biblioteca AOS
import 'aos/dist/aos.css'; // Importa o CSS do AOS

const Home = () => {
  const navigate = useNavigate(); // Usar o hook useNavigate

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duração da animação
      offset: 100, // Offset da animação
      once: false, // Animação ocorre apenas uma vez
    });
  }, []);

  const handleContactClick = () => {
    navigate('/contact'); // Redireciona para a página /contact
  };

  const recommendations = [
    {
      name: "Renata",
      image: cliente1,
      rating: 5,
      date: "10/16/2022", // Data individual
      location: "San Bruno - California", // Local individual
      comment: "“When my first daughter was born I felt very alone because I didn't have any family around and Raquel helped me a lot! I'm very grateful for everything!”"
    },
    {
      name: "Renata",
      image: cliente2,
      rating: 5,
      date: "09/02/2024", // Data individual
      location: "San Mateo - California", // Local individual
      comment: "“Raquel had helped us a lot with my first baby and we had no doubts about being with her when our second princess arrived. We highly recommend her!”"
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
    }
    // Mais recomendações
  ];

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
    <div className="home-wrapper">
      {/* Seção inicial */}
      <div className="content-box" data-aos="fade-up">
        <img src={FirstimgHome} alt="FirstimgHome" />
      </div>

      {/* Seta animada */}
      <div className="scroll-indicator" data-aos="fade-down">
        <FaArrowDown className="arrow-icon" />
      </div>

      {/* Serviços */}
      <div style={{ width: "100%" }} data-aos="fade-right">
        <DoulaServices />
      </div>

      {/* About Me */}
      <div id="about" className="section-about-me" data-aos="fade-left">
        <div className="photo-about-me" data-aos="zoom-in">
          <img src={deusaGregaImg} alt="Deusa Grega" className="home-image" />
        </div>
        <div className="description-about-me">
          <div className="content-side-about-me">
            <b className="title-about-me">About Me</b>
            <p className="text-about-me">
            I am a Brazilian postpartum doula who has been living in San Mateo for over 5 years.
I have been a nanny for almost 10 years caring for toddlers, babies and school-aged children. I pride myself on being loving, warm, trustworthy, loyal, empathetic and communicative.
Back home I have a bachelor’s degree in accounting and two MBAs in accounting and finance, but I have found myself once again working with newborns and babies here in the United States.
It is wonderful to be with families at such a special time and to be able to treat each child as the individual person they are, with respect, warmth and integrity.
I am fully vaccinated and do not smoke.
I have my own reliable car.
I am pet-friendly and completely stigma-free.
I would be happy to share more information with your family over the phone or in an interview to further discuss my qualifications and provide my references.
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
      <div id="gallery" style={{ width: "100%" }} data-aos="zoom-out">
        <Gallery />
      </div>

      {/* Contato */}
      <div id="contact" style={{ width: "100%" }} data-aos="fade-up">
        <Contact />
      </div>

      {/* Recomendações */}
      <div className="recommendations-section" data-aos="fade-up">
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
              <p className="client-comment">{rec.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
