import React, { useEffect, useState } from "react";
import { Gift, TrendingUp, Users } from "lucide-react";

const DonationImpact: React.FC = () => {
  const images = [
    "/projects/Future Leaders/1.webp",
    "/projects/Future Leaders/2.webp",
    "/projects/Future Leaders/3.webp",
    "/projects/Future Leaders/4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="donation-impact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-6xl mx-auto m">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-6">Your Donation Impact</h2>
          <p className="text-lg text-gray-600">
            Every contribution creates ripples of change—nurturing education,
            unlocking opportunities, and empowering lives.
          </p>
        </div>
          {/* Image Slider */}
          <div className="relative w-full max-w-xl mx-auto mb-10">
            <img
              src={images[currentIndex]}
              alt={`Impact ${currentIndex + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow"
            />
          </div>

          {/* Impact Items */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Education",
                text: "Your donation can open the doors of learning for a child and brighten their future.",
              },
              {
                title: "Opportunity",
                text: "Your support can give someone the chance to learn, grow, and dream again.",
              },
              {
                title: "Empowerment",
                text: "Your help can give people the tools and skills to build a better life.",
              },
              {
                title: "Transformation",
                text: "Your kindness can change lives and create hope for generations to come.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Gift className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider + Other Ways */}
          <div className="border-t border-gray-200 mt-10 pt-8">
            <h4 className="text-lg font-semibold mb-6 text-center">
              Other Ways to Give
            </h4>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-8 w-8 text-gray-600 mb-3" />
                <h5 className="font-medium mb-1">Legacy Giving</h5>
                <p className="text-sm text-gray-600">
                  Include Noble Citizen Foundation in your estate planning.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-gray-600 mb-3" />
                <h5 className="font-medium mb-1">Corporate Matching</h5>
                <p className="text-sm text-gray-600">
                  Many employers match charitable contributions made by
                  employees.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Gift className="h-8 w-8 text-gray-600 mb-3" />
                <h5 className="font-medium mb-1">In-Kind Donations</h5>
                <p className="text-sm text-gray-600">
                  Donate goods or services that support our programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
