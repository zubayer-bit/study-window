import Link from "next/link";
import { FiBook, FiUsers, FiAward, FiTarget, FiCheckCircle } from "react-icons/fi";

export default function PreSessionalEnglish() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] via-[#1a4d8f] to-[#2a6daf] text-white py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Pre-Sessional English Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Prepare for academic success with our comprehensive pre-sessional English programmes, designed to enhance your language proficiency and adapt to UK university life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            What is Pre-Sessional English?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Pre-sessional English courses are intensive English language programmes offered by UK universities and colleges for international students planning to pursue foundational, undergraduate, or postgraduate degrees. These courses are designed to bridge the language gap and prepare students academically before starting their main degree programme.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            If you don't meet the English language requirements of your chosen university or degree programme, pre-sessional English is the perfect pathway to develop the skills you need for academic success.
          </p>
        </div>
      </section>

      {/* Course Duration Section */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Course Durations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-3" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Short Courses</h3>
              </div>
              <p className="text-gray-700">
                <strong>2-4 weeks:</strong> Ideal for students with a strong English foundation who need a quick refresh before starting their degree.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-3" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Standard Courses</h3>
              </div>
              <p className="text-gray-700">
                <strong>6-8 weeks:</strong> Most popular option designed for students who need moderate English improvement and academic preparation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-3" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Extended Courses</h3>
              </div>
              <p className="text-gray-700">
                <strong>10-12 weeks:</strong> Comprehensive courses for students requiring significant English language development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            What You'll Study
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a4d8f] mb-4">English Language Skills</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Academic Writing:</strong> Essays, reports, and dissertations</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Academic Reading:</strong> Understanding complex texts and research papers</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Listening & Speaking:</strong> Lectures, presentations, and class discussions</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Grammar & Vocabulary:</strong> Academic and technical terminology</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a4d8f] mb-4">UK Culture & Adaptation</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>UK History & Culture:</strong> Understanding British society and customs</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Study Skills:</strong> Note-taking, time management, and research techniques</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Critical Thinking:</strong> Analysis, evaluation, and argumentation</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>University Orientation:</strong> Campus facilities and student life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Meet Language Requirements</h3>
                <p className="text-gray-700">Bridge the gap if you don't meet your university's English language requirements.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Academic Preparation</h3>
                <p className="text-gray-700">Develop essential academic skills needed for university-level study.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Build Confidence</h3>
                <p className="text-gray-700">Gain confidence in using English in academic and social settings.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Campus Integration</h3>
                <p className="text-gray-700">Settle into university life, make friends, and explore campus before your degree begins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Entry Requirements
          </h2>
          <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded mb-6">
            <p className="text-gray-800 mb-4">
              To enrol in a pre-sessional English course, you typically need:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">An offer from a UK university for your chosen degree programme</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">An English language proficiency test result (IELTS, TOEFL, etc.)</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">A minimum score slightly below your university's requirement</p>
              </li>
              <li className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">High school or equivalent academic qualifications</p>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-base md:text-lg">
            Each university sets its own entry requirements, so it's important to check with your specific institution. Some universities offer pathway routes that guarantee entry into your degree programme upon successful completion of the pre-sessional course.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] to-[#1a4d8f] text-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact our team to learn more about pre-sessional English courses and find the right programme for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#F7941D] hover:bg-[#d67a10] text-white transition-all shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
