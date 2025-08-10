import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X logo from react-icons

type Volunteer = {
  name: string;
  social: { platform: string; url: string }[];
  description: string;
};

const VolunteersMarquee: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);

  const getPlatformIcon = (platform: string) => {
    const lower = platform.toLowerCase();
    if (lower.includes("facebook"))
      return <FaFacebook size={20} color="#1877F2" />; // Facebook Blue
    if (lower.includes("instagram"))
      return <FaInstagram size={20} color="#E4405F" />; // Instagram Pink/Red
    if (lower.includes("twitter") || lower === "x")
      return <FaXTwitter size={20} color="#000000" />; // X logo (black)
    if (lower.includes("linkedin"))
      return <FaLinkedin size={20} color="#0A66C2" />; // LinkedIn Blue
    return <FaGlobe size={20} color="#2F855A" />; // Default Globe Green
  };

  useEffect(() => {
    const endpoint =
      "https://script.google.com/macros/s/AKfycbyLLj8Y-K-szgLmwHyvl-sUmCsom_I8lD3YJsCjzXco1mJaLjoserHupPU3pZh035Rz/exec";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          setVolunteers([]);
        } else {
          const formatted: Volunteer[] = data.map((v: any) => ({
            name: v.name,
            description: v.team || "Volunteer Team Name",
            social: v.socials
              ? v.socials.map((s: any) => ({
                  platform: s.platform,
                  url: s.url,
                }))
              : [],
          }));
          setVolunteers([...formatted, ...formatted]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching volunteers:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="overflow-hidden bg-white pt-5 pb-2 mb-2 relative">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="mb-6">Our Volunteers</h2>
        <p className="text-m text-gray-600 pb-5">
          We appreciate your time and support — together, we can inspire
          positive change!
        </p>
      </div>

      {loading || volunteers.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          Fetching volunteers...
        </div>
      ) : (
        <div className="inline-flex animate-scroll-left">
          {volunteers.map((v, idx) => (
            <div
              key={idx}
              className="min-w-[290px] mx-2 p-2 flex flex-col items-center text-center transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              <strong className="text-lg text-maroon-900">{v.name}</strong>
              <p className="text-sm text-gray-600 mb-2.5 mt-1 leading-snug">
                ({v.description})
              </p>
              <div className="flex justify-center space-x-3">
                {v.social.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getPlatformIcon(s.platform)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default VolunteersMarquee;
