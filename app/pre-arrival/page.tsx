import Link from "next/link";
import { FiCheckCircle, FiFileText, FiBookOpen, FiGlobe, FiShoppingBag, FiHome } from "react-icons/fi";

export default function PreArrival() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] via-[#1a4d8f] to-[#2a6daf] text-white py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Pre-Arrival Checklist
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Get ready for your UK university experience with our comprehensive pre-arrival guide. Ensure you have everything you need before your journey.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Planning Your Arrival
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Moving to the UK for your studies is an exciting journey. To ensure a smooth transition, it's essential to complete all necessary preparations before you travel. This comprehensive checklist covers all the documents, arrangements, and preparations you need to make.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We recommend starting your preparations at least 2-3 months before your intended arrival date to ensure you have sufficient time to arrange everything properly.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Essential Documents
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Gather and organize all required documentation before you travel to the UK. Here are the essential documents you'll need:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiFileText className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Passport & Visa</h3>
                  <p className="text-gray-700"><strong>Priority: CRITICAL</strong></p>
                  <p className="text-gray-600 mt-2">Ensure your passport is valid for at least 6 months beyond your stay in the UK. Keep both physical and digital copies of your student visa in a safe place.</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Valid UK student visa approval letter</p>
                    </div>
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">CAS (Confirmation of Acceptance for Studies) letter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiFileText className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Academic Records</h3>
                  <p className="text-gray-700"><strong>Priority: CRITICAL</strong></p>
                  <p className="text-gray-600 mt-2">Obtain official transcripts and certificates from your previous educational institutions. UK universities accept scanned copies of official documents.</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Official transcript and degree certificate</p>
                    </div>
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Secondary/High school qualifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiBookOpen className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">English Language Proof</h3>
                  <p className="text-gray-700"><strong>Priority: IMPORTANT</strong></p>
                  <p className="text-gray-600 mt-2">Keep copies of your English language test results for reference.</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">IELTS/TOEFL test results (minimum 6.0 IELTS with 5.5 in each skill)</p>
                    </div>
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Medium of Instruction (MOI) certificate (if applicable)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#F7941D]">
              <div className="flex items-start gap-4">
                <FiFileText className="text-[#F7941D] text-3xl flex-shrink-0" />
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#0a2e6d] mb-2">Financial Documents</h3>
                  <p className="text-gray-700"><strong>Priority: CRITICAL</strong></p>
                  <p className="text-gray-600 mt-2">Proof of financial support is required by UK immigration authorities.</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Bank statements showing evidence of funds</p>
                    </div>
                    <div className="flex items-start">
                      <FiCheckCircle className="text-[#F7941D] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Sponsorship letter (if applicable)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Preparation Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Personal Preparation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiGlobe className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Research Your University</h3>
              </div>
              <p className="text-gray-700 mb-3">Familiarize yourself with your new university:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Campus location and facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Student accommodation options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Course details and timetable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Student support services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiHome className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Accommodation</h3>
              </div>
              <p className="text-gray-700 mb-3">Arrange your accommodation before arrival:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>University halls of residence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Private rental accommodation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Confirm booking and get address</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Plan your transportation to campus</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiShoppingBag className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Packing Essentials</h3>
              </div>
              <p className="text-gray-700 mb-3">Pack smartly for UK weather and lifestyle:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Warm clothing and waterproof jacket</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Comfortable shoes for walking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Medications and prescriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Important documents in carry-on bag</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <FiGlobe className="text-[#F7941D] text-3xl mr-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#0a2e6d]">Practical Arrangements</h3>
              </div>
              <p className="text-gray-700 mb-3">Complete essential practical arrangements:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Book your flights in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Arrange airport pickup/transport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Get UK phone SIM card plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F7941D] mr-2">•</span>
                  <span>Inform university of arrival date</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* On Arrival Section */}
      <section className="bg-gray-50 py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Upon Arrival in the UK
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Here are the key tasks to complete during your first week in the UK:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Register with Your University</h3>
                  <p className="text-gray-700">Attend induction sessions and complete registration processes with your university immediately upon arrival.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Open a UK Bank Account</h3>
                  <p className="text-gray-700">Open a student bank account. You'll need your passport, proof of address, and proof of enrollment from your university.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Register with a GP (Doctor)</h3>
                  <p className="text-gray-700">Register with a General Practitioner for access to UK health services. This is free as an international student.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Get a UK National Insurance Number</h3>
                  <p className="text-gray-700">If you plan to work, apply for a National Insurance Number. Your university can provide guidance on this.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F7941D] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Get Acclimated</h3>
                  <p className="text-gray-700">Explore your city, meet other students, attend welcome events, and familiarize yourself with local transport and amenities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e6d] mb-8">
            Important Notes
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Documentation Changes</h3>
              <p className="text-gray-800">
                Requirements may change from time to time depending on your local and UK government guidelines. Always refer to the latest government and university guidelines for updates before your departure.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Keep Digital Copies</h3>
              <p className="text-gray-800">
                Maintain digital copies of all important documents in secure cloud storage. This ensures you have access to them even if physical copies are lost or damaged.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#F7941D] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2e6d] mb-2">Contact University Early</h3>
              <p className="text-gray-800">
                If you have any questions or concerns about what to bring or prepare, contact your university's international student office. They're here to help and support your transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a2e6d] to-[#1a4d8f] text-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Guidance on Your Preparation?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Our team at Study Window can help guide you through every step of your pre-arrival preparations and help ensure a smooth transition to UK university life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#F7941D] hover:bg-[#d67a10] text-white transition-all shadow-lg"
          >
            Get in Touch for Support
          </Link>
        </div>
      </section>
    </div>
  );
}
