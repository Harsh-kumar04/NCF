import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ✅ Import all images using Vite's glob import
const rawImages = import.meta.glob("/src/assets/partners/*.png", {
  eager: true,
  as: "url",
}) as Record<string, string>;

// ✅ Convert Record into an array with src & alt
const partnerLogos = Object.entries(rawImages).map(([path, src]) => ({
  src,
  alt: path.split("/").pop()?.replace(".webp", "") || "Partner",
}));

const PartnerCarousel: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-semibold mb-5">Our Partners</h2>
        <p className="text-gray-600 mb-2">
          Thanks to our partners and supporters, we're turning dreams into
          reality. Join us in shaping a brighter future!
        </p>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerCarousel;
