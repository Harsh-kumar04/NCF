import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import Card from '../components/common/Card';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Blog | Noble Citizen Foundation';
    window.scrollTo(0, 0);
  }, []);
  
  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on search term and category
  useEffect(() => {
    let results = blogPosts;
    
    // Filter by category
    if (activeCategory !== 'All') {
      results = results.filter(post => post.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        post => 
          post.title.toLowerCase().includes(term) || 
          post.summary.toLowerCase().includes(term) ||
          post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(results);
  }, [searchTerm, activeCategory]);
  
  // Get featured post (most recent)
  const featuredPost = blogPosts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Our Blog</h1>
            <p className="text-xl text-primary-100 mb-6">
              Stories, insights, and updates from our work around the world.
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

      {/* Featured Post */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8">Featured Article</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6">{featuredPost.summary}</p>
              <div className="flex items-center mb-6">
                <img 
                  src={featuredPost.author.avatar} 
                  alt={featuredPost.author.name} 
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">{featuredPost.author.name}</p>
                  <p className="text-sm text-gray-500">{featuredPost.author.role}</p>
                </div>
              </div>
              <Link 
                to={`/blog/${featuredPost.id}`} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-t">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Category Filters */}
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
            
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.summary}</p>
                    <div className="flex items-center mb-4">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="mt-auto flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Articles Found</h3>
              <p className="text-gray-600 mb-8">
                No articles match your current search criteria. Try adjusting your filters or search term.
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

      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with our latest stories, project updates, and opportunities to get involved.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button 
                  type="button"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;