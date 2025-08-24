import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, Heart, Clock, Target } from "lucide-react";
import { teamMembers } from "../data/team";
import Partner from "../components/home/partner";
import AboutGallery from "./AboutGallery";

const AboutPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = "About Us | Noble Citizen Foundation";
  }, []);

  // Core values data
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Compassion",
      description:
        "We approach our work with empathy and deep respect for the dignity of those we serve.",
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our actions and are transparent in our operations.",
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Impact",
      description:
        "We focus on measurable, sustainable outcomes that create lasting positive change.",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Sustainability",
      description:
        "We develop solutions that communities can maintain and build upon for generations.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">About Noble Citizen Foundation</h1>
            <p className="text-xl text-primary-100 mb-6">
              For over 5 years, we've been working with communities to create
              lasting, positive change through education, health initiatives,
              and sustainable development.
            </p>
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

      {/* Mission and Vision */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower communities through education, healthcare, and
                sustainable development programs that create lasting positive
                change.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in working hand-in-hand with communities to develop
                solutions that address their unique challenges and build upon
                their strengths. Our approach focuses on sustainability,
                ensuring that the positive changes we help initiate can continue
                long after our direct involvement ends.
              </p>
              <p className="text-gray-600">
                Through collaborative partnerships with local organizations,
                governments, and the private sector, we maximize our impact and
                reach, creating ecosystems of support that nurture community-led
                development.
              </p>
            </div>
            <div>
              <h2 className="mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                A world where every community has equal access to resources and
                opportunities for growth, health, and prosperity.
              </p>
              <p className="text-gray-600 mb-6">
                We envision a global community where geographical location,
                economic status, or social background do not determine one's
                access to education, healthcare, or opportunities for
                advancement.
              </p>
              <p className="text-gray-600">
                We strive for a future where empowered communities lead their
                own development, where sustainable practices protect our shared
                environment, and where social inequities are steadily diminished
                through collaborative action and shared commitment to human
                dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide all our actions and decisions as we work to
              fulfill our mission around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-primary-600 p-6 flex justify-center">
                  <div className="rounded-full bg-primary-700 p-4">
                    {value.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From our humble beginnings to our global impact today, here's how
              Noble Citizen Foundation has evolved.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2020 - Foundation & COVID-19 Relief */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                    2020
                  </h3>
                  <h4 className="text-xl font-medium mb-2">
                    Foundation Established & COVID-19 Relief
                  </h4>
                  <ul className="text-gray-600 space-y-3">
                    <li className="leading-relaxed">
                      • Mr. Sahil Kaushar & Mr. Jestin Anthony established Noble
                      Citizen Foundation with a focus on A Noble Society That Is
                      Empowered, Healthy and Future Ready.
                    </li>
                    <li className="leading-relaxed">
                      • Served 60,000+ meals to migrant laborers during the 1st
                      wave of COVID-19.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 z-10"></div>
                <div className="flex-1 md:pl-12"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 md:text-right hidden md:block"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 z-10"></div>
                <div className="flex-1 md:pl-12">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                    2021
                  </h3>
                  <h4 className="text-xl font-medium mb-2">
                    COVID-19 Relief - Oxygen
                  </h4>
                  <ul className="text-gray-600 space-y-3">
                    <li className="leading-relaxed">
                      • Saved 500+ lives during 2nd wave of COVID-19 by
                      providing Oxygen Cylinders and Concentrators.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                    2022
                  </h3>
                  <h4 className="text-xl font-medium mb-2">
                    Digital Education Access
                  </h4>
                  <ul className="text-gray-600 space-y-3">
                    <li className="leading-relaxed">
                      • Provided free e-learning access to 1,100 underprivileged
                      students to bridge the digital divide in education.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 z-10"></div>
                <div className="flex-1 md:pl-12"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 md:text-right hidden md:block"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 z-10"></div>
                <div className="flex-1 md:pl-12">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                    2023
                  </h3>
                  <h4 className="text-xl font-medium mb-2">
                    G20 C20 Committee Member
                  </h4>
                  <ul className="text-gray-600 space-y-3">
                    <li className="leading-relaxed">
                      • As an Official Organizing Committee Member of the G20
                      (C20), the Noble Citizen Foundation played a crucial role
                      in facilitating dialogue between civil society
                      organizations and global leaders.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                    2024
                  </h3>
                  <h4 className="text-xl font-medium mb-2">
                    Major Initiatives & Recognition
                  </h4>
                  <ul className="text-gray-600 space-y-3">
                    <li className="leading-relaxed">
                      • Provided cybersecurity awareness among 20,000 students
                      and community members under Vivo CSR initiatives through
                      training and workshops in Gurugram, Haryana.
                    </li>
                    <li className="leading-relaxed">
                      • Launched two successful projects: Future Leaders for
                      Sustainability and CSR-NGO Impact Alliance, impacting
                      1,000+ students and 34 NGOs with the capacity of impacting
                      millions of lives.
                    </li>
                    <li className="leading-relaxed">
                      • 15 Youth Volunteers from Future Leaders for
                      Sustainability project were selected to represent India
                      and Noble Citizen Foundation at World Youth Festival
                      Russia under fully funded category.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 z-10"></div>
                <div className="flex-1 md:pl-12"></div>
              </div>

              {/* 2025 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 md:text-right hidden md:block"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 z-10"></div>
                <div className="flex-1 md:pl-12">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2">
                    2025
                  </h3>
                  <h4 className="text-xl font-medium mb-2">Present Day</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li className="leading-relaxed">
                      • Park Restoration (Smriti Vatika-Gurugram): Revived
                      neglected land into green public space to foster
                      environmental awareness and community recreation under
                      SUEZ CSR initiatives.
                    </li>
                    <li className="leading-relaxed">
                      • Livelihood Generation through Electric Vehicles:
                      Empowered 10 rural individuals in Betul, Madhya Pradesh
                      through EV-based sustainable self-employment opportunities
                      under Betul Wind Farms Pvt. Ltd. CSR initiatives.
                    </li>
                    <li className="leading-relaxed">
                      • Provided cybersecurity awareness among 5,000+ students
                      and community members under Paytm CSR initiatives through
                      training and workshops in Gurugram, Haryana.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the dedicated professionals guiding our organization's
              mission and vision around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 10).map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {member.bio}
                  </p>

                  {/* {member.socialLinks && (
                    <div className="flex space-x-4 pt-4 border-t border-gray-100">
                      {member.socialLinks.email && (
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          <span className="sr-only">Email</span>
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery-Swipper */}
      <AboutGallery />

      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Partners</h2>
            <p className="text-lg text-gray-600">
              We collaborate with a diverse range of organizations that share
              our commitment to creating positive change.
            </p>

            <Partner />
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-outline">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Together, we can create lasting positive change in communities
            around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="btn-accent">
              Get Involved
            </Link>
            <Link
              to="/projects"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
