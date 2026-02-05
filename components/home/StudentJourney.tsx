export default function StudentJourney() {
  // Visual flow component - no specific journey steps provided in README.md
  // This component displays the general service flow based on available content

  const journeySteps = [
    {
      step: "1",
      title: "Consultation",
      description: "One-to-One Consultation",
    },
    {
      step: "2",
      title: "Selection",
      description: "University & Course Selection",
    },
    {
      step: "3",
      title: "Application",
      description: "UCAS Application Help",
    },
    {
      step: "4",
      title: "Support",
      description: "Compliance & Visa Support",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0A1F44] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12">
          Your Journey With Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {journeySteps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#F7941D] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
