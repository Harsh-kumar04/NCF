import React, { useState } from "react";
import { treeSpecies, timeline, packagePlans } from "../../utils/constant";
import {
  Heart,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Trees,
  Wind,
  Bird,
  Award,
  Camera,
} from "lucide-react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function GreenNCR() {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center py-12 sm:py-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-6 text-center text-white">
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-white-300 px-3 py-1 rounded-full text-xs font-medium mb-4 sm:mb-6 mt-2">
        🌱 Join the Green Revolution
          </span>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug text-white">
        Adopt a Tree,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
          Grow Hope
        </span>
          </h1>

          <p className="text-sm xs:text-base md:text-lg mb-6 sm:mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
        Help us plant{" "}
        <span className="text-green-300 font-medium">10,000 trees</span> 🌳.
        Every adoption fights climate change and supports local ecosystems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 w-full">
        <button
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="group bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-green-500/30 w-full sm:w-auto justify-center"
          onClick={() => window.open("https://rzp.io/rzp/Knku4Tz9", "_blank")}
        >
          <span
            className={`!text-red-500 transition-transform duration-200 ease-out inline-block ${onHover ? "scale-125" : "scale-100"
          }`}
          >
            {onHover ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
          </span>
          Adopt a Tree - ₹250
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <Link
          className="group bg-white/10 hover:bg-white/20 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all border border-white/30 flex items-center gap-2 w-full sm:w-auto justify-center"
          to="https://whatsapp.com/channel/0029VaG6oUJDOQIVSIN54J1M"
        >
          <Users className="h-4 w-4" />
          Join Community
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center w-full max-w-2xl mx-auto">
        <div className="bg-white/10 p-4 sm:p-5 rounded-xl border border-white/20">
          <div className="text-xl sm:text-2xl font-bold text-green-300">0+</div>
          <p className="text-xs sm:text-sm text-gray-200">Trees Adopted</p>
        </div>
        <div className="bg-white/10 p-4 sm:p-5 rounded-xl border border-white/20">
          <div className="text-xl sm:text-2xl font-bold text-green-300">0kg</div>
          <p className="text-xs sm:text-sm text-gray-200">CO² Absorbed</p>
        </div>
        <div className="bg-white/10 p-4 sm:p-5 rounded-xl border border-white/20">
          <div className="text-xl sm:text-2xl font-bold text-green-300">0+</div>
          <p className="text-xs sm:text-sm text-gray-200">Community Members</p>
        </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-6 bg-gray-50" id="why-it-matters">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why It Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delhi-NCR faces critical environmental challenges that trees can
              help solve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Air Pollution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trees act as natural air purifiers, filtering harmful pollutants
                and producing clean oxygen for our communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Trees className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Shrinking Green Cover
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid urbanization is reducing our green spaces. We must plant
                more trees to maintain ecological balance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Bird className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Biodiversity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trees provide habitat for birds, bees, and other wildlife while
                enriching soil health and supporting ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white" id="how-it-works">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to make a lasting environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Contribute ₹250
              </h3>
              <p className="text-gray-600">
                Make a donation to adopt a tree and support our green mission
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                We Plant & Protect
              </h3>
              <p className="text-gray-600">
                Our expert team plants your tree and ensures its protection
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Camera className="w-10 h-10 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Get Updates
              </h3>
              <p className="text-gray-600">
                Receive photos, location details, and regular growth updates
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                <Award className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Get Certificate
              </h3>
              <p className="text-gray-600">
                Receive a digital Adoption Certificate as proof of your
                contribution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Planting Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We're Planting
            </h2>
            <p className="text-xl text-gray-600">
              Native tree species perfect for Delhi-NCR climate
            </p>
          </div>

          {/* Plant Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {treeSpecies.map((tree, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                {/* Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={tree.img}
                    alt={tree.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />
                </div>

                {/* Name & Benefits */}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {tree.name}
                </h3>
                <p className="text-sm text-gray-600">{tree.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive roadmap from planning to forest establishment.
              Track our progress every step of the way.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-red-800">
                        {item.phase}
                      </span>
                      {item.status === "completed" && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {item.status === "current" && (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                      {item.status === "upcoming" && (
                        <Calendar className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-red-800 shadow-lg z-10"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      {/* How You Can Join Section */}
      <section id="join" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How You Can Join
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to participate in our tree adoption campaign
            </p>
          </div>

          {/* Cards */}
          <div className="flex justify-center items-center min-h-screen p-6">
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              {/* Top Image */}
              <div className="relative">
                <img
                  src="/blog-posts/tree-donate.jpeg" // Replace with plant image
                  alt="Plantation Drive"
                  className="w-full h-48.5 object-cover"
                />
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  🌿 Eco Benefit
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Support Plantation to Save Earth
                </h3>

                {/* By Organization */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <img
                    src="/blog-posts/logo.png"
                    alt="Org Logo"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  by <span className="ml-1 font-medium text-gray-700">Noble Citizen Foundation</span>
                </div>

                {/* Plan Title & Price */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-green-700">Individual Adopter</h4>
                  <p className="text-lg font-semibold text-gray-800">₹250</p>
                  <p className="text-sm text-gray-600 italic">
                    Adopt one tree and receive personalized updates
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {[
                    "Tree Adoption certificate",
                    "Quarterly updates",
                    "Growth photos",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>


                {/* Donate Button */}
                <a
                  href="https://rzp.io/rzp/Knku4Tz9"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md hover:from-green-600 hover:to-emerald-700 transition-all hover:scale-105 active:scale-95 text-center"
                >
                  🌱 Donate Now
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl  text-gray-300 md:text-5xl font-bold mb-6 ">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of environmental champions who are already making a
            difference. Every tree counts, every action matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              onClick={() => {
                const section = document.getElementById("why-it-matters");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Heart className="h-5 w-5" />
              Start Your Impact Today
            </button>
            <button
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all backdrop-blur-sm border border-white/30"
              onClick={() => {
                const section = document.getElementById("how-it-works");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More About Our Mission
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Questions? Contact us at{" "}
              <a
                href="mailto:hello@greenfuture.org"
                className="text-green-400 hover:text-green-300"
              >
                admin@noblecitizenfoundation.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GreenNCR;
