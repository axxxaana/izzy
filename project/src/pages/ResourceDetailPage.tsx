import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { FooterSection } from '../screens/ElementLight/sections/FooterSection';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Resource data (same as in ResourcesPage)
const resources = [
  {
    id: 1,
    title: 'Messaging Gaps Costing You Leads',
    subtitle: 'Lead Generation Guide',
    description: 'Identify and fix messaging gaps costing you customers. Learn how to craft compelling messages that convert prospects into leads.',
    longDescription: 'Are you losing potential customers because your messaging isn\'t hitting the mark? This comprehensive guide reveals the most common messaging gaps that cost founders and businesses valuable leads. Learn practical strategies to identify weak spots and craft compelling value propositions that convert prospects into paying customers.',
    tags: ['Messaging', 'Lead Generation', 'Conversion'],
    image: '/resource-1.png',
    downloadUrl: '/resources/brand-strategy-framework',
    category: 'Strategy',
    fileSize: '2.3 MB',
    format: 'PDF',
    pages: '24 pages'
  },
  {
    id: 2,
    title: 'Build Your LinkedIn Personal Brand',
    subtitle: 'Personal Branding Guide',
    description: 'A complete guide to building a powerful personal brand on LinkedIn. Learn the strategies and tactics that top founders use to grow their influence.',
    longDescription: 'Transform your LinkedIn presence into a powerful personal brand that attracts opportunities and drives business growth. Learn the exact strategies used by successful founders to build authority, craft compelling profiles, and position yourself as a thought leader in your industry.',
    tags: ['LinkedIn', 'Personal Branding', 'Thought Leadership'],
    image: '/resource-2.png',
    downloadUrl: '/resources/content-calendar',
    category: 'Personal Branding',
    fileSize: '1.8 MB',
    format: 'PDF',
    pages: '18 pages'
  },
  {
    id: 3,
    title: 'The Hook Framework',
    subtitle: 'Content Strategy Guide',
    description: 'Master the art of creating irresistible hooks that capture attention and drive engagement. Learn the proven framework used by top content creators and marketers to grow their audience.',
    longDescription: 'Stop creating content that gets ignored. The Hook Framework reveals the psychology behind what makes people stop scrolling and pay attention. Learn how to craft compelling hooks that grab attention in the first 3 seconds, increase engagement rates, and turn casual scrollers into engaged followers.',
    tags: ['Content Creation', 'Engagement', 'Psychology'],
    image: '/resource-3.png',
    downloadUrl: '/resources/founder-brand-audit',
    category: 'Content Strategy',
    fileSize: '3.1 MB',
    format: 'PDF',
    pages: '22 pages'
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
        {/* Main Content Section */}
        <section className="w-full pt-40 pb-24 px-4 md:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="max-w-3xl mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content and Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Left Column - Download Form */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-10 shadow-xl border border-pink-100"
                >
              {!isDownloaded ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Anton']">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Anton']">
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

              {/* Right Column - What's Inside */}
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-1 font-['Anton']">
                  What's Inside
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-['Inter']">
                  {resource.longDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Footer */}
        <FooterSection />
      </div>
    </Layout>
  );
}; 