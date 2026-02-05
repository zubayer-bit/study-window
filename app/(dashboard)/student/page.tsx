import StatCard from "@/components/dashboard/StatCard";
import {
  FaFileAlt,
  FaUniversity,
  FaCheckCircle,
  FaHourglassHalf,
  FaFolder,
  FaCalendarAlt,
} from "react-icons/fa";

export default function StudentDashboard() {
  // TODO: Fetch data from Prisma
  // TODO: Get current student data from session
  // TODO: Get student's applications from Student.applications
  // TODO: Get student's documents and consultations

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#0B5ED7] text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <p className="mt-2 text-gray-200">
          Welcome to Study Window - Track your UK university applications
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* TODO: Replace with Prisma Application.count({ where: { studentId: currentStudentId } }) */}
        <StatCard
          icon={FaFileAlt}
          label="My Applications"
          value={0}
          bgColor="bg-[#0A1F44]"
        />

        {/* TODO: Replace with Application.count({ where: { studentId: currentStudentId, status: 'APPROVED' } }) */}
        <StatCard
          icon={FaCheckCircle}
          label="Approved"
          value={0}
          bgColor="bg-green-600"
        />

        {/* TODO: Replace with Application.count({ where: { studentId: currentStudentId, status: 'PENDING' } }) */}
        <StatCard
          icon={FaHourglassHalf}
          label="In Progress"
          value={0}
          bgColor="bg-yellow-600"
        />

        {/* TODO: Replace with Document.count({ where: { studentId: currentStudentId } }) */}
        <StatCard
          icon={FaFolder}
          label="Documents"
          value={0}
          bgColor="bg-[#F7941D]"
        />
      </div>

      {/* Application Process Guide */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Application Process
        </h2>
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Consultation</h3>
              <p className="text-sm text-gray-600">
                Book a free consultation with our counselors
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                University Selection
              </h3>
              <p className="text-sm text-gray-600">
                Choose from our partner universities in the UK
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Document Submission
              </h3>
              <p className="text-sm text-gray-600">
                Upload required documents for your application
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Application Review
              </h3>
              <p className="text-sm text-gray-600">
                Our team reviews and submits your application
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-bold">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Visa & Arrival Support
              </h3>
              <p className="text-sm text-gray-600">
                Get support for visa application and pre-arrival preparation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* My Applications */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          My Applications
        </h2>
        {/* TODO: Fetch from Prisma Application.findMany({ where: { studentId: currentStudentId }, include: { university: true, course: true } }) */}
        <div className="text-center py-8 text-gray-500">
          <FaUniversity className="mx-auto text-4xl mb-3" />
          <p className="font-medium">No applications yet</p>
          <p className="text-sm mt-2">
            Start your journey by booking a consultation
          </p>
          <button className="mt-4 bg-[#F7941D] text-white px-6 py-2 rounded-lg hover:bg-[#d67a10] transition-colors">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Upcoming Consultations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <FaCalendarAlt className="text-[#F7941D] text-xl" />
          <h2 className="text-xl font-bold text-gray-900">
            Upcoming Consultations
          </h2>
        </div>
        {/* TODO: Fetch from Prisma Consultation.findMany({ where: { studentId: currentStudentId, date: { gte: new Date() } } }) */}
        <div className="text-center py-8 text-gray-500">
          <p>No upcoming consultations</p>
          <p className="text-sm mt-2">
            Book a free consultation to get started
          </p>
        </div>
      </div>

      {/* Important Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaUniversity className="mx-auto text-3xl text-[#0A1F44] mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Universities</h3>
          <p className="text-sm text-gray-600 mb-4">
            Browse our partner universities
          </p>
          <button className="text-[#0A1F44] font-semibold hover:text-[#0B5ED7]">
            View Universities →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaFolder className="mx-auto text-3xl text-[#F7941D] mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">My Documents</h3>
          <p className="text-sm text-gray-600 mb-4">
            Manage your uploaded documents
          </p>
          <button className="text-[#F7941D] font-semibold hover:text-[#d67a10]">
            View Documents →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <FaCalendarAlt className="mx-auto text-3xl text-[#0B5ED7] mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Consultations</h3>
          <p className="text-sm text-gray-600 mb-4">
            Schedule a meeting with counselors
          </p>
          <button className="text-[#0B5ED7] font-semibold hover:text-[#0A1F44]">
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}
