import React, { useState, useEffect } from "react";
import { Gift, TrendingUp, Users } from "lucide-react";

type DonationFormProps = {
  razorpayUrl: string;
};

const Donation: React.FC<DonationFormProps> = ({ razorpayUrl }) => {
  const images = [
    "/projects/Future Leaders/1.webp",
    "/projects/Future Leaders/2.webp",
    "/projects/Future Leaders/3.webp",
    "/projects/Future Leaders/4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="donate" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="mb-6">Make a Donation</h2>
          <p className="text-lg text-gray-600">
            Your generous contribution supports our work and directly impacts
            communities in need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Payment */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Your Donation Helps
            </h3>
            <iframe
              src={razorpayUrl}
              title="Donation Payment"
              className="w-full border rounded-lg 
               min-h-[500px] sm:min-h-[700px] lg:min-h-[900px]"
              style={{ overflow: "hidden" }}
              scrolling="no"
            ></iframe>
          </div>

          {/* Right side - Your Impact */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-6">
              Your Donation Impact
            </h3>

            {/* Image Slider */}
            <div className="relative w-full max-w-70 mx-auto mb-9">
              <img
                src={images[currentIndex]}
                alt={`Impact ${currentIndex + 1}`}
                className="w-full h-55 object-cover rounded-lg"
              />
            </div>

            {/* Impact Items */}
            <div className="space-y-6 flex-1">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Gift className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Education</h4>

                  <p className="text-gray-600">
                    Your donation can open the doors of learning for a child and
                    brighten their future.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Gift className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Opportunity</h4>

                  <p className="text-gray-600">
                    Your support can give someone the chance to learn, grow, and
                    dream again.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Gift className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Empowerment</h4>

                  <p className="text-gray-600">
                    Your help can give people the tools and skills to build a
                    better life.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Gift className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Transformation</h4>

                  <p className="text-gray-600">
                    Your kindness can change lives and create hope for
                    generations to come.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="border-t border-gray-200 mt-8 pt-8">
              <h4 className="text-lg font-medium mb-4">Other Ways to Give</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Legacy Giving</h5>
                    <p className="text-sm text-gray-600">
                      Include Noble Citizen Foundation in your estate planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Corporate Matching</h5>
                    <p className="text-sm text-gray-600">
                      Many employers match charitable contributions made by
                      their employees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <Gift className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">In-Kind Donations</h5>
                    <p className="text-sm text-gray-600">
                      Donate goods or services that support our programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
