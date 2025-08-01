import React from "react";
import VishvasImage from "../../assets/Vishvas.webp";
import newz from "../../assets/newz.webp";

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
    <section className="section bg-white">
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

        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2
              className="mb-6 text-3xl  font-semibold text-gray-800 tracking-tight"
              style={{ color: "#7F1D1D" }}
            >
              Featured Posts
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Stay updated with the latest from Noble Citizen Foundation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch mt-10 ">
            {/* Post 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full  md:w-1/2 transition-transform hover:scale-105 duration-300">
              <img
                src={VishvasImage}
                alt="Post 1"
                className="w-full object-cover"
              />

              <div className="p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3 space-x-2">
                    <img
                      src="https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:100/h:34/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/jagran-josh-logo-freelogovectors.net_-qxz4aaw1i46rg3s0t2ugqze7ysnc0vxwx3h1fre0r8.png"
                      alt="Logo"
                      className="w-19 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Noble Citizen Foundation Organises Cyber Awareness Program
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The Noble Citizen Foundation and Vishwas News organised a
                    media literacy and cyber awareness program in collaboration
                    with Hansraj College...
                  </p>
                </div>

                <a
                  href="https://www.thedailyjagran.com/india/noble-citizen-foundation-and-vishwas-news-organise-media-literacy-and-cyber-awareness-program-in-collaboration-with-hansraj-college-10200924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-blue-600 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-1/2 transition-transform hover:scale-105 duration-300">
              <img src={newz} alt="Post 1" className="w-full  object-cover" />
              <div className="p-9 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center mb-3 space-x-2">
                    <img
                      src="https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:100/h:34/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/jagran-josh-logo-freelogovectors.net_-qxz4aaw1i46rg3s0t2ugqze7ysnc0vxwx3h1fre0r8.png"
                      alt="Logo"
                      className="w-19 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Noble Citizen Foundation Organises Tree Plantation Drive
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The Noble Citizen Foundation organised a tree plantation
                    drive at Smriti Vatika in Gurugram, encouraging
                    environmental responsibility...
                  </p>
                </div>
                <a
                  href="https://www.thedailyjagran.com/india/noble-citizen-foundation-organises-tree-plantation-drive-at-smriti-vatika-in-gurugram-10222012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-blue-600 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="mb-6">Our Mission & Vision</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To create a society that is empowered, healthy, and
                  future-ready through comprehensive programs addressing
                  education, youth development, environment, livelihood
                  enhancement, women's health, cyber safety, global
                  volunteerism, and disaster relief.
                </p>
              </div>

              <div className="text-left">
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

            <div className="mt-12 p-6 bg-primary-600 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3">
                Our 2030 Commitment
              </h3>
              <p className="text-lg">
                We are committed to impacting{" "}
                <strong>5 million lives by 2030</strong>, creating lasting
                positive change and ensuring sustainable development for
                communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
