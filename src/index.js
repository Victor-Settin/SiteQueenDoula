import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importação do AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicialização do AOS
AOS.init({
  duration: 1200, // Duração padrão das animações (em milissegundos)
  once: true, // Animação ocorre apenas uma vez (não reinicia ao rolar para cima)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
