import React from "react";
import {
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  BookOpen,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react";

// --- Reusable Component for Section Headers ---
type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
      {title}
    </h2>
    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
  </div>
);

function App() {
  // Data remains the same as it's well-structured
  const mentors = [
    {
      name: "Shubhrajyoti Bhowmik",
      position: "Partnerships Officer, UNICEF India",
      image:
        "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:auto/h:auto/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/Untitled-design1-2-qwbps6kcgltphyjmono39ztetcskwbo7ewrn1tg2cw.png",
    },
    {
      name: "Priyanka Phalswal",
      position: "CSR Manager, Microsoft India",
      image:
        "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:228/h:228/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/Untitled-design2-1-qyx3z0w6u0vixsvfuv2ieriyaxquhohj1k2xhxy4mo.png",
    },
    {
      name: "Asim Khan",
      position: "CSR Head, Cadence",
      image:
        "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:228/h:228/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/Untitled-design5-qyx4r3cowxarmm3oyhugd6jgw5efcawz8hdweebwts.png",
    },
    {
      name: "Shreya Sudhir",
      position: "CSR Head, SLB Global Technology",
      image:
        "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:228/h:228/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/hello-qyx62tlny2mx5sru94kgz4y2si5e70eb4pxho7k8vk.png",
    },
    {
      name: "Rakesh Kumar Singh",
      position: "CSR Lead, Signify Innovations India Limited",
      image:
        "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:228/h:228/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/Untitled-design4-qyx4r741o9fwx1y8cjgyn5lb9ovw73bwkzzubi6c4w.png",
    },
  ];

  const programStructure = [
    {
      title: "Program Launch & Orientation",
      description:
        "Meet mentors and peers, understand program goals, and set expectations for impactful learning and collaboration.",
    },
    {
      title: "CSR Laws & Partnership Essentials",
      description:
        "Learn about the CSR legal framework (Companies Act, FCRA), recent trends, and the role of strategic NGO-corporate partnerships.",
    },
    {
      title: "Proposal Writing & Budget Planning",
      description:
        "Master the art of crafting CSR proposals, budgeting for transparency, and aligning with corporate focus areas.",
    },
    {
      title: "Corporate Insights & Pitching Skills",
      description:
        "Hear directly from CSR heads on what they look for, and refine your pitch to create compelling value propositions.",
    },
    {
      title: "Strengthening NGO Systems",
      description:
        "Improve governance, operational capacity, impact measurement, and digital tools for effective CSR reporting.",
    },
    {
      title: "Impact Reporting & Audit Readiness",
      description:
        "Build frameworks for CSR reporting, prepare for legal and financial audits, and ensure organizational compliance.",
    },
    {
      title: "Mid-Program Review & Mentorship",
      description:
        "Present your progress, receive feedback from mentors, and refine your CSR proposals and operational approach.",
    },
    {
      title: "Sustaining Long-Term Partnerships",
      description:
        "Learn to manage crises, maintain corporate relationships, and build trust for continued support.",
    },
    {
      title: "Final Proposal & Presentation Prep",
      description:
        "Finalize your CSR project, practice your corporate pitch, and polish presentation skills with expert guidance.",
    },
    {
      title: "Graduation & Networking Day",
      description:
        "Showcase your CSR project to a panel of corporates, receive certification, and connect with future CSR partners.",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Direct guidance from industry leaders at top corporations.",
    },
    {
      icon: TrendingUp,
      title: "Proven Success Rate",
      description:
        "Many participants go on to secure funding partnerships within a year.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certification recognized by leading CSR departments.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "10-module program covering all aspects of CSR partnerships.",
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Track your organization's growth and funding success.",
    },
    {
      icon: Globe,
      title: "Powerful Network",
      description: "Connect with CSR professionals and NGO leaders.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              IMPACT ALLIANCE
            </h1>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-red-200">
              CSR-NGO MENTORSHIP PROGRAM
            </h2>
           <p className="mt-6 text-lg md:text-xl text-red-100 leading-relaxed">
  Transform your NGO with direct mentorship from India's top CSR leaders. 
  Join the elite program now.
</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-white text-red-700 hover:bg-red-50 px-8 py-3 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105 shadow-2xl"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center bg-transparent border-2 border-red-200 text-white hover:bg-red-200/20 px-8 py-3 rounded-lg font-bold text-lg transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      {/* <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-red-600">
                  {stat.number}
                </span>
                <p className="mt-2 text-base md:text-lg font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us / Benefits Section */}
      <section id="learn-more" className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Why Our NGOs Succeed"
            subtitle="Our proven methodology combines expert mentorship with a practical curriculum, transforming NGOs into funding-ready organizations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                >
                  <div className="flex items-center justify-center bg-red-100 w-16 h-16 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Meet Your Mentors"
            subtitle="Learn from the best. Our mentors are senior leaders from India's most respected corporate houses and foundations."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="text-center group flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-red-200 transition-all duration-300">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h5 className="mt-4 font-bold text-slate-800">{mentor.name}</h5>
                <p className="text-sm text-slate-500">{mentor.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure - Redesigned as a Timeline */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Your 10-Module Success Framework"
            subtitle="A step-by-step journey from fundamentals to securing long-term corporate partnerships, designed by industry experts."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* The vertical line */}
              <div
                className="absolute left-4 top-1 w-0.5 h-full bg-slate-200"
                aria-hidden="true"
              ></div>

              {programStructure.map((module, index) => (
                <div key={index} className="relative pl-12 pb-10">
                  {/* The dot on the timeline */}
                  <div className="absolute left-4 top-1 -translate-x-1/2 w-4 h-4 bg-white border-2 border-red-600 rounded-full"></div>

                  {/* The content */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <p className="text-sm font-semibold text-red-600 mb-1">
                      MODULE {index + 1}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900">
                      {module.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="An Investment in Your NGO's Future"
            subtitle="Choose the plan that works best for you. Both options provide full access to the complete program."
          />
          <div className="text-center mb-10">
            <p className="text-lg text-slate-600">
              New Batch Starts:{" "}
              <span className="font-bold text-red-600">23rd September 2025</span>
            </p>
            <p className="text-slate-500">
              Weekly Online Classes: Held on weekends (1–2 hours per session)
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Recommended */}
            <div className="border-2 border-red-600 rounded-2xl p-8 shadow-2xl relative">
              <div className="absolute top-0 right-6 -mt-4 bg-red-600 text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                One-Time Payment
              </h3>
              <p className="mt-2 text-slate-600">Pay once, get full access.</p>
              <div className="my-6">
                <span className="text-5xl font-extrabold text-slate-900">
                  ₹8,000
                </span>
                <span className="text-xl font-bold text-slate-500 line-through ml-2">
                  ₹9,000
                </span>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Complete 10-Module Program
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Direct Mentor Access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Certification & Network Access
                </li>
              </ul>
              <a
                href="https://pages.razorpay.com/raz-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg w-full transition duration-300 block text-center"
              >
                Pay ₹8,000 (Save ₹1,000)
              </a>
            </div>

            {/* Option 2: Installments */}
            <div className="border border-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Easy Installments
              </h3>
              <p className="mt-2 text-slate-600">
                Flexible payment over two months.
              </p>
              <div className="my-6">
                <span className="text-5xl font-extrabold text-slate-900">
                  ₹4,500
                </span>
                <span className="text-xl font-bold text-slate-500">
                  × 2 months
                </span>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Complete 10-Module Program
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Direct Mentor Access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Certification & Network Access
                </li>
              </ul>

              <a
                href="https://rzp.io/rzp/bj3R01S"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-bold text-lg w-full transition duration-300 block text-center"
              >
                Pay Installment of ₹4,500
              </a>
            </div>
          </div>
          <div className="mt-10 max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <Shield className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm">
                  <span className="font-bold">Important Note:</span> Mentors
                  volunteer their expertise. The fee supports the operational
                  and facilitation costs of the Noble Citizen Foundation to
                  deliver this high-impact program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 text-slate-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Limited Seats Available
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Only 50 NGOs will be selected for this exclusive cohort. Don't
              miss this opportunity to get the guidance you need to scale your
              impact.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-red-600 text-white hover:bg-red-500 px-10 py-4 rounded-lg font-bold text-xl transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Secure Your Spot Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 py-6">
        <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Noble Citizen Foundation. All
            Rights Reserved.
          </p>
          <p className="mt-1">The CSR-NGO Impact Alliance Mentorship Program</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
