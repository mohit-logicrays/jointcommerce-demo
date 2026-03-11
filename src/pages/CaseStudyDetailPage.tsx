import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, BarChart3, Palette, Shield, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import caseStudiesData from '../data/caseStudies.json';
import AiroImage from "../../public/brands/Airo-Image.webp";
import AiroProductImage from "../../public/brands/Airo-Products.png";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  results: {
    roas: string;
    revenue: string;
    ctr: string;
    visits: string;
  };
  howItWorks?: Array<{
    step: string;
    title: string;
    icon: string;
  }>;
  campaignStrategy?: {
    description: string;
    technology: string;
    reporting: string;
  };
  campaignObjective?: string[];
  whyBothWin?: {
    title: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = (caseStudiesData as any[]).find(cs => cs.slug === slug) as CaseStudy | undefined;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-jc-dark mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-jc-teal hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      subscription: ShoppingBag,
      delivery: Truck,
      attribution: BarChart3,
      creative: Palette
    };
    return icons[iconName] || ShoppingBag;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-jc-dark hover:text-jc-teal transition-colors duration-300 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section with Logo and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Logo and Description */}
          <div>
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-jc-dark mb-2 uppercase tracking-tight">
                <img src={AiroImage} alt="Airo Brand" className="h-16" />
              </h1>
            </div>
            <p className="text-xl leading-relaxed">
              Co-Op Advertising Program With <span className="font-bold text-jc-dark">Airo Brands</span> To Drive Sell-Thru And Measurable Online Sales
            </p>
          </div>

          {/* Right: Product Image */}
          <div className="relative">
            <div className="bg-[#6EDDD2] rounded-2xl p-8 shadow-2xl">
              <div className="relative">
                <img 
                  src={AiroProductImage} 
                  alt="Airo Product Showcase" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Metrics Section with Gray Background */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metrics Grid */}
          <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {[
              { label: 'ROAS', value: caseStudy.results?.roas || '27.48X', icon: TrendingUp },
              { label: 'DRIVEN REVENUE', value: caseStudy.results?.revenue || '$192,290', icon: BarChart3 },
              { label: 'CTR', value: caseStudy.results?.ctr || '0.15%', icon: Target },
              { label: 'VISITS', value: caseStudy.results?.visits || '522', icon: Users }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center flex-shrink-0 min-w-[160px]"
              >
                {/* Label and Icon in horizontal layout */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                    {metric.label}
                  </p>
                  <metric.icon className="w-5 h-5 text-jc-teal" />
                </div>
                {/* Value below */}
                <p className="text-3xl font-black text-jc-dark whitespace-nowrap">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Strategy Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Campaign Strategy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-jc-dark mb-6 uppercase tracking-tight">
                CAMPAIGN STRATEGY
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{caseStudy.campaignStrategy?.description}</p>
                <p>{caseStudy.campaignStrategy?.technology}</p>
                <p>{caseStudy.campaignStrategy?.reporting}</p>
              </div>
            </motion.div>

            {/* Right: Campaign Objective */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#6EDDD2] rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">
                CAMPAIGN OBJECTIVE
              </h2>
              <ul className="space-y-4">
                {caseStudy.campaignObjective?.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#000000] mt-2 flex-shrink-0"></div>
                    <span className="text-lg">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Both Win Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-jc-dark mb-4 uppercase tracking-tight">
              {caseStudy.whyBothWin?.title}
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-4xl">
              {caseStudy.whyBothWin?.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.whyBothWin?.benefits.map((benefit, idx) => {
                const icons = [Shield, TrendingUp, Users, Target];
                const Icon = icons[idx] || Shield;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-jc-teal transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-jc-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-jc-teal" />
                    </div>
                    <h3 className="text-sm font-bold text-jc-dark mb-3 uppercase tracking-wider">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section - Green Background */}
      <div className="bg-[#6EDDD2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-black text-center mb-16 uppercase tracking-tight"
          >
            HOW IT WORKS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/30" style={{ width: 'calc(100% - 8rem)', marginLeft: '4rem' }}></div>

            {caseStudy.howItWorks?.map((step, idx) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative text-center"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-[#52C41A]" />
                  </div>

                  {/* Step Number and Title */}
                  <h3 className="text-black font-bold text-lg mb-3 uppercase tracking-wide">
                    {step.step}
                  </h3>
                  <p className="text-black/90 text-sm leading-relaxed">
                    {step.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section - Light Gray Background with Black Box */}
      <div className="bg-gray-100 py-20 relative">
        {/* Teal accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#6EDDD2]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#6EDDD2] rounded-2xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to replicate these results for your brand?
            </h2>
            <p className="text-black-400 mb-8 text-lg">
              Schedule a 15-minute consultation with our growth experts to see how we can drive your sell-thru.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-jc-dark px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-jc-teal hover:text-white transition-all duration-300 shadow-lg"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}