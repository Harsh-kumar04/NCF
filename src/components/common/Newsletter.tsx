import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would submit to a backend here
    console.log('Subscribing email:', email);
    
    // Show success message
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
        
        {error && (
          <p className="text-error-500 text-sm mt-1">{error}</p>
        )}
        
        {isSubmitted && (
          <p className="text-green-400 text-sm mt-1 animate-fade-in">
            Thank you for subscribing!
          </p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;