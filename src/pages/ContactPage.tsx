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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ firstName: '', lastName: '', email: '', company: '', inquiryType: 'general', message: '' });
  };

  return (
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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Ready to <span className="text-jc-teal">Scale?</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-medium max-w-lg">
              Whether you're looking to enable direct purchase, scale your brand's reach, or integrate your marketplace—our team is ready to help you accelerate growth.
            </p>
          </div>

          <div className="space-y-8 bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jc-teal/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-jc-teal" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email Us</h4>
                <a href="mailto:jointcommerce@jointcommerce.co" className="text-white/70 hover:text-jc-teal transition-colors">jointcommerce@jointcommerce.co</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jc-teal/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-jc-teal" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Call Us</h4>
                <a href="tel:949-698-2094" className="text-white/70 hover:text-jc-teal transition-colors">949-698-2094</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Headquarters</h4>
                <p className="text-white/70">Irvine, CA</p>
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
          <form onSubmit={handleSubmit} className="bg-[#0a0f0f] p-8 md:p-10 rounded-[2.5rem] border border-jc-teal/20 shadow-[0_0_40px_rgba(0,163,143,0.1)] space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80">First Name <span className="text-jc-teal">*</span></label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all"
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80">Last Name <span className="text-jc-teal">*</span></label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all"
                  placeholder="Doe" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">Business Email <span className="text-jc-teal">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all"
                placeholder="john@company.com" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="company" className="block text-sm font-medium text-white/80">Company Name</label>
                 <input 
                   type="text" 
                   id="company" 
                   name="company" 
                   value={formData.company}
                   onChange={handleChange}
                   className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all"
                   placeholder="Your Company" 
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="inquiryType" className="block text-sm font-medium text-white/80">I am a...</label>
                 <select 
                   id="inquiryType" 
                   name="inquiryType"
                   value={formData.inquiryType}
                   onChange={handleChange}
                   className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all appearance-none"
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
              <label htmlFor="message" className="block text-sm font-medium text-white/80">How can we help? <span className="text-jc-teal">*</span></label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={4} 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jc-teal focus:ring-1 focus:ring-jc-teal transition-all resize-none"
                placeholder="Tell us about your goals..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-jc-teal text-jc-dark font-bold text-lg rounded-xl hover:bg-white transition-colors duration-300 shadow-lg shadow-jc-teal/20 flex items-center justify-center gap-2 group mt-4!"
            >
              Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
