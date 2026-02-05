import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaHandshake,
  FaUsers,
  FaGlobeAmericas,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  const whyChooseUs = [
    {
      icon: <FaChartLine className="text-3xl sm:text-4xl text-[#F7941D]" />,
      title: "Involvement",
      description:
        "Our understanding of the employment market can help you realize your full potential because we can identify some of the top educational institutions based on the field of study you have chosen.",
    },
    {
      icon: <FaHandshake className="text-3xl sm:text-4xl text-[#F7941D]" />,
      title: "Dependability",
      description:
        "Our staff of counselors comes from different backgrounds and has experienced the same struggles as other students while deciding where and what to study.",
    },
    {
      icon: <FaGlobeAmericas className="text-3xl sm:text-4xl text-[#F7941D]" />,
      title: "Diversity",
      description:
        "To meet the demands of our students and partners, we have an local & international workforce that works tirelessly. No matter your age, cultural background, or nationality, our specialists can help you choose your ideal university.",
    },
    {
      icon: <FaUsers className="text-3xl sm:text-4xl text-[#F7941D]" />,
      title: "Supportive",
      description:
        "We are aware of the challenges experienced by students when deciding where and what to study. Based on precise and up-to-date information about the employment markets, our committed team offers each student individualized professional and personal assistance.",
    },
    {
      icon: <FaCheckCircle className="text-3xl sm:text-4xl text-[#F7941D]" />,
      title: "Transparency",
      description:
        "We give our clients accurate and up-to-date information for the admissions process. One of the most crucial company principles is to practice ethics.",
    },
    {
      icon: <FaGraduationCap className="text-3xl sm:text-4xl text-[#F7941D]" />,
      title: "Extent",
      description:
        "More than a hundred students have benefited from our team's assistance in being accepted to the colleges and universities of their dreams.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dsicfgtsz/image/upload/v1770291391/vitaly-gariev--X4Qx4_4iMU-unsplash_sumzkx.jpg"
          alt="Study Window About Us"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/88 to-[#0A1F44]/65"></div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 items-center flex">
          <div className="text-white max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5">
              About Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed">
              Study Window is a leading Local ( UK & EU) and international
              student recruitment agency in London. We offer free application
              assistance to students looking to enroll in a UK university.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 md:p-12 shadow-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4 sm:mb-6">
                Who We Are
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Study Window is a leading Local ( UK & EU) and international
                student recruitment agency in London. We offer free application
                assistance to students looking to enroll in a UK university. We
                support students as they apply to their selected UK university
                and course, helping them with their personal statements,
                applications, and student visas.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We also provide prospective students with important information
                on what to anticipate during their time in the UK, such as
                details on a airport pick up, finding accommodation & Job & so
                on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1F44] mb-3 sm:mb-4">
              Why Choose Study Window
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are committed to providing exceptional service and support
              throughout your educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 sm:p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0A1F44] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-[#0A1F44] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 rounded-2xl max-w-[1070px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7941D] mb-2">
                  100+
                </div>
                <p className="text-sm sm:text-base md:text-lg">
                  Students Placed
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7941D] mb-2">
                  100%
                </div>
                <p className="text-sm sm:text-base md:text-lg">
                  Free Counseling
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7941D] mb-2">
                  24/7
                </div>
                <p className="text-sm sm:text-base md:text-lg">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#F7941D] to-[#ff9d2e] rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Get in touch with us today and let us help you achieve your
              educational goals in the UK
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#F7941D] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-colors shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
