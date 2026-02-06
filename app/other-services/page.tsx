import Link from "next/link";
import { FiUsers, FiTarget, FiBook, FiCheckCircle, FiAward, FiHeadphones, FiBarChart2 } from "react-icons/fi";

export default function OtherServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] via-[#1a4d8f] to-[#2a6daf] text-white py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Additional Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Beyond our core programmes, Study Window provides comprehensive support services to help you navigate every step of your UK university journey. From personalized consultations to UCAS application assistance, we're here to guide you.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Our Comprehensive Support Services
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Study Window is committed to providing holistic support to international students at every stage of their educational journey. Our range of additional services is designed to make your transition to UK university education smooth and successful. Each service is tailored to meet your individual needs and aspirations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Expert Guidance",
              "University Matching",
              "Course Selection",
              "Application Support"
            ].map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] rounded-lg border border-blue-100">
                <FiCheckCircle className="text-[#F7941D] text-xl mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-to-One Consultation */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            One-to-One Consultation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiHeadphones className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Personalized Guidance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Study Window offers high-quality, cost-free one-on-one consultations to help international students plan their educational future in London and the UK. Our experienced advisors work with you individually to understand your unique needs, aspirations, and circumstances.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#0a2e6d]">Expert Advisors</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced consultants carefully assess your academic background, career goals, and personal circumstances to determine the best support and guidance for your specific situation. We believe in a personalized approach to help you succeed.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-[#0a2e6d] mb-4">What We Cover in Consultations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Assessment of your academic profile and qualifications</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Career goals and long-term aspirations discussion</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Budget and financial support planning</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Timeline and application process guidance</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Support services and additional assistance needed</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Adaptation to UK university life preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Selection */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            University Selection Assistance
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Choosing the right university is one of the most crucial decisions in your educational journey. We understand that selecting where to study requires careful consideration of many factors beyond rankings and location.
          </p>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#0a2e6d] mb-6">Why Choose a UK University?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-2">Global Excellence</h4>
                  <p className="text-gray-700">UK universities are recognized worldwide for exceptional teaching, research, innovation, and collaborative partnerships.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiBarChart2 className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-2">Career Advancement</h4>
                  <p className="text-gray-700">UK degrees are highly valued by employers globally, opening doors to international career opportunities and advancement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-2">International Community</h4>
                  <p className="text-gray-700">UK universities welcome international students from around the world, creating diverse and vibrant academic communities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-2">Specialized Pathways</h4>
                  <p className="text-gray-700">Wide range of programmes and study options available to suit different academic levels and career goals.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded-lg">
            <h3 className="text-lg font-bold text-[#0a2e6d] mb-3">Our University Selection Process</h3>
            <p className="text-gray-800 mb-4">
              We help you identify universities that match your academic profile, career objectives, location preferences, and financial considerations. Our advisors have in-depth knowledge of UK universities and can guide you to institutions that align with your goals.
            </p>
            <p className="text-gray-800">
              Whether you're aiming for Russell Group universities, specialist institutions, or emerging universities, we help you make informed decisions based on your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Course Selection Support
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            With thousands of courses available across UK universities at foundation, undergraduate, and postgraduate levels, selecting the right programme can be overwhelming. We simplify this process for you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Programme Analysis</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our guides outline entry requirements, course content, career prospects, and placement opportunities across different programmes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Entry requirement analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Course structure and content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Career pathway guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Personalized Matching</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We match your academic strengths, interests, and career goals with appropriate course options.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Skills-based programme selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Interest alignment assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Career outcome tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#0a2e6d] mb-6">Our Course Selection Service Includes</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-1">Initial Assessment</h4>
                  <p className="text-gray-700">Comprehensive evaluation of your academic profile and career objectives</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-1">Course Research</h4>
                  <p className="text-gray-700">In-depth research of suitable programmes and institutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-1">Shortlist Creation</h4>
                  <p className="text-gray-700">Curated list of best-fit programmes matching your needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-[#0a2e6d] mb-1">Detailed Guidance</h4>
                  <p className="text-gray-700">One-on-one guidance to help you decide on your final choices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UCAS Application Help */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            UCAS Application Support
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Study Window is an official, recognized UCAS centre providing free, independent advice and support for your UCAS application. With over 100,000 undergraduate and postgraduate courses available but only five university choices allowed per student, it's crucial to select wisely.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-[#f6f8fb] to-[#e8f0f8] rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#0a2e6d] mb-4">Why UCAS Matters</h3>
              <p className="text-gray-700 mb-4">
                The UCAS application is your primary gateway to UK university admission. A well-prepared application can significantly increase your chances of receiving offers from your preferred universities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Only 5 universities can be selected</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic selection is essential</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Personal statement is critical</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">References strengthen applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-[#0a2e6d] mb-4">Our UCAS Support Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Application Strategy</p>
                    <p className="text-gray-600 text-sm">Strategic planning of your 5 university choices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Personal Statement Writing</p>
                    <p className="text-gray-600 text-sm">Guidance and feedback on your personal statement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Form Completion</p>
                    <p className="text-gray-600 text-sm">Assistance with completing your UCAS form correctly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#F7941D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Interview Preparation</p>
                    <p className="text-gray-600 text-sm">Mock interviews and preparation for university interviews</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded-lg">
            <h3 className="text-lg font-bold text-[#0a2e6d] mb-3">Don't Leave It to Chance</h3>
            <p className="text-gray-800 mb-4">
              With thousands of courses available and only five university choices, making the right selection is critical. Our expert UCAS advisors understand the UK university system and can help you avoid costly mistakes.
            </p>
            <p className="text-gray-800">
              Whether you're a first-time applicant or reconsidering your options, let Study Window guide you through every step of the UCAS application process to maximize your chances of success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Study Window */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Why Choose Study Window?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiCheckCircle className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Free Services</h3>
              </div>
              <p className="text-gray-700">All our consultations and application guidance services are completely free, with no hidden charges.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiAward className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Expert Team</h3>
              </div>
              <p className="text-gray-700">Our advisors have extensive experience with UK universities and international student requirements.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiUsers className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Personalized Support</h3>
              </div>
              <p className="text-gray-700">Every student receives customized guidance tailored to their unique circumstances and goals.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiTarget className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Success Focused</h3>
              </div>
              <p className="text-gray-700">Our goal is your success in gaining admission to the right university for your future.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiBook className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Comprehensive Knowledge</h3>
              </div>
              <p className="text-gray-700">In-depth knowledge of UK universities, courses, and application requirements across all levels.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiHeadphones className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Ongoing Support</h3>
              </div>
              <p className="text-gray-700">Support continues throughout your application journey and beyond, until you're ready to start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] to-[#1a4d8f] text-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your UK Education Journey?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let our expert advisors help you navigate your options, select the right university and course, and prepare a winning UCAS application. It's all completely free!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#F7941D] hover:bg-[#d67a10] text-white transition-all shadow-lg"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
