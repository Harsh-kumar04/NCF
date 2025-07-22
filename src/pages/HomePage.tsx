import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Projects from '../components/home/Projects';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/common/Newsletter';

const HomePage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Noble Citizen Foundation - Empowering Communities';
  }, []);

  return (
    <div>
      <Hero />
      <Mission />
      <Projects />
      <Statistics />
      <Testimonials />
      
      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates on our projects, events, and ways to get involved.
            </p>
            <div className="max-w-md mx-auto">
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;