import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import './App.css';

/**
 * The root component renders the navigation, page content and footer.  It is
 * wrapped in a LanguageProvider so that any component can access the current
 * language and translation function using the useTranslation and useLanguage
 * hooks.
 */
export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/durable" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}
