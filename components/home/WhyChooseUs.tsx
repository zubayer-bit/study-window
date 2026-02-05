export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Involvement",
      description:
        "Our understanding of the employment market can help you realize your full potential because we can identify some of the top educational institutions based on the field of study you have chosen. Numerous students have benefited from our assistance in getting accepted into some of the most famous institutions for higher education.",
    },
    {
      title: "Dependability",
      description:
        "Our staff of counselors comes from different backgrounds and has experienced the same struggles as other students while deciding where and what to study. Because of this, we have the knowledge necessary to comprehend your unique educational and professional needs.",
    },
    {
      title: "Diversity",
      description:
        "To meet the demands of our students and partners, we have an local & international workforce that works tirelessly. No matter your age, cultural background, or nationality, our specialists can help you choose your ideal university.",
    },
    {
      title: "Supportive",
      description:
        "We are aware of the challenges experienced by students when deciding where and what to study. Based on precise and up-to-date information about the employment markets, our committed team offers each student individualized professional and personal assistance.",
    },
    {
      title: "Transparency",
      description:
        "We give our clients accurate and up-to-date information for the admissions process. One of the most crucial company principles is to practice ethics.",
    },
    {
      title: "Extent",
      description:
        "More than a hundred students have benefited from our team's assistance in being accepted to the colleges and universities of their dreams.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 text-[#0A1F44]">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 sm:p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-[#0A1F44]">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
