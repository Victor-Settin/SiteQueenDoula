import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async'; // Adicionado para SEO
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Success from './Pages/Success/Success';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;