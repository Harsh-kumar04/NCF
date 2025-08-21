import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Mission from "../components/home/Mission";
import Projects from "../components/home/Projects";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import PartnerCarousel from "../components/home/partner";
import Awards from "../components/home/Awards";
import VolunteersSlider from "../components/home/volunteers";
import FeaturedPostsSection from "../components/home/FeaturedPosts";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Noble Citizen Foundation - Empowering Communities";
  }, []);

  return (
    <div>
      <Hero />
      <Mission />
      <Projects />
      <Statistics />
      <Awards />
      <FeaturedPostsSection />
      <Testimonials />
      <div className="text-center max-w-3xl mx-auto ">
        <h2 className="mb-2">Our Partners</h2>
        <p className="text-m text-gray-600 px-2 ">
          Thanks to our partners and supporters, we're turning dreams into
          reality. Join us in shaping a brighter future!
        </p>
      </div>
      <PartnerCarousel />
      <VolunteersSlider />
      <form>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_QtaybIYbfNUlrf"
          async
        >
          {" "}
        </script>{" "}
      </form>
    </div>
  );
};

export default HomePage;