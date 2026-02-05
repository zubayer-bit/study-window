import Link from "next/link";

export default function StudyOptions() {
  const options = [
    {
      title: "Pre-Sessional English",
      description:
        "Pre-sessional English courses are offered at UK universities and colleges for foreign students who are coming to the country to pursue foundational, undergraduate, or postgraduate degrees.",
      link: "/pre-sessional-english",
    },
    {
      title: "Foundation",
      description:
        "Some colleges and universities provide a one-year programme called a foundation degree. This course is for individuals who lack the prerequisites for a bachelor's degree.",
      link: "/foundation",
    },
    {
      title: "Undergraduate",
      description:
        "For full degrees, undergraduate/bachelor's degrees in the UK can be divided into various categories including BA, BSc, BEng, BEd, LLB, and MBBS.",
      link: "/undergraduate",
    },
    {
      title: "Postgraduate",
      description:
        "In the UK, a postgraduate degree typically takes one year to complete and is pursued after earning a bachelor's degree. Includes Masters and Doctorate degrees.",
      link: "/postgraduate",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-[#0A1F44]">
          Study Options in UK
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Compared to many other parts of the world, the academic programme in
          the UK is typically shorter and more demanding. Because a degree can
          be earned in less time in the UK, many international students might
          decide to continue their studies there.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              className="bg-white rounded-lg shadow-md p-5 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 border-[#F7941D]"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-[#0A1F44]">
                {option.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                {option.description}
              </p>
              <span className="text-[#F7941D] font-medium text-xs sm:text-sm">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center text-sm sm:text-base text-gray-600 mt-8 sm:mt-10 max-w-3xl mx-auto leading-relaxed">
          Students can choose from a wide variety of degree subjects at
          universities in the UK. In order to make the best decision, students
          must consider their academic background, language proficiency, and
          other factors. You can also get in touch with us to receive a
          personalised advisory upon request.
        </p>
      </div>
    </section>
  );
}
