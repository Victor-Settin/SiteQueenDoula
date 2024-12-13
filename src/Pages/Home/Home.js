import React from 'react';
import './Home.css';
import deusaGregaImg from '../../Images/deusa-grega.jpg'; // Corrigido o caminho da imagem
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // Importa o ícone da seta
import { motion } from 'framer-motion'; // Importa o framer-motion

const Home = () => {
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
            Bundles of Joy Doula Services
            <br />
            Bay Area Birth Doula
          </motion.div>

          {/* Animação do botão */}
          <motion.button
            className="schedule-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </motion.button>
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
              About Bundles of Joy
            </motion.b>
            <br />
            At Bundles of Joy, Kim Knapp, a San Francisco-based birth doula, provides compassionate, evidence-based support for families through pregnancy, birth, and postpartum. With a love for childbirth woven into her DNA, Kim brings a wealth of experience, empathy, and advocacy to every birthing journey.

            As a proud member of the LGBTQ+ community, Kim is committed to creating safe, inclusive spaces for all families. Whether you’re expecting your first child or adding to your growing family, Kim’s warm presence and treasure chest of tools ensure you’ll feel prepared for an amazing birth experience.
          </div>
          <motion.button
            className="schedule-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.8 }}
          >
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
