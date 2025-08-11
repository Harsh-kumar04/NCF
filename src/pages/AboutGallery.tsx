import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const AboutGallery: React.FC = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  const images = [
    "/gallery-img/event-1-ncf.jpg",
    "/gallery-img/event-2-ncf.jpg",
    "/gallery-img/event-3-ncf.jpg",
    "/gallery-img/event-4-ncf.jpg",
    "/gallery-img/event-5-ncf.jpg",
    "/gallery-img/impact-1-ncf.jpg",
    "/gallery-img/impact-2-ncf.jpg",
    "/gallery-img/impact-3-ncf.jpg",
    "/gallery-img/impact-4-ncf.jpg",
    "/gallery-img/impact-5-ncf.jpg",
    "/gallery-img/impact-6-ncf.jpg",
    "/gallery-img/impact-7-ncf.jpg",
  ];

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="overflow-hidden bg-white pt-12 pb-2 mb-2 relative">
      <h2 className="text-center font-bold mb-6">
        Impact in Action: Our Gallery
      </h2>
      <p className="text-center text-gray-600 mb-6">
        A glimpse into our impactful work and the communities we serve.
      </p>

      {/* Main Gallery */}
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="px-4"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setZoomIndex(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Zoom Modal with Swipe */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            initialSlide={zoomIndex}
            onSlideChange={(swiper) => setZoomIndex(swiper.activeIndex)}
            className="w-full h-full flex items-center justify-center"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img
                  src={src}
                  alt={`Zoomed ${index + 1}`}
                  className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Close button */}
          <button
            onClick={() => setZoomIndex(null)}
            className="absolute top-4 right-6 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutGallery;
