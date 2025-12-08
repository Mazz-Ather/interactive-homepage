'use client'
import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-scren bg-black font-poppins flex items-center justify-center p-5 lg:pb-28 ">
      <div className="flex gap-9 w-full max-w-[1380px] font-sans flex-col lg:flex-row">
        {/* Left Box - Larger */}
        <div className="flex-[1.4] bg-[rgba(40,40,40,0.6)] backdrop-blur-[10px] rounded-[28px] px-[45px] py-[50px] text-white border border-[rgba(255,255,255,0.08)] flex flex-col lg:px-[35px] lg:py-[50px] md:px-6 md:py-8">
          <h1 className="text-[38px] font-medium leading-[1.35] mb-[45px] text-[#a0a0a0] tracking-[-0.5px] lg:text-[34px] md:text-[28px] md:mb-8 sm:text-2xl">
            Tell us about your project, your company & your goals!
          </h1>

          {/* Two Sections Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 gap-[35px] mb-5 md:gap-[30px]">
            {/* Quick Response Section */}
            <div className="flex gap-[14px] items-start">
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-[2px]">
                <img
                  src="/images/q2.png"
                  alt="Quick Response"
                  width="28"
                  height="28"
                  className="opacity-90"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold mb-2 text-white tracking-[-0.2px] md:text-base">
                  Quick Response
                </h3>
                <p className="text-[13.5px] leading-[1.6] m-0 text-[#a0a0a0] tracking-[-0.1px] md:text-[13px]">
                  If you're ready to create and collaborate, we'd love to hear from you.
                </p>
              </div>
            </div>

            {/* Clear Next Step Section */}
            <div className="flex gap-[14px] items-start">
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-[2px]">
                <img
                  src="/images/q1.png"
                  alt="Clear Next Step"
                  width="28"
                  height="28"
                  className="opacity-90"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold mb-2 text-white tracking-[-0.2px] md:text-base">
                  Clear Next Step
                </h3>
                <p className="text-[13.5px] leading-[1.6] m-0 text-[#a0a0a0] tracking-[-0.1px] md:text-[13px]">
                  After the consultation, we'll provide you with a detailed plan and timeline.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Testimonial Box */}
          <div className="bg-[rgba(60,60,60,0.4)] border border-[rgba(255,255,255,0.08)] rounded-[20px] px-[35px] pt-[35px] pb-7 relative mt-auto md:px-6 md:pt-7 md:pb-6">
            <div className="absolute top-7 left-[35px] text-[52px] text-[rgba(255,255,255,0.15)] font-serif leading-none font-bold md:text-[42px] md:left-6 md:top-[22px]">
              "
            </div>
            <p className="text-[13.5px] leading-[1.75] mb-[22px] pl-0 text-white italic tracking-[-0.1px] pt-4 md:text-[13px]">
              IP68(Waterproof, built-in alexa, 1.8", Heart Rate, SpO2, Stress Measurement, Pedometer, Sleep
              Monitor, Message & Call Sync,Step Counter, 100+ Sports Modes, Health Modes,Display weather,
              DIY Watch Face, 4 Built-in Watch Faces and 100s free watch dial to download from dial gallery,
              Bluetooth calling.
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col gap-[3px] text-right flex-1">
                <span className="text-[15px] font-semibold text-white tracking-[-0.2px] md:text-[14px]">
                  Alexander Arnold
                </span>
                <span className="text-[12.5px] text-[#999999] font-normal tracking-[-0.1px] md:text-xs">
                  Founder, CEO
                </span>
              </div>
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.15)] flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="Alexander Arnold"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Box - Form */}
        <div className="flex-1 bg-[rgba(40,40,40,0.6)] backdrop-blur-[10px] rounded-[28px] px-[45px] py-[50px] text-white border border-[rgba(255,255,255,0.08)] flex flex-col lg:px-[35px] lg:py-[40px] md:px-6 md:py-8">
          <div className="mb-8 text-center">
            <h2 className="text-[32px] font-semibold mb-[10px] text-white tracking-[-0.5px] md:!text-[39px] sm:text-2xl">
              Get Started Today
            </h2>
            <p className="text-[16.5px] text-[#999999] m-0 tracking-[-0.1px]">
              Think you can inspire the world with your story?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] flex-1">
            {/* Two Inputs Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              <div className="relative flex items-center">
                <span className="absolute left-[18px] text-[#888888] pointer-events-none z-[1] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-4 px-[18px] pl-[46px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.15)] rounded-[14px] text-white text-sm font-sans transition-all duration-[250ms] ease-in-out tracking-[-0.1px] placeholder:text-[#777777] focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]"
                />
              </div>
              <div className="relative flex items-center">
                <span className="absolute left-[18px] text-[#888888] pointer-events-none z-[1] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full py-4 px-[18px] pl-[46px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.15)] rounded-[14px] text-white text-sm font-sans transition-all duration-[250ms] ease-in-out tracking-[-0.1px] placeholder:text-[#777777] focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]"
                />
              </div>
            </div>

            {/* Single Email Input */}
            <div className="relative flex items-center w-full">
              <span className="absolute left-[18px] text-[#888888] pointer-events-none z-[1] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-4 px-[18px] pl-[46px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.15)] rounded-[14px] text-white text-sm font-sans transition-all duration-[250ms] ease-in-out tracking-[-0.1px] placeholder:text-[#777777] focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]"
              />
            </div>

            {/* Bigger Message Input */}
            <div className="relative flex items-start w-full flex-1">
              <span className="absolute left-[18px] top-[18px] text-[#888888] pointer-events-none z-[1] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full py-4 px-[18px] pl-[46px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.15)] rounded-[14px] text-white text-sm font-sans transition-all duration-[250ms] ease-in-out tracking-[-0.1px] resize-none min-h-[140px] flex-1 placeholder:text-[#777777] focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-[18px] py-[13px] px-0 bg-gradient-to-r from-[#B54CBE] to-[#065FE5] border-none rounded-[100px] text-white text-[19px] font-semibold cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-[10px] w-full tracking-[-0.2px] hover:-translate-y-[1px] max-w-[200px] mx-auto hover:shadow-[0_12px_32px_rgba(168,85,247,0.35)] active:translate-y-0"
            >
              Submit
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;