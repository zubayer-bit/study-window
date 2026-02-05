import Link from "next/link";
import Image from "next/image";
import {
  FaGraduationCap,
  FaBook,
  FaUniversity,
  FaLanguage,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function StudyOptions() {
  const studyPrograms = [
    {
      title: "Pre-Sessional English",
      duration: "2-12 weeks",
      icon: FaLanguage,
      description:
        "Pre-sessional English courses for foreign students to raise English proficiency before beginning a university programme.",
      features: [
        "Academic English focus",
        "UK history and culture",
        "Flexible duration options",
        "University preparation",
      ],
      link: "/pre-sessional-english",
      color: "bg-blue-600",
    },
    {
      title: "Foundation",
      duration: "1 year",
      icon: FaBook,
      description:
        "One-year programme for students who lack prerequisites for bachelor's degree or need academic preparation.",
      features: [
        "9 subject areas available",
        "Conditional university offer",
        "Study skills development",
        "Cultural adjustment support",
      ],
      link: "/foundation",
      color: "bg-green-600",
    },
    {
      title: "Undergraduate",
      duration: "3-5 years",
      icon: FaGraduationCap,
      description:
        "Full bachelor's degrees including BA, BSc, BEng, BEd, LLB, and MBBS programmes across UK universities.",
      features: [
        "Multiple degree types",
        "Accelerated options available",
        "Industry placement opportunities",
        "Internationally recognised",
      ],
      link: "/undergraduate",
      color: "bg-[#F7941D]",
    },
    {
      title: "Postgraduate",
      duration: "1 year (Masters)",
      icon: FaUniversity,
      description:
        "Postgraduate degrees including Masters (MBA, MSc, MA, MEng, MPhil) and Doctorate programmes (PhD, DPhil, MD).",
      features: [
        "Career advancement focused",
        "Research opportunities",
        "Global recognition",
        "Faster completion time",
      ],
      link: "/postgraduate",
      color: "bg-purple-600",
    },
  ];

  const benefits = [
    {
      icon: FaClock,
      title: "Shorter Duration",
      description: "Complete your degree faster compared to other countries",
    },
    {
      icon: FaUniversity,
      title: "World-Class Education",
      description:
        "Study at top-ranked UK universities with excellent reputation",
    },
    {
      icon: FaCheckCircle,
      title: "Wide Subject Choice",
      description: "Choose from thousands of degree subjects and courses",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dsicfgtsz/image/upload/v1770294934/qingqing-cai-158z33c3H5o-unsplash_pvqyf6.jpg"
          alt="Study Options in the UK"
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
              Study Options in the UK
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed">
              Choose from a wide range of academic programmes designed to meet
              your educational goals. From pre-sessional English to postgraduate
              degrees, we guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Study in the UK?
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                Compared to many other parts of the world, the academic
                programme in the UK is typically shorter and more demanding.
                Because a degree can be earned in less time in the UK, many
                international students might decide to continue their studies
                there.
              </p>
              <p>
                Students can choose from a wide variety of degree subjects at
                universities in the UK. In order to make the best decision,
                students must consider their academic background, language
                proficiency, and other factors.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center border border-gray-200"
                  >
                    <Icon className="mx-auto text-[#F7941D] text-2xl sm:text-3xl mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Study Programs */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Choose Your Programme
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our study options and find the perfect programme that
              matches your academic background and career aspirations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {studyPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                >
                  {/* Card Header */}
                  <div className={`${program.color} p-4 sm:p-6 text-white`}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="text-white text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                          {program.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm">
                          Duration: {program.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                        >
                          <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0 text-sm" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={program.link}
                      className="block w-full bg-gray-900 text-white text-center py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A1F44] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Need Personalised Advice?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Our experienced counselors can guide you through the best study
              options based on your academic background, language proficiency,
              and career goals. Get in touch with us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7941D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#d67a10] transition-colors shadow-lg inline-block"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="bg-white text-[#0A1F44] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
