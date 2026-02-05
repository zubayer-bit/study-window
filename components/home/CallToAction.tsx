import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#F7941D] to-[#ff9d2e] text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Start Your UK Education Journey?
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          We support students as they apply to their selected UK university and
          course, helping them with their personal statements, applications, and
          student visas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-[#F7941D] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
          <Link
            href="/services"
            className="bg-[#0A1F44] hover:bg-[#1a3a6e] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-colors shadow-lg"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
