import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, MessageCircle, Mountain, Pin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blogPosts.find(p => p.id === id));
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comments, setComments] = useState<Array<{name: string, date: string, text: string}>>([
    {
      name: 'John Doe',
      date: 'June 5, 2025',
      text: 'This is really insightful. I appreciate the detailed explanation of how clean water access impacts so many aspects of community life beyond just health.'
    },
    {
      name: 'Sarah Williams',
      date: 'June 3, 2025',
      text: 'I volunteered with a similar project and saw firsthand how transformative clean water access can be. Thank you for sharing these stories and highlighting the ripple effects!'
    }
  ]);
  
  useEffect(() => {
    // Find the post based on the id
    const foundPost = blogPosts.find(p => p.id === id);
    setPost(foundPost);
    
    // Set page title
    if (foundPost) {
      document.title = `${foundPost.title} | Noble Citizen Foundation`;
    } else {
      document.title = 'Article Not Found | Noble Citizen Foundation';
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment && email && name) {
      setComments([
        {
          name,
          date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          text: comment
        },
        ...comments
      ]);
      setComment('');
      setName('');
      setEmail('');
    }
  };
  
  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-gray-50">
        <div className="container-custom">
          <div className="text-center py-16">
            <h1 className="mb-6">Article Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <Link to="/blog" className="btn-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-primary-100 text-sm flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="text-primary-100 text-sm flex items-center">
                <Pin className="h-4 w-4 mr-1" />
                {post.place}
              </span>
            </div>
            <h1 className="mb-6 text-white">{post.title}</h1>
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
                <p className="text-sm text-primary-100">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white">
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
              {/* Featured Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>
              
              {/* Tags */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="flex items-center space-x-4 mb-12 pb-8 border-b">
                <span className="font-medium">Share:</span>
                <button className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.127 22.564c-1.159 0-2.285-.292-3.28-.844l-3.852 1.16 1.17-3.922c-.604-1.042-.918-2.243-.918-3.506C.253 9.125 5.081 4.25 11.063 4.25c2.89 0 5.59 1.128 7.62 3.175 2.03 2.047 3.146 4.77 3.143 7.677-.004 5.993-4.832 10.87-10.814 10.87zm6.157-8.254c-.318-.16-1.888-.933-2.183-.998-.293-.065-.505-.098-.717.16-.213.257-.82.847-.991 1.02-.172.173-.356.195-.673.033-.316-.162-1.335-.493-2.545-1.58-.94-.796-1.577-1.781-1.763-2.077-.187-.296-.021-.458.136-.596.14-.133.31-.347.464-.52.154-.174.204-.3.307-.5.103-.2.051-.374-.026-.524-.077-.15-.693-1.675-.967-2.291-.255-.596-.513-.513-.693-.513-.179 0-.385-.043-.59-.043-.205 0-.538.058-.82.331-.282.274-1.077.934-1.077 2.398s1.103 2.782 1.256 2.982c.154.2 2.159 3.288 5.224 4.613.732.315 1.3.503 1.742.645.732.225 1.398.2 1.924.118.588-.085 1.814-.744 2.072-1.457.257-.714.257-1.321.18-1.451-.077-.129-.282-.204-.598-.354" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-primary-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              
              {/* Comments */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h3>
                
                {/* Comment Form */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-semibold mb-4">Leave a Comment</h4>
                  <form onSubmit={handleSubmitComment}>
                    <div className="mb-4">
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Comment
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Share your thoughts..."
                        required
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your email (will not be published)"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
                
                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start">
                        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 font-semibold mr-4 flex-shrink-0">
                          {comment.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <h5 className="font-semibold">{comment.name}</h5>
                            <span className="text-gray-500 text-sm ml-4">{comment.date}</span>
                          </div>
                          <p className="text-gray-700">{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{post.author.name}</h4>
                    <p className="text-gray-600 text-sm">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  {post.author.name} is dedicated to creating positive change through innovative approaches to community development. With years of experience in the field, they bring valuable insights to our programs and communications.
                </p>
              </div>
              
              {/* Related Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map(post => post.category))).map((category, index) => (
                    <Link 
                      key={index} 
                      to={`/blog?category=${category}`}
                      className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">
                  Stay updated with our latest stories and project updates.
                </p>
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                  <button 
                    type="button"
                    className="w-full bg-white text-primary-600 font-medium py-2 rounded-md hover:bg-primary-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8">More Articles You Might Enjoy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;