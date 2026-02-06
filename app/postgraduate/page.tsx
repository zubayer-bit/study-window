import Link from "next/link";
import { FiBook, FiTarget, FiCheckCircle, FiAward, FiUsers, FiBriefcase } from "react-icons/fi";

export default function Postgraduate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] via-[#1a4d8f] to-[#2a6daf] text-white py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Postgraduate Degrees in the UK
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Advance your career with specialized postgraduate qualifications from leading UK universities. Study at master's and doctorate levels.
          </p>
        </div>
      </section>

      {/* What is Postgraduate */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            What is Postgraduate Study?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Postgraduate degrees are advanced qualifications undertaken after completing an undergraduate degree. In the UK, most postgraduate degrees typically take one year to complete, though some programmes may be longer. These qualifications allow you to specialize in your field, advance your career, and gain expert knowledge.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Postgraduate study offers the opportunity to conduct research, engage with leading experts in your field, and develop the advanced skills required for senior professional positions or academic careers. UK postgraduate degrees are highly respected globally and provide significant career advantages.
          </p>
        </div>
      </section>

      {/* Master's Degrees */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Master's Degrees
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Master's degrees are one-year postgraduate programmes that provide in-depth knowledge and specialized skills in a chosen subject. They combine taught modules, practical work, and often a research dissertation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Master of Business Administration (MBA)</h3>
              </div>
              <p className="text-gray-700">Global business qualification for developing leadership and management skills. Highly valued for senior management positions.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Master of Science (MSc)</h3>
              </div>
              <p className="text-gray-700">Specialization in science and technical subjects including engineering, IT, biology, physics, and related disciplines.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Master of Arts (MA)</h3>
              </div>
              <p className="text-gray-700">Advanced study in humanities and social sciences including languages, history, philosophy, and cultural studies.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Master of Engineering (MEng)</h3>
              </div>
              <p className="text-gray-700">Specialized postgraduate qualification for engineers seeking advanced technical expertise and professional development.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Master of Philosophy (MPhil)</h3>
              </div>
              <p className="text-gray-700">Research-focused degree bridging master's and doctorate levels, ideal for those considering further doctoral study.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Taught Master's Programmes</h3>
              </div>
              <p className="text-gray-700">Various specialized master's degrees including LLM (Law), MA, MSc, and subject-specific qualifications in specialized fields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctorate Degrees */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Doctorate Degrees
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Doctorate degrees are the highest level of academic qualification, requiring original research and contribution to knowledge in your field. These programmes typically take 3-4 years and lead to careers in research, academia, or advanced professional practice.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-[#F7941D]">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">PhD (Doctor of Philosophy)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                The most common doctorate degree, awarded in all disciplines for advanced research and original contribution to knowledge.
              </p>
              <p className="text-sm text-gray-600"><strong>Duration:</strong> 3-4 years</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-[#F7941D]">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">DPhil (Doctor of Philosophy)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Oxford and Sussex universities use "DPhil" instead of "PhD" for their research doctorates.
              </p>
              <p className="text-sm text-gray-600"><strong>Duration:</strong> 3-4 years</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-[#F7941D]">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">MD (Doctor of Medicine)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Research doctorate for medical professionals undertaking medical research and seeking academic advancement.
              </p>
              <p className="text-sm text-gray-600"><strong>Duration:</strong> 2-3 years</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-[#F7941D]">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Professional Doctorates</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Field-specific doctorates combining research with professional practice (EdD, DBA, etc.).
              </p>
              <p className="text-sm text-gray-600"><strong>Duration:</strong> 3-4 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Benefits of Postgraduate Study
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiBriefcase className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Career Advancement</h3>
                <p className="text-gray-700">Access senior positions, higher salaries, and specialized career paths requiring advanced qualifications.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Specialized Expertise</h3>
                <p className="text-gray-700">Develop in-depth knowledge and become an expert in your chosen field of study.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Research Opportunities</h3>
                <p className="text-gray-700">Conduct cutting-edge research and contribute new knowledge to your discipline.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Professional Network</h3>
                <p className="text-gray-700">Build connections with leading academics and professionals in your field globally.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Global Recognition</h3>
                <p className="text-gray-700">Earn a prestigious UK qualification recognized and valued worldwide.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiCheckCircle className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Personal Development</h3>
                <p className="text-gray-700">Enhance critical thinking, research skills, and personal independence through advanced study.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Application Requirements
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-[#0a2e6d] mb-4">Essential Documents</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>Official Transcripts & Certificates:</strong> Scanned copies of your bachelor's degree qualification and academic records</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>Personal Statement:</strong> 250-500 word statement explaining your motivation, career goals, and why you're suited for the programme</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>CV or Resume:</strong> Demonstrating your academic and professional background (if required)</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>Academic References:</strong> 2-3 references from academic or professional contacts</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong>English Language Proficiency:</strong> IELTS 6.0 with minimum 5.5 in each skill, or equivalent qualification</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-[#0a2e6d] mb-4">English Language Evidence</h3>
            <p className="text-gray-700 mb-4">You may demonstrate English language proficiency through:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">IELTS 6.0 with minimum 5.5 in each skill</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">Medium of Instruction (MOI) certificate - if your previous degree was taught in English</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">Higher Education Institution (HEI) sponsor assessment</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F7941D] font-bold mr-3">•</span>
                <p className="text-gray-700">Other recognized English language tests (TOEFL, IELTS Academic, PTE, etc.)</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#0a2e6d] mb-4">Additional Documents</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Copies of UK visa documents, CAS letters, or visa refusal letters (if applicable)</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">For research doctorates: Research proposal outlining your intended research project</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">For specific programmes: Additional subject-specific requirements or entrance exams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-blue-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#0a2e6d] mb-4">We're Here to Help</h3>
            <p className="text-gray-700 mb-4">
              Study Window provides comprehensive support throughout your postgraduate application process. Whether you're applying to UK universities, colleges, or other higher education institutions, our team of experienced advisors can guide you at every stage.
            </p>
            <p className="text-gray-700">
              From selecting the right programme and university to preparing your application documents, writing your personal statement, and preparing for interviews, we're here to help you succeed in your postgraduate journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] to-[#1a4d8f] text-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Postgraduate Study?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Take the next step in your academic and professional journey with a postgraduate degree from a leading UK university.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#F7941D] hover:bg-[#d67a10] text-white transition-all shadow-lg"
          >
            Explore Postgraduate Programmes
          </Link>
        </div>
      </section>
    </div>
  );
}
