import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import PageWrapper from './Components/PageWrapper/PageWrapper';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Success from './Pages/Success/Success';
import ReviewPage from './Pages/ReviewPage/ReviewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Ajuste para garantir altura total da página */}
        <div className="content-wrapper">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/success" element={<Success />} />
              <Route path="/leave-review" element={<ReviewPage />} />  {/* Certifique-se de que a rota está correta */}
            </Routes>
          </PageWrapper>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
