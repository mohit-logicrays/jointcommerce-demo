import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import caseStudiesData from '../data/caseStudies.json';

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  brandLogo?: string;
  homepageImage?: string;
  results: Record<string, string>;
}

export function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastInteractionRef = useRef<number>(Date.now());

  // Auto-slide functionality - only runs on mount
  useEffect(() => {
    const startAutoSlide = () => {
      timerRef.current = setInterval(() => {
        // Only auto-advance if user hasn't interacted recently
        if (Date.now() - lastInteractionRef.current > 4500) {
          setCurrentSlide((prev) => (prev + 1) % caseStudiesData.length);
        }
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    lastInteractionRef.current = Date.now(); // Track user interaction
  };

  const currentCaseStudy = (caseStudiesData as CaseStudy[])[currentSlide];

  return (
    <section id="case-studies" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Carousel Content */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-center"
            >
            {/* Main Visual */}
            {currentCaseStudy.homepageImage && (
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-4xl h-[400px]">
                  <img
                    src={currentCaseStudy.homepageImage}
                    alt={`${currentCaseStudy.title} Case Study Visual`}
                    className="w-full h-full rounded-lg object-contain"
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-12">
              <p className="text-xl text-jc-dark font-medium max-w-3xl mx-auto leading-relaxed">
                {currentCaseStudy.id === 'airo' ? (
                  <>
                    Co-Op Advertising Program With <span className="font-bold">Airo Brands</span> To Drive Sell-Thru And Measurable Online Sales
                  </>
                ) : (
                  currentCaseStudy.description
                )}
              </p>
            </div>

            {/* View Case Study Button */}
            <div className="mb-12">
              <Link
                to={`/case-studies/${currentCaseStudy.slug}`}
                className="inline-flex items-center gap-3 bg-[#6EDDD2] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg group"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3">
            {caseStudiesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-jc-dark'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
