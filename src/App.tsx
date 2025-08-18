import React from 'react';
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import OfferCard from './components/OfferCard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProblemSolution />
      <Benefits />
      <OfferCard />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;