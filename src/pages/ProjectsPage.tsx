import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import Card from '../components/common/Card';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Our Projects | Noble Citizen Foundation';
  }, []);

  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on search term and category
  useEffect(() => {
    let results = projects;
    
    // Filter by category
    if (activeCategory !== 'All') {
      results = results.filter(project => project.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.summary.toLowerCase().includes(term) ||
          project.location.toLowerCase().includes(term)
      );
    }
    
    setFilteredProjects(results);
  }, [searchTerm, activeCategory]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Our Projects</h1>
            <p className="text-xl text-primary-100 mb-6">
              Discover the initiatives we're implementing around the world to create lasting positive change in communities.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white">
            <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-primary-600 mr-2" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="bg-gray-800/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {project.location}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === 'ongoing' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.summary}</p>
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="mt-auto flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Projects Found</h3>
              <p className="text-gray-600 mb-8">
                No projects match your current search criteria. Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Support Our Projects</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Your contribution can help us expand our impact and reach more communities in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="btn-accent">
              Donate Now
            </Link>
            <Link to="/get-involved" className="btn-outline border-white text-white hover:bg-white/10">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;