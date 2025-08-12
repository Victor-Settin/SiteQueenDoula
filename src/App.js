import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';

import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Success from './Pages/Success/Success';

// Blog index
import BlogIndex from './Pages/Blog/BlogIndex';

// Blog posts
import UltimateBabyRegistry from './Pages/Blog/UltimateBabyRegistry';
import IntroducingFoodsAndAllergies from './Pages/Blog/IntroducingFoodsAndAllergies';
import SleepTraining from './Pages/Blog/SleepTraining';
import TeethingTroubles from './Pages/Blog/TeethingTroubles';
import ClassicalMusicBaby from './Pages/Blog/ClassicalMusicBaby';
import PerfectLatch from './Pages/Blog/PerfectLatch';

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

            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/ultimate-baby-registry" element={<UltimateBabyRegistry />} />
            <Route path="/blog/introducing-foods-preventing-allergies" element={<IntroducingFoodsAndAllergies />} />
            <Route path="/blog/sleep-training" element={<SleepTraining />} />
            <Route path="/blog/teething-troubles" element={<TeethingTroubles />} />
            <Route path="/blog/classical-music-baby" element={<ClassicalMusicBaby />} />
            <Route path="/blog/perfect-latch" element={<PerfectLatch />} />
          </Routes>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
