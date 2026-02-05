import Link from "next/link";
import Image from "next/image";
import {
  FaUserTie,
  FaGraduationCap,
  FaFileAlt,
  FaHome,
  FaUniversity,
  FaHandshake,
  FaComments,
  FaSearchLocation,
  FaBook,
  FaHeadset,
} from "react-icons/fa";

export default function Services() {
  const mainServices = [
    {
      icon: FaUserTie,
      title: "Cost-free Counseling",
      description:
        "Our professional counselors, who have degrees from UK universities, offer free counseling to the students in our care.",
      color: "bg-[#F7941D]",
    },
    {
      icon: FaGraduationCap,
      title: "Admission Services for Students",
      description:
        "Our admission services are primarily designed for students from EU and the international community, while also supporting UK and EEA migrant workers to enroll in university.",
      color: "bg-[#0B5ED7]",
    },
    {
      icon: FaFileAlt,
      title: "Compliance Support",
      description:
        "To assist our students with the university and visa application process, we have a dedicated compliance team.",
      color: "bg-green-600",
    },
    {
      icon: FaHome,
      title: "Services for Student Housing",
      description:
        "Study Window is pleased to declare that we have in-house housing services at competitive rates in the East London area.",
      color: "bg-purple-600",
    },
    {
      icon: FaUniversity,
      title: "Partner University Services",
      description:
        "In addition to offering a variety of services to students, we also work closely with the universities with which we are affiliated.",
      color: "bg-[#0A1F44]",
    },
    {
      icon: FaHandshake,
      title: "Integrated Services",
      description:
        "Our services are continuously available and never come to an end. Support can continue even after the course has ended in the UK.",
      color: "bg-indigo-600",
    },
  ];

  const additionalServices = [
    {
      icon: FaComments,
      title: "One-to-One Consultation",
      description:
        "High-quality, cost-free one-on-one consultations for students wanting to study in London and the UK.",
    },
    {
      icon: FaSearchLocation,
      title: "University Selection",
      description:
        "Expert guidance in selecting the right university based on your academic goals and career aspirations.",
    },
    {
      icon: FaBook,
      title: "Course Selection",
      description:
        "Assistance in choosing the right programme with detailed guides on entry requirements.",
    },
    {
      icon: FaHeadset,
      title: "UCAS Application Help",
      description:
        "Official UCAS centre providing free, independent advice on submitting successful applications.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dsicfgtsz/image/upload/v1770293299/premium_photo-1663126316750-473850988047_uqmxdz.avif"
          alt="Study Window Services"
          fill
          className="object-cover object-center"
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
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed">
              Study Window provides comprehensive support to help students
              achieve their academic and career goals in the UK. From free
              counseling to visa support, we are with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Core Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive support services designed to make your UK education
              journey smooth and successful
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div
                    className={`${service.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}
                  >
                    <Icon className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Additional Support
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized services to enhance your application process and
              university selection
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 sm:p-6 border-2 border-gray-200 hover:border-[#F7941D] transition-all"
                >
                  <Icon className="text-[#F7941D] text-2xl sm:text-3xl mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              How We Help You
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our step-by-step process ensures you receive comprehensive support
              throughout your journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "Book a free consultation to discuss your goals and preferences",
                },
                {
                  step: "02",
                  title: "University & Course Selection",
                  description:
                    "Get expert guidance on choosing the best university and course",
                },
                {
                  step: "03",
                  title: "Application Preparation",
                  description:
                    "We help prepare all necessary documents and personal statements",
                },
                {
                  step: "04",
                  title: "Submission & Tracking",
                  description:
                    "We submit applications and track progress on your behalf",
                },
                {
                  step: "05",
                  title: "Visa & Pre-Arrival Support",
                  description:
                    "Complete support for visa applications and pre-arrival preparation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-6 items-start bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#F7941D] to-[#d67a10] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A1F44] text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Ready to Start Your UK Education Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation with our expert counselors and get
            personalized guidance for your university application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7941D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#d67a10] transition-colors shadow-lg inline-block"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/study-options"
              className="bg-white text-[#0A1F44] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
            >
              Explore Study Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
