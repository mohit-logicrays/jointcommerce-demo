'use client';

import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Truck, BarChart3, Palette, Shield, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import caseStudiesData from '@/app/data/caseStudies.json';

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  brandLogo?: string;
  homepageImage?: string;
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

interface Props {
  slug: string;
}

export function CaseStudyDetailPage({ slug }: Props) {
  const caseStudy = (caseStudiesData as any[]).find(cs => cs.slug === slug) as CaseStudy | undefined;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-jc-dark mb-4">Case Study Not Found</h1>
          <Link href="/" className="text-jc-teal hover:underline">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <Link
          href="/"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Logo, Description, and Metrics */}
          <div>
            <div className="mb-8">
              {caseStudy.brandLogo ? (
                <img src={caseStudy.brandLogo} alt={`${caseStudy.title} Brand Logo`} className="h-16 object-contain" />
              ) : (
                <h1 className="text-6xl font-bold text-jc-dark mb-2 uppercase tracking-tight">
                  {caseStudy.title}
                </h1>
              )}
            </div>
            <p className="text-md leading-relaxed font-medium mb-8">
              {caseStudy.description}
            </p>

            {/* Metrics Grid - Flexible Layout */}
            {(() => {
              const r = caseStudy.results;
              const availableMetrics = [
                { label: 'ROAS', value: r?.roas, icon: TrendingUp },
                { label: 'DRIVEN REVENUE', value: r?.revenue, icon: BarChart3 },
                { label: 'CTR', value: r?.ctr, icon: Target },
                { label: 'VISITS', value: r?.visits, icon: Users }
              ].filter(metric => metric.value && metric.value !== 'N/A');
              
              if (availableMetrics.length === 0) return null;
              
              return (
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {availableMetrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover="hover"
                      variants={{
                        hover: {
                          y: -8,
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }
                      }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-jc-teal hover:bg-gray-50 text-center cursor-pointer transition-colors duration-300 group"
                    >
                      {/* Label and Icon in horizontal layout */}
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <p className="text-[10px] text-gray-500 tracking-wider font-bold">
                          {metric.label}
                        </p>
                        <motion.div
                          variants={{
                            hover: {
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.2,
                              transition: { duration: 0.5 }
                            }
                          }}
                        >
                          <metric.icon className="w-4 h-4 text-jc-teal" />
                        </motion.div>
                      </div>
                      {/* Value below */}
                      <p className="text-2xl font-black text-jc-dark whitespace-nowrap">
                        {metric.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Right: Homepage / Product Image */}
          <div className="relative">
            <div className="bg-[#6EDDD2] rounded-2xl p-8 shadow-2xl">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <img
                  src={caseStudy.thumbnail}
                  alt={`${caseStudy.title} Product Showcase`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Campaign Strategy Section */}
      <div className={`bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Campaign Strategy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-jc-dark mb-6 tracking-tight">
                Campaign Strategy
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
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Campaign Objective
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
            <h2 className="text-3xl font-bold text-jc-dark mb-4 tracking-tight">
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
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-jc-teal transition-all duration-300 hover:shadow-2xl cursor-pointer group"
                  >
                    <motion.div
                      className="w-12 h-12 bg-jc-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-jc-teal/20 transition-all duration-300"
                      whileHover={{
                        rotate: 5,
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon className="w-6 h-6 text-jc-teal group-hover:text-jc-teal group-hover:scale-110 transition-all duration-300" />
                    </motion.div>
                    <motion.h3
                      className="text-sm font-bold text-jc-dark mb-3 tracking-wider group-hover:text-jc-teal transition-colors duration-300"
                      whileHover={{ x: 2 }}
                    >
                      {benefit.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ x: 2 }}
                    >
                      {benefit.description}
                    </motion.p>
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
    </div>
  );
}