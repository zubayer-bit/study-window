import Link from "next/link";
import { FiBook, FiAward, FiCheckCircle, FiClock, FiTarget, FiUsers } from "react-icons/fi";

export default function Undergraduate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] via-[#1a4d8f] to-[#2a6daf] text-white py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Undergraduate Degrees in the UK
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Pursue your bachelor's degree at leading UK universities and launch your career with a globally recognized qualification.
          </p>
        </div>
      </section>

      {/* What is Undergraduate */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            What is an Undergraduate Degree?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            An undergraduate degree is a first-level university qualification that typically takes between 2-4 years to complete in the UK. These full bachelor's degrees provide specialized knowledge and skills in your chosen subject area, preparing you for professional careers or further postgraduate study.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            UK undergraduate degrees are highly valued worldwide and provide a strong foundation for your career development. Students benefit from a mix of academic learning, practical skills, and often opportunities for work experience or international study.
          </p>
        </div>
      </section>

      {/* Degree Types */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Types of Undergraduate Degrees
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            The UK offers a variety of undergraduate degree qualifications, each tailored to different subject areas and career paths:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Bachelor of Arts (BA)</h3>
              </div>
              <p className="text-gray-700">Humanities and social sciences including languages, literature, history, philosophy, and social studies.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Bachelor of Science (BSc)</h3>
              </div>
              <p className="text-gray-700">Science and mathematics programmes including physics, chemistry, biology, computer science, and psychology.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Bachelor of Engineering (BEng)</h3>
              </div>
              <p className="text-gray-700">Engineering disciplines including civil, mechanical, electrical, chemical, and software engineering.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Bachelor of Laws (LLB)</h3>
              </div>
              <p className="text-gray-700">Law degree programmes providing comprehensive legal education and preparing for legal careers.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Bachelor of Education (BEd)</h3>
              </div>
              <p className="text-gray-700">Teacher training and education programmes with professional development and practical teaching experience.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Bachelor of Medicine (MBBS)</h3>
              </div>
              <p className="text-gray-700">Medical degree programmes (typically 5 years) for students pursuing careers in medicine and healthcare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Duration */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Course Duration & Options
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiClock className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Standard Undergraduate Degree</h3>
                  <p className="text-gray-700"><strong>Duration: 3 Years</strong></p>
                  <p className="text-gray-600 mt-2">Most undergraduate degrees in England, Wales, and Northern Ireland are completed in three years, providing a comprehensive education in your chosen subject.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiClock className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Scottish Undergraduate Degree</h3>
                  <p className="text-gray-700"><strong>Duration: 4 Years</strong></p>
                  <p className="text-gray-600 mt-2">Degrees in Scotland typically last four years, allowing for broader subject exploration and deeper specialization throughout the programme.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiClock className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Accelerated Degree</h3>
                  <p className="text-gray-700"><strong>Duration: 2 Years</strong></p>
                  <p className="text-gray-600 mt-2">Some universities offer accelerated two-year degrees for qualified students, allowing faster completion with intensive study. Contact us to find partner universities offering this option.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiClock className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Sandwich Courses</h3>
                  <p className="text-gray-700"><strong>Duration: 4 Years</strong></p>
                  <p className="text-gray-600 mt-2">Some programmes include a year spent in industry or studying abroad, providing valuable work experience and international perspective. These sandwich courses enhance career prospects.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiClock className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Specialist Programmes</h3>
                  <p className="text-gray-700"><strong>Duration: 5 Years</strong></p>
                  <p className="text-gray-600 mt-2">Medicine, dentistry, and some other professional programmes typically require five years of intensive study to meet professional qualification requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Short Higher Education Courses
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            For students not ready for a full degree or seeking alternative qualifications, these shorter programmes offer valuable credentials:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Certificate of Higher Education (CertHE)</h3>
              </div>
              <p className="text-gray-700">
                A one-year qualification providing foundational knowledge in a subject. Can often be credited towards a full degree programme.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Diploma of Higher Education (DipHE)</h3>
              </div>
              <p className="text-gray-700">
                A two-year qualification offering more in-depth study than a certificate. Graduates can progress to the final year of a degree programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Benefits of a UK Undergraduate Degree
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Global Recognition</h3>
                <p className="text-gray-700">UK degrees are highly respected worldwide, opening doors to international career opportunities.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Career Development</h3>
                <p className="text-gray-700">Build specialized knowledge and professional skills highly valued by employers across industries.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Practical Experience</h3>
                <p className="text-gray-700">Many programmes include internships, placements, or study abroad options for real-world experience.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Personal Growth</h3>
                <p className="text-gray-700">Develop critical thinking, independence, and social skills through university life and academic study.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements Section */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Typical Entry Requirements
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-[#0a2e6d] mb-4">What You'll Need</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>Academic Qualifications:</strong> A-Levels, International Baccalaureate (IB), or equivalent qualifications</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>English Language:</strong> IELTS 6.0-7.0 or equivalent test results (depending on programme)</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>UCAS Application:</strong> Apply through the UK's central university application system (UCAS)</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>Personal Statement:</strong> Explaining your academic interests and motivation for the course</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>References:</strong> Academic references from school or previous educational institution</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>Specific Requirements:</strong> Some courses (medicine, law, engineering) may require additional entrance exams or interviews</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded">
            <p className="text-gray-800">
              <strong>Note:</strong> Entry requirements vary by university and course. Russell Group universities and highly competitive programmes typically have higher entry requirements. We can help guide you through the entire application process and identify universities that match your profile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] to-[#1a4d8f] text-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Undergraduate Journey?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let us help you find the right undergraduate programme and guide you through the application process.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#F7941D] hover:bg-[#d67a10] text-white transition-all shadow-lg"
          >
            Explore Undergraduate Programmes
          </Link>
        </div>
      </section>
    </div>
  );
}
