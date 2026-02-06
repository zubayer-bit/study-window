"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    // TODO: Send email or save to Prisma database
    console.log("Contact form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dsicfgtsz/image/upload/v1770297366/arlington-research-Kz8nHVg_tGI-unsplash_ibfnzw.jpg"
          alt="Contact Study Window"
          fill
          className="object-cover object-[center_30%]"
          priority
          quality={100}
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/88 to-[#0A1F44]/65"></div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 md:px-8 flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed">
              Get in touch with Study Window for free consultation and
              application support. Our experienced counselors are here to guide
              you through your UK university journey. We provide personalized
              assistance for all your education needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Visit our office or reach out to us for free consultation. We
                are here to help you with your UK university applications.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                {/* Address */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F7941D] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-base sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      Our Location
                    </h3>
                    <address className="text-xs sm:text-sm md:text-base text-gray-600 not-italic leading-relaxed">
                      606 Romford Road
                      <br />
                      London E12 5AF
                      <br />
                      United Kingdom
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0A1F44] rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white text-base sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Available on request
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0B5ED7] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white text-base sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      admin@studywindow.co.uk <br />studywindow.uk@gmail.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <FaClock className="text-white text-base sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-6 sm:mt-8 rounded-lg overflow-hidden h-48 sm:h-64 shadow-md">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.7545009428802!2d0.0523956994179586!3d51.55304091713742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a656b842ffff%3A0xf610f2885760015!2s1%20Romford%20Rd%2C%20London%20E12%205AW%2C%20UK!5e0!3m2!1sen!2sbd!4v1770359076888!5m2!1sen!2sbd" 
                 width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Study Window Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:mt-16">
              <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 md:p-8 border border-gray-200">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2">
                  Fill out the form below and we will get back to you as soon as
                  possible
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5 mt-4 sm:mt-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7941D] focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7941D] focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7941D] focus:border-transparent transition"
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7941D] focus:border-transparent transition resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#F7941D] text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#d67a10] transition-colors shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A1F44] text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation with our education counselors and get
            expert guidance for your UK university applications
          </p>
          <button className="bg-[#F7941D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#d67a10] transition-colors shadow-lg">
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
