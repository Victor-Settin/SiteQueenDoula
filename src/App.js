import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from 'react-helmet-async'; // Para SEO

import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Success from './Pages/Success/Success';

// Importando o índice do blog (listagem de artigos)
import BlogIndex from './Pages/Blog/BlogIndex';

// Importando os artigos do blog
import UltimateBabyRegistry from './Pages/Blog/UltimateBabyRegistry';
import IntroducingFoodsAndAllergies from './Pages/Blog/IntroducingFoodsAndAllergies';
import SleepTraining from './Pages/Blog/SleepTraining';

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

            {/* Blog routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/ultimate-baby-registry" element={<UltimateBabyRegistry />} />
            <Route path="/blog/introducing-foods-preventing-allergies" element={<IntroducingFoodsAndAllergies />} />
            <Route path="/blog/sleep-training" element={<SleepTraining />} />
          </Routes>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
