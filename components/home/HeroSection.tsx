import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://res.cloudinary.com/dsicfgtsz/image/upload/v1770234352/rut-miit-hpRGrfOIybc-unsplash_gapk3e.jpg"
          alt="Students studying"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/85 to-[#0A1F44]/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-[#F7941D] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              🎓 Your Gateway to UK Education
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Study Window
          </h1>

          {/* Slogan */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 italic text-[#F7941D] font-light">
            Turning Your UK Study Dreams into Reality
          </p>

          {/* Description */}
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100">
              Study Window is a leading Local ( UK & EU) and international
              student recruitment agency in London. We offer free application
              assistance to students looking to enroll in a UK university.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
            <Link
              href="/contact"
              className="bg-[#F7941D] hover:bg-[#d67a10] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get Started Today →
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all shadow-lg"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-8 items-center text-white/90">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7941D]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-sm sm:text-base font-semibold">
                100+ Students Placed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7941D]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-semibold">
                Free Counseling
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7941D]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-semibold">
                UCAS Registered
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-[5]"></div>
    </section>
  );
}
