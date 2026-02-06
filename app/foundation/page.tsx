import Link from "next/link";
import { FiBook, FiTarget, FiCheckCircle, FiAward, FiUsers, FiBarChart2 } from "react-icons/fi";

export default function Foundation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] via-[#1a4d8f] to-[#2a6daf] text-white py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Foundation Degree Programmes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Build a strong academic foundation and prepare for your degree with our comprehensive one-year foundation programmes designed to bridge the gap to university education.
          </p>
        </div>
      </section>

      {/* What is Foundation */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            What is a Foundation Degree?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            A foundation degree is an intensive one-year programme offered by universities and colleges to prepare students for undergraduate degree study. It's designed for international students and those whose qualifications don't meet the standard entry requirements for UK bachelor's degrees.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Foundation programmes provide comprehensive support across academic skills, subject-specific knowledge, English language proficiency, and cultural adjustment. Upon successful completion, students receive a conditional offer pathway to degree programmes, subject to achieving the required grades.
          </p>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Who Should Apply?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">International Students</h3>
              </div>
              <p className="text-gray-700">
                Students from outside the UK whose secondary education qualifications are not recognized by UK universities or don't meet standard entry requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBarChart2 className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Students Needing Support</h3>
              </div>
              <p className="text-gray-700">
                Students whose academic performance is below the entry requirements for their desired degree programme or field of study.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Mature Students</h3>
              </div>
              <p className="text-gray-700">
                Adults returning to education after a break who need to refresh their knowledge and develop modern study skills.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Career Changers</h3>
              </div>
              <p className="text-gray-700">
                Professionals looking to change career paths and build the necessary academic foundation for university study in a new field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Subjects */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Foundation Subject Areas
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Choose from a wide range of subject pathways designed to prepare you for specific degree programmes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Business & Economics",
              "Computing & IT",
              "Engineering",
              "Sciences (Biology, Chemistry, Physics)",
              "Social Sciences",
              "Humanities & Languages",
              "Art & Design",
              "Medicine & Health Sciences",
              "Pharmacy"
            ].map((subject, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <FiCheckCircle className="text-[#F7941D] text-xl mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-semibold">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            What You'll Gain
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a4d8f] mb-4">Academic Skills</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Subject Knowledge:</strong> Develop expertise in your chosen subject area</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Study Skills:</strong> Master note-taking, research, and time management</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Critical Thinking:</strong> Learn to analyze and evaluate complex information</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Academic Writing:</strong> Develop essays, reports, and assignments</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a4d8f] mb-4">Personal Development</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>English Language:</strong> Improve English proficiency for academic success</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Cultural Adjustment:</strong> Settle into UK life and university culture</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Confidence:</strong> Build confidence in your abilities and potential</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Networking:</strong> Make connections with peers and university staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Guaranteed Progression</h3>
                <p className="text-gray-700">Most universities offer conditional offers guaranteeing entry to degree programmes upon successful completion.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Campus Experience</h3>
                <p className="text-gray-700">Study at your chosen university, use facilities, and experience student life before your degree begins.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Targeted Learning</h3>
                <p className="text-gray-700">Study subject-specific content tailored to your chosen degree programme and career goals.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F7941D]">
              <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Support Network</h3>
                <p className="text-gray-700">Benefit from dedicated tutors, mentors, and support services designed for international students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Application Requirements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a4d8f] mb-4">General Requirements</h3>
              <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Completed application form</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Personal statement (outlining goals and aspirations)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Academic records and transcripts</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Application fee (if applicable)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Valid passport or identity document</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a4d8f] mb-4">Additional Documents</h3>
              <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">English language proficiency test results (IELTS, TOEFL, etc.)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Online or face-to-face interview</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">For EEA workers: Employment records and payslips</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">For EEA students: Proof of 3+ years residency (for SFE support)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#F7941D] font-bold mr-3">✓</span>
                  <p className="text-gray-700">Proof of financial support or bank statements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded">
            <p className="text-gray-800">
              <strong>Important Note:</strong> Requirements may vary by university and programme. Some universities offer foundation diplomas while others do not. It's crucial to check the specific entry requirements for your chosen institution and course before applying.
            </p>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Course Structure
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-3" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Duration</h3>
              </div>
              <p className="text-gray-700">
                <strong>1 Academic Year:</strong> September to June (approximately 10 months of intensive study)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiTarget className="text-[#F7941D] text-3xl mr-3" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Class Size</h3>
              </div>
              <p className="text-gray-700">
                <strong>Small Classes:</strong> Typically 15-25 students per class for personalized attention and support
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-3" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Assessment</h3>
              </div>
              <p className="text-gray-700">
                <strong>Continuous:</strong> Mix of coursework, assignments, presentations, and exams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] to-[#1a4d8f] text-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Foundation Journey</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Take the first step towards your university degree. Our foundation programmes are designed to set you up for success.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#F7941D] hover:bg-[#d67a10] text-white transition-all shadow-lg"
          >
            Explore Foundation Programmes
          </Link>
        </div>
      </section>
    </div>
  );
}
