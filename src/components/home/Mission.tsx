import React from "react";

import {
  Target,
  BookOpen,
  Users,
  Heart,
  Globe,
  Shield,
  Zap,
  HandHeart,
} from "lucide-react";

const Mission: React.FC = () => {
  const focusAreas = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary-600" />,
      title: "Education",
      description:
        "Providing quality education and learning opportunities to empower communities.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Youth Development",
      description:
        "Nurturing young minds and developing future leaders through comprehensive programs.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary-600" />,
      title: "Environment",
      description:
        "Promoting environmental sustainability and conservation for a greener future.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary-600" />,
      title: "Livelihood Enhancement",
      description:
        "Creating sustainable income opportunities and economic empowerment.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary-600" />,
      title: "Health",
      description:
        "Ensuring access to healthcare and promoting women's health and wellness.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-600" />,
      title: "Safe Cyber World",
      description:
        "Creating awareness and safety measures for digital literacy and cyber security.",
    },
    {
      icon: <HandHeart className="h-10 w-10 text-primary-600" />,
      title: "Global Volunteerism",
      description:
        "Promoting volunteer engagement and community service worldwide.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary-600" />,
      title: "Disaster Relief",
      description:
        "Providing immediate assistance and long-term recovery support during crises.",
    },
  ];

  return (
    <section className="section bg-white py-0">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-6">Our Focus Areas</h2>
          <p className="text-lg text-gray-600">
            The Noble Citizen Foundation is steadfast in its mission to create a
            society that is empowered, healthy, and future-ready. We focus on
            pivotal areas including education, youth development, environment,
            livelihood enhancement, women’s health, creating a safe cyber world,
            promoting global volunteerism, and offering disaster relief. Our
            comprehensive approach addresses critical social issues, fostering
            personal and community growth. Committed to impacting 5 million
            lives by 2030, we strive to make a lasting, positive difference in
            the world, ensuring that every individual has the opportunity to
            thrive in a resilient and sustainable community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-all duration-300 hover:bg-primary-50 group"
            >
              <div className="mb-4 rounded-full bg-white p-4 shadow-sm group-hover:shadow-md transition-shadow">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Posts Section */}

        {/* Mission Statement Section */}
        <div className="mt-20 bg-gray-50 my-20 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="mb-15">Our Mission & Vision</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-left transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed ">
                  To create a society that is empowered, healthy, and
                  future-ready through comprehensive programs addressing
                  education, youth development, environment, livelihood
                  enhancement, women's health, cyber safety, global
                  volunteerism, and disaster relief.
                </p>
              </div>

              <div className="text-left transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A world where every individual has the opportunity to thrive
                  in a resilient and sustainable community, with access to
                  quality education, healthcare, and economic opportunities that
                  foster personal and collective growth.
                </p>
              </div>
            </div>

            <section>
              {/* Progress bars section */}
              <div className="mt-10 bg-white rounded-xl shadow p-8">
                <h3 className="text-2xl font-semibold text-center mb-6 text-primary-600">
                  Our 2030 Commitment
                </h3>
                {/* Funds Raised */}
                <div className="w-full bg-gray-200 rounded-full overflow-hidden h-5 mb-4">
                  <div
                    className="h-full bg-gradient-to-tr rounded-full from-orange-600 via-orange-400 to-orange-500"
                    style={{
                      width: "40%",
                      backgroundSize: "200% 100%",
                      animation: "shine 2s linear infinite",
                    }}
                  ></div>
                </div>
                <p className="text-base text-center mt-4 font-medium text-gray-800">
                  We are committed to impacting{" "}
                  <strong className="text-orange-600 font-semibold">
                    5 million lives by 2030
                  </strong>
                  , creating lasting positive change and ensuring sustainable
                  development for communities worldwide.
                </p>

                {/* People Reached */}
                <div className="w-full bg-gray-200 rounded-full mt-4 overflow-hidden h-5 mb-4">
                  <div
                    className="h-full animate-shine rounded-full bg-gradient-to-tr from-green-400 via-green-500 to-green-600"
                    style={{ width: "30%" }} // You can make this dynamic using props
                  ></div>
                </div>
                <p className="text-base text-center mt-4 font-medium text-gray-800">
                    Committed to actively engaged {" "}
                  <strong className="text-green-600 font-semibold">
                    30,000 Youths by 2030
                  </strong>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
