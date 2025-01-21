import React from 'react';
import mockend from "../assets/mockend.svg";
import zuplo from "../assets/zuplo.png";


const Sponsors = () => (
  <section className="text-center my-12">
    <h2 className="text-2xl font-semibold mb-4">Sponsors</h2>
    <div className="flex justify-center items-center gap-8">
      <img src={mockend} alt="Mockend" className="h-16" />
      <img src={zuplo} alt="Zuplo" className="h-16" />
    </div>
    <p className="mt-4">Your company logo here</p>
  </section>
);

export default Sponsors;
