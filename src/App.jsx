import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlassNavbar from './components/GlassNavbar';
import CurtainTransition from './components/CurtainTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function MobileSinglePage() {
  const location = useLocation();

  useEffect(() => {
    // Auto scroll to section if URL path is visited on mobile
    if (location.pathname === '/about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-[#E4E2E3] text-[#161616] flex flex-col font-jakarta overflow-x-hidden">
      <section id="home" className="w-full">
        <HomePage />
      </section>
      <section id="about" className="w-full pt-0 pb-2">
        <AboutPage />
      </section>
      <section id="projects" className="w-full pt-0 pb-2">
        <ProjectsPage />
      </section>
      <section id="contact" className="w-full pt-0 pb-2">
        <ContactPage />
      </section>

      {/* Website Footer with Clickable Social Icons (GitHub, LinkedIn, Mail) */}
      <Footer />
    </div>
  );
}

function MainAppContent() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobileSinglePage />;
  }

  return (
    <CurtainTransition>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </CurtainTransition>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#0B0F19] text-[#F8FAFC] overflow-x-hidden selection:bg-[#8B5CF6] selection:text-white font-jakarta">
        {/* Floating Glass Navbar (Renders Menu Button on Mobile, Glass Pill on Desktop) */}
        <GlassNavbar />

        {/* Main Content (Continuous Single Page on Mobile, Multi-Page Curtain Routes on Desktop) */}
        <MainAppContent />
      </div>
    </Router>
  );
}
