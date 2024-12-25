import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import PageWrapper from './Components/PageWrapper/PageWrapper';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Success from './Pages/Success/Success';


function App() {
  return (
    <>
      {/* Conteúdo Principal */}
      <Router>
        <div className="App">
          <Header />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </PageWrapper>
          {/* Rodapé com visibilidade condicional */}
        </div>
        <Footer />
      </Router>

      {/* Toast container para notificações */}
      <Toaster position="top-center" /> 
    </>
  );
}


export default App;
