import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Resource data (same as in ResourcesPage)
const resources = [
  {
    id: 1,
    title: 'Brand Strategy Framework',
    subtitle: 'Complete Guide',
    description: 'A comprehensive framework to help you define your brand strategy, positioning, and messaging. Perfect for founders and marketing teams.',
    longDescription: 'This comprehensive brand strategy framework is designed specifically for founders and marketing teams who want to build a strong, differentiated brand. Inside you\'ll find step-by-step guidance on defining your brand purpose, identifying your target audience, crafting your unique value proposition, and developing a cohesive messaging strategy that resonates with your customers.',
    tags: ['Strategy', 'Positioning', 'Messaging'],
    image: '/GoFounder Cover.png',
    downloadUrl: '/resources/brand-strategy-framework',
    category: 'Strategy',
    fileSize: '2.3 MB',
    format: 'PDF',
    pages: '24 pages'
  },
  {
    id: 2,
    title: 'Content Calendar Template',
    subtitle: 'Marketing Tool',
    description: 'A 90-day content calendar template with strategic prompts and posting guidelines to keep your content consistent and engaging.',
    longDescription: 'A 90-day content calendar template with strategic prompts and posting guidelines to keep your content consistent and engaging.',
    tags: ['Content', 'Social Media', 'Planning'],
    image: '/GoFounder Cover.png',
    downloadUrl: '/resources/content-calendar',
    category: 'Marketing',
    fileSize: '1.8 MB',
    format: 'Excel/PDF',
    pages: '12 pages'
  },
  {
    id: 3,
    title: 'Founder Brand Audit',
    subtitle: 'Assessment Tool',
    description: 'A step-by-step audit to evaluate your current brand positioning and identify opportunities for improvement and growth.',
    longDescription: 'Take an honest look at your current brand positioning with this comprehensive audit tool. Designed specifically for founders, this assessment will help you identify gaps in your brand strategy, uncover opportunities for improvement, and create a roadmap for building a stronger, more authentic brand that connects with your audience.',
    tags: ['Audit', 'Assessment', 'Growth'],
    image: '/GoFounder Cover.png',
    downloadUrl: '/resources/founder-brand-audit',
    category: 'Assessment',
    fileSize: '3.1 MB',
    format: 'PDF',
    pages: '18 pages'
  },
];

export const ResourceDetailPage: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Find the resource based on the URL parameter
  const resource = resources.find(r => r.downloadUrl === `/resources/${resourceId}`);

  if (!resource) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The resource you're looking for doesn't exist.</p>
            <Link
              to="/resources"
              className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition-colors duration-200"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsDownloaded(true);
    setIsSubmitting(false);
    
    // In a real implementation, you would:
    // 1. Send email to your backend
    // 2. Trigger download
    // 3. Track the download
  };

  return (
    <Layout>
      <div className="w-full bg-white min-h-screen">
        {/* Hero Section */}
        <section className="w-full pt-44 pb-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="text-center">
                <span className="inline-block mb-6 px-6 py-2 bg-pink-100 text-pink-600 text-lg font-bold uppercase" style={{ borderRadius: '0.84rem' }}>
                  {resource.category}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">
                  {resource.title}
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Inter']">
                  {resource.description}
                </p>
              </div>
            </motion.div>

            {/* Resource Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {/* Left Column - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Montserrat']">
                    What's Inside
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-['Inter']">
                    {resource.longDescription}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Download Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              {!isDownloaded ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Montserrat']">
                    Get Your Free Download
                  </h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Enter your email address to download this resource instantly.
                  </p>

                  <form onSubmit={handleDownload} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent font-['Inter']"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="px-8 py-3 text-white font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-['Inter'] hover:opacity-90"
                        style={{ backgroundColor: '#e44782', borderRadius: '0.84rem' }}
                      >
                        {isSubmitting ? 'Processing...' : 'Download Now'}
                      </button>
                    </div>
                  </form>

                  <p className="text-sm text-gray-500 mt-4 font-['Inter']">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Montserrat']">
                    Download Complete!
                  </h3>
                  <p className="text-gray-600 mb-6 font-['Inter']">
                    Your download should start automatically. If it doesn't, check your downloads folder.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => window.location.reload()}
                      className="block w-full px-8 py-3 text-white font-bold transition-colors duration-200 font-['Inter'] hover:opacity-90"
                      style={{ backgroundColor: '#e44782', borderRadius: '0.84rem' }}
                    >
                      Download Again
                    </button>
                    <Link
                      to="/resources"
                      className="block w-full px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors duration-200 font-['Inter']"
                    >
                      Browse More Resources
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>



        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 