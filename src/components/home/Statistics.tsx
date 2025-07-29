import React from "react";
import { Users, School, Globe, Home } from "lucide-react";

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: "300,000",
      label: "Cyber Awareness",
    },
    {
      icon: <School className="h-8 w-8 text-white" />,
      value: "2,000",
      label: "Cyber Awareness Training",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      value: "1,900+ KG",
      label: "Cloths Distribution Drive",
    },
    {
      icon: <Home className="h-8 w-8 text-white" />,
      value: "4,00+",
      label: "Education through Digital Learning Platform",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary-600 p-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary-500">
                {stat.value}
              </h3>
              <p className="text-gray-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
