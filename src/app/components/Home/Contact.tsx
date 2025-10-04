'use client';

import React, { useState } from 'react';

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black lg:px-20 text-white overflow-auto">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16 flex-grow min-h-[min-content]">
        {/* Top Header Section */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0 mb-12 lg:mb-20">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] font-[700] bg-clip-text text-transparent">
                Let's Talk
              </span>
            </h1>
          </div>
          <div className="text-center lg:flex-1">
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
            Ready to transform your business operations?
            Contact us today to learn more about how we can help you achieve your goals.
     </p>
          </div>
          <div className="text-center lg:text-right">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-md overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]">
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                See More Details
              </span>
              <div className="absolute rounded-md inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
            </button>
          </div>
        </div>

        {/* Main Content - Big Box */}
        <div className="relative">
      
          <div
            className="relative rounded-3xl p-4 lg:p-12 ml-0 lg:ml-[150px]"
          >
            {/* Outer container with gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradint-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px] overflow-hidden">
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                {/* All gradient layers INSIDE the black background */}
                <div className="absolute inset-0">
                  {/* Edge glow only - positioned inside with padding */}
  <div className="relative w-[100%] h-[90vh] rounded-[40px] overflow-hidden">
  {/* Top Gradient */}
  <div className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#6F61ED] to-transparent opacity-100"></div>

  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6F61ED] to-transparent opacity-100"></div>

  {/* Left Gradient */}
  <div className="absolute top-0 left-0 bottom-0 w-[40px] bg-gradient-to-r from-[#6F61ED] to-transparent opacity-100"></div>

  {/* Right Gradient */}
  <div className="absolute top-0 right-0 bottom-0 w-[30px] bg-gradient-to-l from-[#6F61ED] to-transparent opacity-100"></div>
</div>

                  {/* Corner glows */}
                  {/* <div className="absolute top-0 left-0 w-[150px] h-[50px] bg-gradient-to-br from-[#7B6BFF] to-transparent opacity-40 blur-[40px]"></div>
                  <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-[#7B6BFF] to-transparent opacity-40 blur-[40px]"></div>
                  <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-[#6B5BEF] to-transparent opacity-40 blur-[40px]"></div>
                  <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-gradient-to-tl from-[#6B5BEF] to-transparent opacity-40 blur-[40px]"></div> */}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 pl-0 lg:pl-48">
              <h2 className="text-3xl lg:text-5xl font-semibold mb-8 lg:mb-12 leading-tight !text-[#FFFFFF5E]">
                Tell us about your project, your company & your goals!
              </h2>

              <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 mb-8 lg:mb-12">
                <div className="flex items-start space-x-2 lg:space-x-4">
                  <div className="w-10 h-8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Quick Response</h3>
                    <p className="text-gray-400 text-sm">
                      If you're ready to create and collaborate, we'd love to hear from you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 lg:space-x-4">
                  <div className="w-10 h-8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Clear Next Step</h3>
                    <p className="text-gray-400 text-sm">
                      After the consultation, we'll provide you with a detailed plan and timeline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#101010] rounded-2xl p-4 lg:p-6 border border-gray-800 max-w-full relative">
                <div className="absolute top-4 left-4 text-white text-2xl font-serif">"</div>
                <div className="pt-6 pb-12">
                  <p className="text-[#888888] text-md leading-relaxed pl-4">
                    The future belongs to those who dare to imagine. Together, we'll turn imagination into interactive experiences that inspire.    
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                  <div className="text-right">
                    <div className="font-bold text-white text-sm">Obaid Farooq</div>
                    <div className="text-gray-400 text-xs">Founder, CEO</div>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-11 h-11 -mt-1 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-[2px]">
                      <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        <img src="/images/contact3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative lg:absolute lg:top-16 lg:-left-10 w-full lg:w-96 bg-[#151515] backdrop-blur-sm rounded-2xl border border-gray-700 p-4 lg:p-8 shadow-2xl mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold mb-2 text-white">Get Started Today</h2>
            <p className="text-gray-400 text-xs italic font-light mb-6">
              THINK YOU CAN INSPIRE THE WORLD WITH YOUR STORY?
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="group relative px-[50px] py-2 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]"
                >
                  <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                    Submit →
                  </span>
                  <div className="absolute rounded-full inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;