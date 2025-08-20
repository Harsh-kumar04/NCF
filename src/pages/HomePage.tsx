import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Mission from "../components/home/Mission";
import Projects from "../components/home/Projects";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import PartnerCarousel from "../components/home/partner";
import Awards from "../components/home/Awards";
import VolunteersSlider from "../components/home/volunteers";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Noble Citizen Foundation - Empowering Communities";
  }, []);

  return (
    <div>
      <Hero />
      <Mission />
      <Awards />
      <Projects />
      <Statistics />
      <Testimonials />
      <div className="text-center max-w-3xl mx-auto ">
        <h2 className="mb-6">Our Partners</h2>
        <p className="text-m text-gray-600 ">
          Thanks to our partners and supporters, we're turning dreams into
          reality. Join us in shaping a brighter future!
        </p>
      </div>
      <PartnerCarousel />
      <VolunteersSlider />
    </div>
  );
};

export default HomePage;