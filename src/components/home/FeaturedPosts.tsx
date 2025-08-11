import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import VishvasImage from "/feature-posts/vishvas.webp";
import newz from "/feature-posts/newz.webp";
import nca from "/feature-posts/ncs-1-ncf.jpeg";

type FeaturePostProps = {
  image: string;
  logo: string;
  title: string;
  description: string;
  link: string;
};

const FeaturePost: React.FC<FeaturePostProps> = ({
  image,
  logo,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full h-full flex flex-col transition-transform hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-9 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center mb-3 space-x-2">
            <img src={logo} alt="Logo" className="w-19 h-6 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-blue-600 font-semibold hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const FeaturedPostsSection: React.FC = () => {
  const posts = [
    {
      image: VishvasImage,
      logo: "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:100/h:34/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/jagran-josh-logo-freelogovectors.net_-qxz4aaw1i46rg3s0t2ugqze7ysnc0vxwx3h1fre0r8.png",
      title: "Noble Citizen Foundation Organises Cyber Awareness Program",
      description:
        "The Noble Citizen Foundation and Vishwas News organised a media literacy and cyber awareness program in collaboration with Hansraj College...",
      link: "https://www.thedailyjagran.com/india/noble-citizen-foundation-and-vishwas-news-organise-media-literacy-and-cyber-awareness-program-in-collaboration-with-hansraj-college-10200924",
    },
    {
      image: nca,
      logo: "https://noblecitizenaward.in/wp-content/uploads/2023/08/mr-sahil-nobel-sitizen-award-600x585.png",
      title: "Noble Citizen Foundation Organises Tree Plantation Drive",
      description:
        "The Citizen Summit, convened by the Noble Citizen Foundation, represents a pivotal platform for collaboration and collective action. It celebrates outstanding individuals and addresses pressing societal issues, fostering inclusive development and positive change...",
      link: "https://noblecitizenaward.in/",
    },
    {
      image: newz,
      logo: "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:100/h:34/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/jagran-josh-logo-freelogovectors.net_-qxz4aaw1i46rg3s0t2ugqze7ysnc0vxwx3h1fre0r8.png",
      title: "Noble Citizen Foundation Organises Tree Plantation Drive",
      description:
        "The Noble Citizen Foundation organised a tree plantation drive at Smriti Vatika in Gurugram, encouraging environmental responsibility...",
      link: "https://www.thedailyjagran.com/india/noble-citizen-foundation-organises-tree-plantation-drive-at-smriti-vatika-in-gurugram-10222012",
    },
  ];

  return (
    <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2
          className="mb-6 text-4xl font-semibold text-gray-800 tracking-tight"
          style={{ color: "#7F1D1D" }}
        >
          Featured Posts
        </h2>
        <p className="text-gray-600 text-lg md:text-base">
          Stay updated with the latest from Noble Citizen Foundation.
        </p>
      </div>

      <div className="mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index} className="flex">
              <div className="flex-1 h-full">
                <FeaturePost {...post} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedPostsSection;