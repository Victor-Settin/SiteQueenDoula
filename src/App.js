// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./ScrollToTop";

// Layout fixo
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Páginas principais
import Home from "./Pages/Home/Home";
import BlogIndex from "./Pages/Blog/BlogIndex";

// Artigos do Blog
import UltimateBabyRegistry from "./Pages/Blog/UltimateBabyRegistry";
import IntroducingFoodsAndAllergies from "./Pages/Blog/IntroducingFoodsAndAllergies";
import SleepTraining from "./Pages/Blog/SleepTraining";
import TeethingTroubles from "./Pages/Blog/TeethingTroubles";
import ClassicalMusicBaby from "./Pages/Blog/ClassicalMusicBaby";
import PerfectLatch from "./Pages/Blog/PerfectLatch";
import KegelExercises from "./Pages/Blog/KegelExercises";
import LowPressureExercises from "./Pages/Blog/LowPressureExercises";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        {/* 🔹 Header fixo */}
        <Header />

        <main style={{ minHeight: "80vh" }}>
          <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Home />} />
            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            {/* Artigos do blog */}
            <Route path="/blog/ultimate-baby-registry" element={<UltimateBabyRegistry />} />
            <Route path="/blog/introducing-foods-preventing-allergies" element={<IntroducingFoodsAndAllergies />} />
            <Route path="/blog/sleep-training" element={<SleepTraining />} />
            <Route path="/blog/teething-troubles" element={<TeethingTroubles />} />
            <Route path="/blog/classical-music-baby" element={<ClassicalMusicBaby />} />
            <Route path="/blog/perfect-latch" element={<PerfectLatch />} />
            <Route path="/blog/kegel-exercises" element={<KegelExercises />} />
            <Route path="/blog/low-pressure-exercises" element={<LowPressureExercises />} />
            {/* 404 */}
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </main>

        {/* 🔹 Footer fixo */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
