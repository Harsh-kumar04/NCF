import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Donation from "../components/common/Donation";
import GreenNCR from "../pages/GreenNCR"

import {
  Calendar,
  IndianRupee,
  HandHeart,
  Check,
  MapPin,
  Trees,
} from "lucide-react";

const GetInvolvedPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = "Get Involved | Noble Citizen Foundation";
    window.scrollTo(0, 0);   
  }, []);

  // State for donation form
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // State for volunteer form
  const [volunteerFormData, setVolunteerFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    interests: string[]; // 👈 yaha clearly string[]
    experience: string;
    availability: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    interests: [], // 👈 initial value empty array
    experience: "",
    availability: "",
    message: "",
  });

  const [isVolunteerSubmitted, setIsVolunteerSubmitted] = useState(false);

  const handleDonationAmountSelect = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleCustomDonationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handlePaymentFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVolunteerFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setVolunteerFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setVolunteerFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep(paymentStep + 1);
  };

  const handleVolunteerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      access_key: "b81ab31c-0ddc-42eb-b1c8-6f4e2ac65cbe", // 👈 yaha tera key
      name: volunteerFormData.name,
      email: volunteerFormData.email,
      phone: volunteerFormData.phone,
      interests: volunteerFormData.interests.join(", "), // multiple select ka handle
      experience: volunteerFormData.experience,
      availability: volunteerFormData.availability,
      message: volunteerFormData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setIsVolunteerSubmitted(true); // show success UI
        // reset form bhi kar sakta hai
        setVolunteerFormData({
          name: "",
          email: "",
          phone: "",
          interests: [],
          experience: "",
          availability: "",
          message: "",
        });
      } else {
        alert("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      alert("⚠️ Network error, please try later.");
    }
  };

  // Mock upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "September 15, 2025",
      location: "Grand Ballroom, New York City",
      description:
        "Join us for an evening of celebration and fundraising, featuring live music, auctions, and inspiring stories from the communities we serve.",
    },
    {
      id: 2,
      title: "Community Clean-up Day",
      date: "July 10, 2025",
      location: "Various Locations",
      description:
        "Participate in our global initiative to clean up parks, beaches, and public spaces in communities around the world.",
    },
    {
      id: 3,
      title: "Virtual 5K Run/Walk",
      date: "August 5-12, 2025",
      location: "Virtual Event",
      description:
        "Run or walk 5K from anywhere in the world to raise funds for our clean water initiatives in rural Kenya.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How is my donation used?",
      answer:
        "Your donation is allocated according to our transparency policy, with at least 85% going directly to program implementation. The remaining amount supports essential administrative functions and fundraising efforts that help us expand our impact. Every donation, regardless of size, contributes meaningfully to our mission.",
    },
    {
      question: "Can I volunteer remotely?",
      answer:
        "Yes, we offer numerous remote volunteering opportunities! These include virtual mentoring, content creation, translation services, and specialized professional skills volunteering. Remote volunteers are a vital part of our global team, allowing individuals worldwide to contribute regardless of location.",
    },
    {
      question: "Are my donations tax-deductible?",
      answer:
        "Yes, Noble Citizen Foundation is a registered 501(c)(3) nonprofit organization in the United States, and donations from U.S. taxpayers are tax-deductible to the extent allowed by law. For donors in other countries, tax benefits vary according to local regulations. We provide donation receipts for all contributions.",
    },
    {
      question: "How can my company partner with the Foundation?",
      answer:
        "We offer diverse corporate partnership opportunities, including employee giving programs, matching gifts, sponsorships, cause-related marketing, and skills-based volunteering. Our partnership team works with companies to develop customized engagement strategies that align with corporate social responsibility goals while advancing our mission.",
    },
    {
      question: "Can I specify which project my donation supports?",
      answer:
        "Absolutely! When making your donation, you can designate your gift to support a specific project or program area. If you have a particular community or initiative in mind, we're happy to direct your contribution accordingly, and we'll provide updates on the impact of your targeted support.",
    },
  ];
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Get Involved</h1>
            <p className="text-xl text-primary-100 mb-6">
              There are many ways to support our mission and make a meaningful
              difference in communities around the world.
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

      {/* Ways to Get Involved */}
      <section id="get" className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Ways to Make a Difference</h2>
            <p className="text-lg text-gray-600">
              Whether you have time, skills, or resources to share, there\'s a
              meaningful way for you to contribute to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donate */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="bg-primary-600 p-8 flex justify-center">
                <IndianRupee className="h-16 w-16 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
                <p className="text-gray-600 mb-6">
                  Your financial support enables us to implement programs and
                  initiatives that create lasting positive change in communities
                  worldwide.
                </p>
                <a
                  href="https://rzp.io/rzp/Um5oab3S"
                  target="_blank"
                  className="btn-primary block text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>

            {/* Volunteer */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="bg-secondary-500 p-8 flex justify-center">
                <HandHeart className="h-16 w-16 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Volunteer Your Time
                </h3>
                <p className="text-gray-600 mb-6">
                  Contribute your skills and energy to our projects. We offer
                  both in-person and remote volunteering opportunities to match
                  your interests.
                </p>
                <a
                  href="#volunteer"
                  className="btn-secondary block text-center"
                >
                  Become a Volunteer
                </a>
              </div>
            </div>

            {/* Events */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="bg-primary-600 p-8 flex justify-center">
                <Trees className="h-16 w-16 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Adopt a Tree</h3>
                <p className="text-gray-600 mb-6">
                  Delhi-NCR faces critical environmental challenges that trees
                  can help solve
                </p>
                <Link to={"/plant-a-tree"} className="btn-primary block text-center ">
                  Adopt a Tree
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}

      <div>
        <Donation />
      </div>

      {/* Volunteer Section */}
      <section id="volunteer" className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Volunteer With Us</h2>
            <p className="text-lg text-gray-600">
              Share your time and talents to make a difference. We offer a
              variety of volunteer opportunities both locally and globally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Volunteer Form */}
            <div>
              {!isVolunteerSubmitted ? (
                <div className="bg-gray-50 rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold mb-6">
                    Volunteer Application
                  </h3>

                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={volunteerFormData.name}
                        onChange={handleVolunteerFormChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={volunteerFormData.email}
                          onChange={handleVolunteerFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={volunteerFormData.phone}
                          onChange={handleVolunteerFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <select
                      multiple
                      value={volunteerFormData.interests}
                      onChange={(e) => {
                        const selected = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setVolunteerFormData((prev) => ({
                          ...prev,
                          interests: selected,
                        }));
                      }}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      {[
                        "Website",
                        "Social Media",
                        "Marketing",
                        "Fundraising",
                        "Event Management",
                        "Research & Development",
                        "Impact Alliance",
                      ].map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>

                    <div className="mb-6">
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Relevant Experience
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        rows={3}
                        value={volunteerFormData.experience}
                        onChange={handleVolunteerFormChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Please share any relevant skills or experience."
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="availability"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Availability
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        value={volunteerFormData.availability}
                        onChange={handleVolunteerFormChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select your availability</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Evenings">Evenings</option>
                        <option value="Weekends">Weekends</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={volunteerFormData.message}
                        onChange={handleVolunteerFormChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us a bit more about why you\'d like to volunteer with us."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-secondary w-full py-4 text-lg"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Thank You for Your Interest!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We\'ve received your volunteer application and appreciate
                    your willingness to contribute to our mission.
                  </p>
                  <p className="text-gray-600 mb-8">
                    A member of our team will review your application and
                    contact you at {volunteerFormData.email} within the next 3-5
                    business days to discuss next steps.
                  </p>
                  <Link to="/projects" className="btn-secondary">
                    Explore Our Projects
                  </Link>
                </div>
              )}
            </div>

            {/* Volunteer Info */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Volunteer Opportunities
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">
                      Local Volunteering
                    </h4>
                    <p className="text-gray-600">
                      Join us for community events, fundraisers, and local
                      projects. Great for those who want to make an impact close
                      to home.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">
                      Skills-Based Volunteering
                    </h4>
                    <p className="text-gray-600">
                      Contribute your professional expertise in areas such as
                      healthcare, education, engineering, marketing, or
                      technology to specific projects.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">
                      Remote Volunteering
                    </h4>
                    <p className="text-gray-600">
                      Make an impact from anywhere in the world through virtual
                      volunteering opportunities including content creation,
                      translation, mentoring, and research.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100 mb-8">
                  <h4 className="text-lg font-medium mb-3">
                    Volunteer Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Make a meaningful difference in communities worldwide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Develop new skills and gain valuable experience
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Connect with like-minded individuals from diverse
                        backgrounds
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Receive training and professional development
                        opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Be part of a global community dedicated to positive
                        change
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-3">
                    Volunteer Stories
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md italic text-gray-600 mb-4">
                    "Volunteering with Noble Citizen Foundation was a
                    life-changing experience. I spent three months working on
                    water projects in Kenya and witnessed firsthand the profound
                    impact of clean water access on communities."
                    <div className="mt-2 text-gray-800 font-medium not-italic">
                      - Michael T., Water Engineer
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md italic text-gray-600">
                    "As a remote volunteer translator, I\'ve been able to
                    contribute to the mission while balancing my full-time job.
                    It\'s rewarding to know that my language skills are helping
                    bridge communication gaps for important projects."
                    <div className="mt-2 text-gray-800 font-medium not-italic">
                      - Sofia G., Translator
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <section id="events" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Join us for fundraisers, awareness campaigns, and community
              service events around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <button className="btn-accent w-full">Register Now</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section> */}

      {/* FAQs Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about donations, volunteering,
              and getting involved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don\'t see your question answered here?
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Together, we can create meaningful change and build a better world
            for all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#get" className="btn-accent">
              Donate Now
            </a>
            <a
              href="#volunteer"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
