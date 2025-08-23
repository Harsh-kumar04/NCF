import React from "react";
import { Link } from "react-router-dom";
import groupImg from "../../assets/home.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-hero-lg flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${groupImg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Simple commitment statement */}
          <div className="mb-6">
            <p className="text-white text-xl md:text-3xl lg:text-4xl font-bold">
              Committed to Impacting 5 Million Lives by 2030
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-white font-light  mb-4 leading-snug text-2xl md:text-3xl lg:text-4xl tracking-wide">
            A Noble Society That Is Empowered, <br />
            Healthy and Future Ready.
          </h1>

          {/* Attribution */}
          <p className="text-white/90 text-lg md:text-xl italic mb-8">
            - Noble Citizen Foundation
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/GreenNCR"
              className="bg-red-800 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              Green Delhi-NCR
            </Link>

            <Link
              to="/Mentorship"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Mentorship Program
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-white"
        >
          <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
