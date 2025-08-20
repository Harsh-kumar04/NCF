import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      return (
        <FaFacebook size={18} color="#1877F2" className="volunteer-icon" />
      );
    if (lower.includes("instagram"))
      return (
        <FaInstagram size={18} color="#E4405F" className="volunteer-icon" />
      );
    if (lower.includes("twitter") || lower === "x")
      return (
        <FaXTwitter size={17} color="#000000" className="volunteer-icon" />
      );
    if (lower.includes("linkedin"))
      return (
        <FaLinkedin size={18} color="#0A66C2" className="volunteer-icon" />
      );
    return <FaGlobe size={18} color="#2F855A" className="volunteer-icon" />;
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .volunteer-icon {
        transition: transform 0.2s, filter 0.2s;
      }
      .volunteer-icon:hover {
        transform: scale(1.2);
        filter: brightness(1.2) drop-shadow(0 2px 6px #aaa);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const endpoint =
      "https://script.google.com/macros/s/AKfycbwExEPD7nWBRUFf2h-_eDyvL_55jjW0xAhuNpU2xRgW0o84oEqAMK-iXh85mOFPhbaG/exec";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          setVolunteers([]);
        } else {
          const formatted: Volunteer[] = data.map((v: any) => ({
            name: v.name,
            description: v.team,
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
        <h2 className="mb-6">Elite Volunteers ⭐</h2>
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
        <div className="marquee-container bg-white inline-flex animate-scroll-left">
          {volunteers.map((v, idx) => (
            <div
              key={idx}
              className="min-w-[200px] mx-1 py-3 flex flex-col items-center text-center  
                         transition-transform duration-300 ease-in-out cursor-pointer 
                         hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => {
                const marquee = document.querySelector(
                  ".marquee-container"
                ) as HTMLElement;
                marquee.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                const marquee = document.querySelector(
                  ".marquee-container"
                ) as HTMLElement;
                marquee.style.animationPlayState = "running";
              }}
            >
              <strong className="text-sm text-maroon-900">{v.name}</strong>
              <p className="text-sm text-gray-600 mb-2.5 mt-1 leading-snug">
                {v.description}
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
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left 9s linear infinite;
            animation-play-state: running;
          }
        `}
      </style>
    </div>
  );
};

export default VolunteersMarquee;
