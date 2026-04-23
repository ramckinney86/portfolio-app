import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Global Components
import Header from './components/Header';
import Footer from './components/Footer';
import TableOfContents from './components/TableOfContents';

// Pages
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col relative">
      {/* TableOfContents and Header stay fixed/sticky across all routes */}
      <TableOfContents />
      <Header />
      
      <main className="grow">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Project Detail Pages */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;