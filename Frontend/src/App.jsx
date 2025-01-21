import React from 'react';
import Header from './components/Header';
import Sponsors from './components/Sponsors';
import TryIt from './components/TryIt';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-center my-8">{'{JSON} Placeholder'}</h1>
        <p className="text-center text-lg mb-8">
          Free fake and reliable API for testing and prototyping.
          <br />
          Powered by <a href="#" className="text-blue-500 underline">JSON Server</a> + <a href="#" className="text-blue-500 underline">LowDB</a>.
        </p>
        <p className="text-center text-gray-500 mb-8">Serving ~3 billion requests each month.</p>
        <Sponsors />
        <TryIt />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
