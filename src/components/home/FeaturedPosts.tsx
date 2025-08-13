import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Logo and title */}
        <div className="flex items-center mb-4 space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-auto object-contain"
            loading="lazy"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

        <p className="text-gray-600 text-sm flex-grow line-clamp-3">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-600 font-semibold text-sm hover:underline self-start"
        >
          Read More &rarr;
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
      image: newz,
      logo: "https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:100/h:34/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/elementor/thumbs/jagran-josh-logo-freelogovectors.net_-qxz4aaw1i46rg3s0t2ugqze7ysnc0vxwx3h1fre0r8.png",
      title: "Noble Citizen Foundation Organises Tree Plantation Drive",
      description:
        "The Noble Citizen Foundation organised a tree plantation drive at Smriti Vatika in Gurugram, encouraging environmental responsibility...",
      link: "https://www.thedailyjagran.com/india/noble-citizen-foundation-organises-tree-plantation-drive-at-smriti-vatika-in-gurugram-10222012",
    },
    {
      image: nca,
      logo: "https://noblecitizenaward.in/wp-content/uploads/2023/08/mr-sahil-nobel-sitizen-award-600x585.png",
      title: "Noble Citizen Award 2023",
      description:
        "The Citizen Summit, convened by the Noble Citizen Foundation, represents a pivotal platform for collaboration and collective action. It celebrates outstanding individuals and addresses pressing societal issues, fostering inclusive development and positive change...",
      link: "https://noblecitizenaward.in/",
    },
  ];

  return (
    <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-3">Feature Posts</h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest from Noble Citizen Foundation.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4800, disableOnInteraction: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <FeaturePost {...post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
