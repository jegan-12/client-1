import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlassNavbar from './components/GlassNavbar';
import CurtainTransition from './components/CurtainTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#0B0F19] text-[#F8FAFC] overflow-hidden selection:bg-[#8B5CF6] selection:text-white font-jakarta">
        {/* Floating Glass Navbar */}
        <GlassNavbar />

        {/* Staggered 6-Column Curtain Transition Wrapper */}
        <CurtainTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </CurtainTransition>
      </div>
    </Router>
  );
}
