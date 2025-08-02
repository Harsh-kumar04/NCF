import React from "react";
import {
  Megaphone,
  School,
  Globe,
  Home,
  Heart,
  Shield,
  BookOpen,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: <Megaphone className="h-8 w-8 text-white" />,
      value: "300,000+",
      label: "Cyber Awareness",
      subLabel: "Metro Hoardings",
    },

    {
      icon: <School className="h-8 w-8 text-white" />,
      value: "2,000+",
      label: "Cyber Training",
      subLabel: "Students Enrolled",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      value: "1,900+ KG",
      label: "Clothes Distributed",
      subLabel: "Community Drives",
    },
    {
      icon: <Home className="h-8 w-8 text-white" />,
      value: "400+",
      label: "Digital Learning",
      subLabel: "Students enrolled",
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      value: "460+",
      label: "Mission Oxygen",
      subLabel: "Patients outreached",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      value: "60,000+",
      label: "Food Distribution",
      subLabel: "Meals Served",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      value: "2,000+",
      label: "Book Drive",
      subLabel: "Students Benefited",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container-custom">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary-600 p-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-1 text-primary-500">
                  {stat.value}
                </h3>
                <p className="text-gray-200 font-medium">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.subLabel}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Statistics;
