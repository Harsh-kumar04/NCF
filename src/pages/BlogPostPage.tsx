import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2, Pin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';


// copy to clipboard link ----
const handleShare = () => {
  const postUrl = window.location.href; // current page URL
  navigator.clipboard.writeText(postUrl)
    .then(() => {
      alert("✅ Link copied to clipboard!");
    })
    .catch(() => {
      alert("❌ Failed to copy link.");
    });
};



const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blogPosts.find(p => p.id === id));
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comments, setComments] = useState<Array<{ name: string, date: string, text: string }>>([
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

                {(() => {
                  const currentUrl = encodeURIComponent(window.location.href);
                  const shareText = encodeURIComponent(post.title);

                  return (
                    <>
                      {/* Facebook */}
                      <button
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() =>
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank')
                        }
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                        </svg>
                      </button>

                      {/* Twitter */}
                      <button
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() =>
                          window.open(`https://x.com/intent/tweet?url=${currentUrl}&text=${shareText}`, '_blank')
                        }
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </button>

                      {/* LinkedIn */}
                      <button
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() =>
                          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`, '_blank')
                        }
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                        </svg>
                      </button>

                      {/* WhatsApp */}
                      <button
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() =>
                          window.open(`https://wa.me/?text=${shareText}%20${currentUrl}`, '_blank')
                        }
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.613-.916-2.209-.242-.58-.487-.501-.669-.511-.173-.007-.372-.009-.571-.009-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.21 5.077 4.377.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.287.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.451-4.437 9.885-9.888 9.885zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 .112 5.26.111 11.873c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.87 11.87 0 005.626 1.432h.005c6.616 0 11.877-5.26 11.88-11.874a11.82 11.82 0 00-3.483-8.424z" />
                        </svg>
                      </button>

                      <button onClick={handleShare} className="flex items-center gap-1">
                        <Share2 size={16} /> Share
                      </button>
                    </>
                  );
                })()}
              </div>


              {/* Comments */}

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