import React from 'react';
import './Home.css';
import deusaGregaImg from '../../Images/deusa-grega.jpg'; // Corrigido o caminho da imagem
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // Importa o ícone da seta

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="content-box">
        <div className="overlay">
          <div className="message-home">Bundles of Joy Doula Services<br></br>
Bay Area Birth Doula</div>
          <button className="schedule-button">
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </button>
        </div>
      </div>
      
      {/* Seta animada */}
      <div className="scroll-indicator">
        <FaArrowDown className="arrow-icon" />
      </div>
      
      <div className="section-about-me">
        <div className="photo-about-me">
          <img src={deusaGregaImg} alt="Deusa Grega" className="home-image" />
        </div>
        <div className="description-about-me">
          <div className="content-side-about-me">
            <b className="title-about-me">About Bundles of Joy</b><br />
            At Bundles of Joy, Kim Knapp, a San Francisco-based birth doula, provides compassionate, evidence-based support for families through pregnancy, birth, and postpartum. With a love for childbirth woven into her DNA, Kim brings a wealth of experience, empathy, and advocacy to every birthing journey.

            As a proud member of the LGBTQ+ community, Kim is committed to creating safe, inclusive spaces for all families. Whether you’re expecting your first child or adding to your growing family, Kim’s warm presence and treasure chest of tools ensure you’ll feel prepared for an amazing birth experience.
          </div>
          <button className="schedule-button">
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
