import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import PageWrapper from './Components/PageWrapper/PageWrapper';
import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';


function App() {
  return (
    <>
      {/* Fundo Animado */}
      <AnimatedBackground />

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
            </Routes>
          </PageWrapper>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
