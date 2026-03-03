import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ firstName: '', lastName: '', email: '', company: '', inquiryType: 'general', message: '' });
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <span className="text-jc-teal font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ready to Scale?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-lg">
              Whether you're looking to enable direct purchase, scale your brand's reach, or integrate your marketplace—our team is ready to help you accelerate growth.
            </p>
          </div>

          <div className="space-y-8 bg-gray-50 p-8 rounded-[2rem] border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jc-teal/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-jc-teal" />
              </div>
              <div>
                <h4 className="text-gray-900 font-medium mb-1">Email Us</h4>
                <a href="mailto:jointcommerce@jointcommerce.co" className="text-gray-500 hover:text-jc-teal transition-colors">jointcommerce@jointcommerce.co</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jc-teal/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-jc-teal" />
              </div>
              <div>
                <h4 className="text-gray-900 font-medium mb-1">Call Us</h4>
                <a href="tel:949-698-2094" className="text-gray-500 hover:text-jc-teal transition-colors">949-698-2094</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h4 className="text-gray-900 font-medium mb-1">Headquarters</h4>
                <p className="text-gray-500">Irvine, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name <span className="text-jc-teal">*</span></label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all placeholder-gray-400"
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name <span className="text-jc-teal">*</span></label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all placeholder-gray-400"
                  placeholder="Doe" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business Email <span className="text-jc-teal">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all placeholder-gray-400"
                placeholder="john@company.com" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                 <input 
                   type="text" 
                   id="company" 
                   name="company" 
                   value={formData.company}
                   onChange={handleChange}
                   className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all placeholder-gray-400"
                   placeholder="Your Company" 
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">I am a...</label>
                 <select 
                   id="inquiryType" 
                   name="inquiryType"
                   value={formData.inquiryType}
                   onChange={handleChange}
                   className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all appearance-none"
                 >
                   <option value="general">Select an option</option>
                   <option value="retailer">Retailer / Dispensary</option>
                   <option value="brand">Brand</option>
                   <option value="agency">Agency</option>
                   <option value="partner">Technology Partner</option>
                   <option value="other">Other</option>
                 </select>
               </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help? <span className="text-jc-teal">*</span></label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={4} 
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all resize-none placeholder-gray-400"
                placeholder="Tell us about your goals..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-jc-teal text-white font-bold text-lg rounded-xl hover:bg-jc-mint transition-colors duration-300 shadow-sm flex items-center justify-center gap-2 group mt-4!"
            >
              Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
