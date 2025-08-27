import React from "react";
import {
  Megaphone,
  School,
  Globe,
  Home,
  Heart,
  Shield,
  BookOpen,
  TreePine,
  Users,
  Award,
  Package,
  Trash2,
  Bike,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Statistics: React.FC = () => {
  const stats = [
   {
  icon: <Shield className="h-8 w-8 text-white" />,
  value: "500+",
  label: "Lives Saved",
  subLabel: "Oxygen support during COVID-19",
},

{
  icon: <School className="h-8 w-8 text-white" />,
  value: "2500+",
  label: "Students Trained",
  subLabel: "Cyber safety & online awareness",
},

{
  icon: <TreePine className="h-8 w-8 text-white" />,
  value: "13,000+",
  label: "Trees Planted",
  subLabel: "Greener & healthier cities",
},

{
  icon: <Users className="h-8 w-8 text-white" />,
  value: "5000+",
  label: "Volunteers Engaged",
  subLabel: "Youth-led development across India",
},

{
  icon: <Heart className="h-8 w-8 text-white" />,
  value: "60,000+",
  label: "Meals Served",
  subLabel: "Food support to vulnerable communities",
},

{
  icon: <Home className="h-8 w-8 text-white" />,
  value: "1",
  label: "Community Park Restored",
  subLabel: "Clean & green public space",
},

{
  icon: <Award className="h-8 w-8 text-white" />,
  value: "15+",
  label: "Awards Won",
  subLabel: "National & international recognition",
},

{
  icon: <Globe className="h-8 w-8 text-white" />,
  value: "17",
  label: "Represented India",
  subLabel: "At climate forums & policy negotiations",
},

{
  icon: <Package className="h-8 w-8 text-white" />,
  value: "2000+ KG",
  label: "Clothes & Essentials",
  subLabel: "Distributed to underserved families",
},

{
  icon: <Trash2 className="h-8 w-8 text-white" />,
  value: "1960+ KG",
  label: "Solid Waste Collected",
  subLabel: "Through multiple cleanliness drives",
},

{
  icon: <Bike className="h-8 w-8 text-white" />,
  value: "10",
  label: "Families Supported",
  subLabel: "Livelihood via EV bike distribution",
},

  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="mb-3 text-white">Our Journey in Numbers</h3>
      </div>
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
