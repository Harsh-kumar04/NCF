import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Awards: React.FC = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  const awards = [
    {
      id: 1,
      title: "Beautiful Indians 2024 by Femina Magazine and Mamaearth",
      description: "The Beautiful Indians 2024, presented by Femina and Mamaearth, celebrated remarkable individuals in the People For Good category, recognizing their impactful efforts and transformative contributions toward creating meaningful change and inspiring positive societal progress.",
      image: "/award-slides/mamaearth-award.jpg",
    },
    {
      id: 2,
      title: "Rex Karamaveer Award 2019.",
      description: "Rex Karamaveer Award 2019 by Karamveer purashakar and United Nations for their outstanding contributions to social justice and community empowerment.The 2019 awards ceremony, which included the presentation of the Karmaveer Chakra, was held in Delhi for exemplary individuals and organizations.",
      image: "/award-slides/karamveer-award.jpg",
    },
    {
      id: 3,
      title: "Global Youth Peace Ambassador Maldives 2019.",
      description: "Global Youth Peace Ambassador Maldives 2019 by Youth Ministry of Maldives and RAFY NGO for their outstanding contributions to peacebuilding and youth empowerment. This prestigious recognition highlights the foundation's commitment to fostering global collaboration and inspiring young leaders to drive positive change in their communities.",
      image: "/award-slides/global-youth-peace-award.jpg",
    },

    {
      id: 4,
      title: "Kalam Ratna Award 2023.",
      description: "Dr. Kalam Ratna Award 2023 by Khwab Foundation for their impactful contributions in education, health, and social service, inspiring youth to drive positive change. This prestigious recognition highlights the foundation's commitment to empowering communities and shaping a sustainable future through its impactful initiatives.",
      image: "/award-slides/kalam-ratna-award.jpg",
    },

    {
      id: 6,
      title: "CIVIL20",
      description:
        "As an Official Organizing Committee Member of the G20 (C20), the Noble Citizen Foundation plays a crucial role in facilitating dialogue between civil society organizations and global leaders. Fostering dialogue to address issues like inequality and climate change, ensuring inclusive policies and impactful global governance.",
      image: "/award-slides/civil20-summit.png",
    },

    {
      id: 7,
      title: "Member of the National Preparatory Committee for the WYF.",
      description:
        "Mr. Sahil Kaushar, CEO, Noble Citizen Foundation is a proud member of the National Preparatory Committee (NPC) for the World Youth Festival (WYF), contributing to youth engagement and leadership on an international scale. This role emphasizes the foundation’s commitment to empowering young leaders and fostering global collaboration for social change",
      image: "/award-slides/youth-award.png",
    },

    {
      id: 8,
      title: "Democracy Award by the Ladli Foundation.",
      description:
        "Mr. Jestin Anthony, Chairperson of the Noble Citizen Foundation, has been honored with the Democracy Award by the Ladli Foundation for his outstanding contributions to social justice and democratic empowerment. This award recognizes his unwavering dedication to advocating for marginalized communities and promoting civic engagement.",
      image: "/award-slides/ladli_Award.jpg",
    },

    {
      id: 9,
      title: "Global Collaboration across the BRICS Nations.",
      description:
        "At the prestigious BRICS Forum, Russia, Mr. Jestin Anthony Chairperson, Noble Citizen delivered a powerful speech emphasizing the importance of civil society partnerships in shaping sustainable development. His address highlighted the pivotal role that grassroots organizations play in fostering innovation, social responsibility, and global collaboration across the BRICS nations.",
      image: "/award-slides/brics_image.jpg",
    },

    {
      id: 10,
      title: "Territory of Meaning forum, Moscow, Russia.",
      description:
        "Mr. Sahil Kaushar, CEO, Noble Citizen Foundation  represented India at the Territory of Meaning forum, Moscow, Russia 2024, where he delivered an inspiring speech on youth leadership and sustainable development. His address underscored the critical need for young leaders to drive climate action and shape the future of global policies.",
      image: "/award-slides/speech-award.jpg",
    },
  ];

  // Close zoom on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomIndex(null);
      if (e.key === "ArrowRight" && zoomIndex !== null)
        setZoomIndex((prev) => (prev! + 1) % awards.length);
      if (e.key === "ArrowLeft" && zoomIndex !== null)
        setZoomIndex((prev) => (prev! - 1 + awards.length) % awards.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoomIndex]);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-8xl mx-auto">
            <div className="mb-8">
              <h2 className="mb-16">Awards and Recognition</h2>
            </div>

            {/* Swiper Section */}
            <div className="w-full">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                style={{ paddingBottom: "40px" }}
              >
                {awards.map((award, index) => (
                  <SwiperSlide
                    key={award.id}
                    className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                    style={{
                      width: "100%",
                      maxWidth: "600px",
                      minWidth: "220px",
                    }}
                    onClick={() => setZoomIndex(index)}
                  >
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-60 sm:h-72 md:h-80 object-cover"
                    />
                    <div className="px-4 py-3 text-left">
                      <h3 className="text-lg font-bold mb-1">{award.title}</h3>
                      <p className="text-sm text-gray-600">
                        {award.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal with Navigation */}
      {zoomIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "overlay") setZoomIndex(null);
          }}
          id="overlay"
        >
          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomIndex((zoomIndex - 1 + awards.length) % awards.length);
            }}
            className="absolute left-4 text-white text-4xl p-2 rounded-full hover:bg-white/20"
          >
            ‹
          </button>

          {/* Image */}
          <div className="flex flex-col items-center">
            <img
              src={awards[zoomIndex].image}
              alt={awards[zoomIndex].title}
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
            <h3 className="text-white text-xl font-bold mt-4">
              {awards[zoomIndex].title}
            </h3>
            <p className="text-white text-sm max-w-2xl text-center mt-1">
              {awards[zoomIndex].description}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomIndex((zoomIndex + 1) % awards.length);
            }}
            className="absolute right-4 text-white text-4xl p-2 rounded-full hover:bg-white/20"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Awards;
