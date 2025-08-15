import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Card from "../common/Card";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  // Take just the first 3 projects for the homepage
  const featuredProjects = projects.slice(2, 5);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="mb-3">Our Impact Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover how we're making a difference through our various
              initiatives around the world.
            </p>
          </div>
          <Link
            to="/projects"
            className="flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.summary}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-auto flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
