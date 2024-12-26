import React from 'react';
import './Home.css';
import deusaGregaImg from '../../Images/deusa-grega.jpg'; // Corrigido o caminho da imagem
import cliente1 from '../../Images/img_rnt.jpg'; // Importe imagens fictícias
import cliente2 from '../../Images/img_rnt.jpg';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // Importa o ícone da seta
import { motion } from 'framer-motion'; // Importa o framer-motion
import Slider from 'react-slick'; // Importa o componente Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DoulaServices from '../../Components/DoulaServices/DoulaServices';
import { useMediaQuery } from 'react-responsive'; // Importa o hook para responsividade
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate

const Home = () => {
  const navigate = useNavigate(); // Usar o hook useNavigate

  // Função para redirecionar para a página de Contato
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
    }
    // Mais recomendações
  ];

  // Define a lógica para diferentes tamanhos de tela
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Autoplay desativado
    arrows: false, // Adiciona botões de navegação
    centerMode: true,
    centerPadding: isSmallScreen ? '60px' : '220px',
  };
  

  return (
    <div className="home-wrapper">
      <div className="content-box">
        <div className="overlay">
          {/* Animação do texto */}
          <motion.div
            className="message-home"
            initial={{ opacity: 0, y: -50 }} // Começa invisível e levemente acima
            animate={{ opacity: 1, y: 0 }} // Aparece com opacidade e se move para a posição original
            transition={{ duration: 2, ease: 'easeOut' }} // Duração e suavização
          >
          </motion.div>
        </div>
      </div>

      {/* Seta animada */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaArrowDown className="arrow-icon" />
      </motion.div>

      <div className="section-about-me">
        <div className="photo-about-me">
          <motion.img
            src={deusaGregaImg}
            alt="Deusa Grega"
            className="home-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </div>
        <div className="description-about-me">
  <div className="content-side-about-me">
    <motion.b
      className="title-about-me"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      About Me 2
    </motion.b>
    <br />
    <div className='text-about-me'>
    {`I am a Brazilian postpartum doula who has been living in San Mateo for over 5 years. I have been a nanny for almost 10 years caring for toddlers, babies and school-aged children. I pride myself on being loving, warm, trustworthy, loyal, empathetic and communicative. Back home I have a bachelor’s degree in accounting and two MBAs in accounting and finance, but I have found myself once again working with newborns and babies here in the United States. It is wonderful to be with families at such a special time and to be able to treat each child as the individual person they are, with respect, warmth and integrity. I am fully vaccinated and do not smoke. I have my own reliable car. I am pet-friendly and completely stigma-free. I would be happy to share more information with your family over the phone or in an interview to further discuss my qualifications and provide my references.`
      }
      </div>
  </div>
  <motion.button
    className="schedule-button"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1.8 }}
    onClick={handleContactClick} // Ação ao clicar
  >
    <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
    Schedule a Free Consultation
  </motion.button>
</div>

      </div>
      <DoulaServices></DoulaServices>
      {/* Secção de recomendações */}
      <div className="recommendations-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <Slider {...settings}>
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              {rec.image ? (
                <img src={rec.image} alt={rec.name} className="client-image" />
              ) : (
                <div className="client-image default-image">
                  <i className="fas fa-user"></i> {/* Ícone de usuário */}
                </div>
              )}
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
