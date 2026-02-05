import Link from "next/link";

export default function OurServices() {
  const services = [
    {
      title: "Cost-free counseling",
      description:
        "Our professional counselors, who have degrees from UK universities, offer free counseling to the students in our care.",
    },
    {
      title: "Admission Services for Students",
      description:
        "Our admission services are primarily designed for students from EU and the international community, but we also provide admission services to students from within the United Kingdom. We also support EEA Migrant worker to enroll in University so that they can develop their career.",
    },
    {
      title: "Compliance Support",
      description:
        "To assist our students with the university and visa application process, we have a dedicated compliance team.",
    },
    {
      title: "Services for Student Housing",
      description:
        "Study Window is pleased to declare that we have in House housing services at competitive rates in East London area.",
    },
    {
      title: "Partner University Services",
      description:
        "In addition to offering a variety of services to students, we also work closely with the universities with which we are affiliated.",
    },
    {
      title: "Integrated Services",
      description:
        "Our services are continuously available and never come to an end. If necessary, we'll make sure that the services and assistance are provided even after the course has ended in the UK.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-[#0A1F44]">
          Our Services
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          We provide comprehensive support throughout your educational journey
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-[#F7941D]"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#0A1F44]">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/services"
            className="inline-block bg-[#F7941D] hover:bg-[#d67a10] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-colors"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
