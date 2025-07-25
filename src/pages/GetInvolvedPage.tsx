import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, HandHeart, Users, Check, CreditCard, Gift, TrendingUp, MapPin } from 'lucide-react';

const GetInvolvedPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Get Involved | Noble Citizen Foundation';
  }, []);

  // State for donation form
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  
  // State for volunteer form
  const [volunteerFormData, setVolunteerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    experience: '',
    availability: '',
    message: '',
  });
  const [isVolunteerSubmitted, setIsVolunteerSubmitted] = useState(false);
  
  const handleDonationAmountSelect = (amount: number) => {
    setDonationAmount(amount);
  };
  
  const handleCustomDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setDonationAmount(value);
    }
  };
  
  const handlePaymentFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleVolunteerFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVolunteerFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setVolunteerFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };
  
  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep(paymentStep + 1);
  };
  
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('Volunteer form submitted:', volunteerFormData);
    setIsVolunteerSubmitted(true);
  };
  
  // Mock upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Charity Gala',
      date: 'September 15, 2025',
      location: 'Grand Ballroom, New York City',
      description: 'Join us for an evening of celebration and fundraising, featuring live music, auctions, and inspiring stories from the communities we serve.',
    },
    {
      id: 2,
      title: 'Community Clean-up Day',
      date: 'July 10, 2025',
      location: 'Various Locations',
      description: 'Participate in our global initiative to clean up parks, beaches, and public spaces in communities around the world.',
    },
    {
      id: 3,
      title: 'Virtual 5K Run/Walk',
      date: 'August 5-12, 2025',
      location: 'Virtual Event',
      description: 'Run or walk 5K from anywhere in the world to raise funds for our clean water initiatives in rural Kenya.',
    },
  ];
  
  // FAQ data
  const faqs = [
    {
      question: 'How is my donation used?',
      answer: 'Your donation is allocated according to our transparency policy, with at least 85% going directly to program implementation. The remaining amount supports essential administrative functions and fundraising efforts that help us expand our impact. Every donation, regardless of size, contributes meaningfully to our mission.'
    },
    {
      question: 'Can I volunteer remotely?',
      answer: 'Yes, we offer numerous remote volunteering opportunities! These include virtual mentoring, content creation, translation services, and specialized professional skills volunteering. Remote volunteers are a vital part of our global team, allowing individuals worldwide to contribute regardless of location.'
    },
    {
      question: 'Are my donations tax-deductible?',
      answer: 'Yes, Noble Citizen Foundation is a registered 501(c)(3) nonprofit organization in the United States, and donations from U.S. taxpayers are tax-deductible to the extent allowed by law. For donors in other countries, tax benefits vary according to local regulations. We provide donation receipts for all contributions.'
    },
    {
      question: 'How can my company partner with the Foundation?',
      answer: 'We offer diverse corporate partnership opportunities, including employee giving programs, matching gifts, sponsorships, cause-related marketing, and skills-based volunteering. Our partnership team works with companies to develop customized engagement strategies that align with corporate social responsibility goals while advancing our mission.'
    },
    {
      question: 'Can I specify which project my donation supports?',
      answer: 'Absolutely! When making your donation, you can designate your gift to support a specific project or program area. If you have a particular community or initiative in mind, we\'re happy to direct your contribution accordingly, and we\'ll provide updates on the impact of your targeted support.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Get Involved</h1>
            <p className="text-xl text-primary-100 mb-6">
              There are many ways to support our mission and make a meaningful difference in communities around the world.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white">
            <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Ways to Make a Difference</h2>
            <p className="text-lg text-gray-600">
              Whether you have time, skills, or resources to share, there\'s a meaningful way for you to contribute to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donate */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="bg-primary-600 p-8 flex justify-center">
                <DollarSign className="h-16 w-16 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
                <p className="text-gray-600 mb-6">
                  Your financial support enables us to implement programs and initiatives that create lasting positive change in communities worldwide.
                </p>
                <a href="#donate" className="btn-primary block text-center">
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
                <h3 className="text-xl font-semibold mb-4">Volunteer Your Time</h3>
                <p className="text-gray-600 mb-6">
                  Contribute your skills and energy to our projects. We offer both in-person and remote volunteering opportunities to match your interests.
                </p>
                <a href="#volunteer" className="btn-secondary block text-center">
                  Become a Volunteer
                </a>
              </div>
            </div>
            
            {/* Events */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="bg-accent-500 p-8 flex justify-center">
                <Calendar className="h-16 w-16 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Attend an Event</h3>
                <p className="text-gray-600 mb-6">
                  Join us at fundraising galas, community service days, or awareness campaigns. Our events are opportunities to connect and contribute.
                </p>
                <a href="#events" className="btn-accent block text-center">
                  View Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Make a Donation</h2>
            <p className="text-lg text-gray-600">
              Your generous contribution supports our work and directly impacts communities in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              {paymentStep === 1 && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold mb-6">Your Donation</h3>
                  
                  {/* Donation Type */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium mb-4">Select Donation Type</h4>
                      <div className="flex items-center">
                        <label className="inline-flex items-center mr-4">
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-primary-600"
                            checked={!isMonthly}
                            onChange={() => setIsMonthly(false)}
                          />
                          <span className="ml-2 text-gray-700">One-time</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-primary-600"
                            checked={isMonthly}
                            onChange={() => setIsMonthly(true)}
                          />
                          <span className="ml-2 text-gray-700">Monthly</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Donation Amount */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Select Amount</h4>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[25, 50, 100, 250, 500, 1000].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-3 rounded-md border-2 font-medium transition-colors ${
                            donationAmount === amount
                              ? 'border-primary-600 bg-primary-50 text-primary-600'
                              : 'border-gray-300 text-gray-700 hover:border-primary-300'
                          }`}
                          onClick={() => handleDonationAmountSelect(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative mt-6">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 text-lg">$</span>
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Custom amount"
                        value={typeof donationAmount === 'string' ? donationAmount : ''}
                        onChange={handleCustomDonationChange}
                      />
                    </div>
                  </div>
                  
                  {/* Donation Frequency */}
                  <div className="mb-8">
                    <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                      <p className="text-primary-800 font-medium">
                        {isMonthly
                          ? `You\'ll be donating $${donationAmount} per month until you cancel.`
                          : `You\'ll make a one-time donation of $${donationAmount}.`
                        }
                      </p>
                    </div>
                  </div>
                  
                  {/* Donation Allocation */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Allocate Your Donation</h4>
                    <select className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="general">Where Needed Most</option>
                      <option value="education">Education Programs</option>
                      <option value="health">Health Initiatives</option>
                      <option value="environment">Environmental Projects</option>
                      <option value="water">Clean Water Access</option>
                    </select>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setPaymentStep(2)}
                    className="btn-primary w-full py-4 text-lg"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}
              
              {paymentStep === 2 && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold mb-6">Payment Information</h3>
                  
                  <form onSubmit={handleDonationSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handlePaymentFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handlePaymentFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handlePaymentFormChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handlePaymentFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <CreditCard className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handlePaymentFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handlePaymentFormChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                        <p className="text-primary-800 font-medium">
                          {isMonthly
                            ? `You\'ll be donating $${donationAmount} per month until you cancel.`
                            : `You\'ll make a one-time donation of $${donationAmount}.`
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        type="button"
                        onClick={() => setPaymentStep(1)}
                        className="btn-outline"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn-primary w-full md:w-auto md:flex-grow py-4 text-lg"
                      >
                        Complete Donation
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {paymentStep === 3 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Thank You for Your Donation!</h3>
                  <p className="text-gray-600 mb-6">
                    Your generous {isMonthly ? 'monthly' : 'one-time'} contribution of ${donationAmount} will make a real difference in the lives of those we serve.
                  </p>
                  <p className="text-gray-600 mb-8">
                    A receipt has been sent to {formData.email}. Please check your inbox.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentStep(1);
                        setDonationAmount(50);
                        setIsMonthly(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          cardNumber: '',
                          expiryDate: '',
                          cvv: '',
                        });
                      }}
                      className="btn-outline"
                    >
                      Make Another Donation
                    </button>
                    <Link to="/projects" className="btn-primary">
                      Explore Our Projects
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Donation Impact */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6">Your Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Gift className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">$25 provides</h4>
                      <p className="text-gray-600">
                        School supplies for 5 children or clean water for a family for a month.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Gift className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">$50 provides</h4>
                      <p className="text-gray-600">
                        A scholarship for a student or medical supplies for a rural clinic.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Gift className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">$100 provides</h4>
                      <p className="text-gray-600">
                        Training for a community health worker or farming tools for a family.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Gift className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">$500 provides</h4>
                      <p className="text-gray-600">
                        A water purification system for a school or startup capital for a women\'s cooperative.
                      </p>
                    </div>
                  </div>
                </div>
                
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
                          Many employers match charitable contributions made by their employees.
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
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Volunteer With Us</h2>
            <p className="text-lg text-gray-600">
              Share your time and talents to make a difference. We offer a variety of volunteer opportunities both locally and globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Volunteer Form */}
            <div>
              {!isVolunteerSubmitted ? (
                <div className="bg-gray-50 rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold mb-6">Volunteer Application</h3>
                  
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Interest (select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Education', 'Health', 'Environment', 'Community Development', 'Marketing/Communications', 'Administration', 'Event Planning', 'Fundraising'].map((interest) => (
                          <label key={interest} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              value={interest}
                              checked={volunteerFormData.interests.includes(interest)}
                              onChange={handleInterestChange}
                              className="form-checkbox h-5 w-5 text-primary-600"
                            />
                            <span className="ml-2 text-gray-700">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <h3 className="text-2xl font-semibold mb-4">Thank You for Your Interest!</h3>
                  <p className="text-gray-600 mb-6">
                    We\'ve received your volunteer application and appreciate your willingness to contribute to our mission.
                  </p>
                  <p className="text-gray-600 mb-8">
                    A member of our team will review your application and contact you at {volunteerFormData.email} within the next 3-5 business days to discuss next steps.
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
                <h3 className="text-2xl font-semibold mb-6">Volunteer Opportunities</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">Local Volunteering</h4>
                    <p className="text-gray-600">
                      Join us for community events, fundraisers, and local projects. Great for those who want to make an impact close to home.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">Global Volunteering</h4>
                    <p className="text-gray-600">
                      Travel to project sites around the world to contribute directly to our international initiatives. Both short-term and long-term placements available.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">Skills-Based Volunteering</h4>
                    <p className="text-gray-600">
                      Contribute your professional expertise in areas such as healthcare, education, engineering, marketing, or technology to specific projects.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="text-lg font-medium mb-2">Remote Volunteering</h4>
                    <p className="text-gray-600">
                      Make an impact from anywhere in the world through virtual volunteering opportunities including content creation, translation, mentoring, and research.
                    </p>
                  </div>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100 mb-8">
                  <h4 className="text-lg font-medium mb-3">Volunteer Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Make a meaningful difference in communities worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Develop new skills and gain valuable experience</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Connect with like-minded individuals from diverse backgrounds</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Receive training and professional development opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Be part of a global community dedicated to positive change</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Volunteer Stories</h4>
                  <div className="bg-gray-50 p-4 rounded-md italic text-gray-600 mb-4">
                    "Volunteering with Noble Citizen Foundation was a life-changing experience. I spent three months working on water projects in Kenya and witnessed firsthand the profound impact of clean water access on communities."
                    <div className="mt-2 text-gray-800 font-medium not-italic">- Michael T., Water Engineer</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md italic text-gray-600">
                    "As a remote volunteer translator, I\'ve been able to contribute to the mission while balancing my full-time job. It\'s rewarding to know that my language skills are helping bridge communication gaps for important projects."
                    <div className="mt-2 text-gray-800 font-medium not-italic">- Sofia G., Translator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Join us for fundraisers, awareness campaigns, and community service events around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>
                  <button className="btn-accent w-full">
                    Register Now
                  </button>
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
      </section>

      {/* FAQs Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about donations, volunteering, and getting involved.
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
            Together, we can create meaningful change and build a better world for all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#donate" className="btn-accent">
              Donate Now
            </a>
            <a href="#volunteer" className="btn-outline border-white text-white hover:bg-white/10">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;