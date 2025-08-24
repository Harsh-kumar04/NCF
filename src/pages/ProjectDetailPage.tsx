import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find((p) => p.id === id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    // Find the project based on the id
    const foundProject = projects.find((p) => p.id === id);
    setProject(foundProject);

    // Set page title
    if (foundProject) {
      document.title = `${foundProject.title} | Noble Citizen Foundation`;
    } else {
      document.title = "Project Not Found | Noble Citizen Foundation";
    }

    // Reset image index when project changes
    setActiveImageIndex(0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-gray-50">
        <div className="container-custom">
          <div className="text-center py-16">
            <h1 className="mb-6">Project Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The project you're looking for doesn't exist or may have been
              moved.
            </p>
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Full gallery including main image
  const fullGallery = [project.image, ...project.gallery];

  const nextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === fullGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? fullGallery.length - 1 : prevIndex - 1
    );
  };

  const openGallery = (index: number) => {
    setActiveImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            <h1 className="mb-4 text-white">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-300 mr-1" />
                <span className="text-primary-100">{project.location}</span>
              </div>
              <div className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {project.category}
              </div>
              <div
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  project.status === "ongoing"
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {project.status === "ongoing" ? "Ongoing" : "Completed"}
              </div>
            </div>
            <p className="text-xl text-primary-100">{project.summary}</p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto fill-white"
          >
            <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div
                className="mb-8 rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => openGallery(0)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm cursor-pointer"
                    onClick={() => openGallery(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Project Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">
                  About This Project
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></div>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Project Goals
                </h3>
                <ul className="space-y-2">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Impact Stats */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Impact</h3>
                <div className="space-y-4">
                  {project.impact.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                    >
                      <p className="text-gray-600 text-sm mb-1">{item.label}</p>
                      <p className="text-2xl font-bold text-primary-600">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-primary-600 text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Support This Project
                </h3>
                <p className="mb-6">
                  Your contribution will help us continue and expand this
                  important work.
                </p>
                <Link
                  to="/get-involved"
                  className="block w-full bg-white text-primary-600 text-center font-medium py-3 rounded-md hover:bg-primary-50 transition-colors"
                >
                  Donate Now
                </Link>
              </div>

              {/* Related Projects */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {projects
                    .filter(
                      (p) =>
                        p.category === project.category && p.id !== project.id
                    )
                    .slice(0, 2)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/projects/${relatedProject.id}`}
                        className="block group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={relatedProject.image}
                              alt={relatedProject.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                              {relatedProject.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {relatedProject.summary}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close gallery"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <img
            src={fullGallery[activeImageIndex]}
            alt={`Gallery image ${activeImageIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {fullGallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeImageIndex ? "bg-white" : "bg-gray-500"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Get Involved</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            There are many ways to support our projects and make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="btn-accent">
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
