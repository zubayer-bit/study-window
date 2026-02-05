import StatCard from "@/components/dashboard/StatCard";
import {
  FaUsers,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaCalendarAlt,
} from "react-icons/fa";

export default function CounselorDashboard() {
  // TODO: Fetch data from Prisma
  // TODO: Get counselor's assigned students
  // TODO: Get applications managed by this counselor
  // TODO: Get upcoming consultations

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Counselor Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome to your Study Window Counselor Panel
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* TODO: Replace with Prisma Student.count({ where: { counselorId: currentUserId } }) */}
        <StatCard
          icon={FaUsers}
          label="My Students"
          value={0}
          bgColor="bg-[#0A1F44]"
        />

        {/* TODO: Replace with Application.count({ where: { counselorId: currentUserId } }) */}
        <StatCard
          icon={FaFileAlt}
          label="Applications"
          value={0}
          bgColor="bg-[#0B5ED7]"
        />

        {/* TODO: Replace with Application.count({ where: { counselorId: currentUserId, status: 'APPROVED' } }) */}
        <StatCard
          icon={FaCheckCircle}
          label="Approved"
          value={0}
          bgColor="bg-green-600"
        />

        {/* TODO: Replace with Application.count({ where: { counselorId: currentUserId, status: 'PENDING' } }) */}
        <StatCard
          icon={FaHourglassHalf}
          label="Pending"
          value={0}
          bgColor="bg-yellow-600"
        />
      </div>

      {/* Upcoming Consultations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <FaCalendarAlt className="text-[#F7941D] text-xl" />
          <h2 className="text-xl font-bold text-gray-900">
            Upcoming Consultations
          </h2>
        </div>
        {/* TODO: Fetch from Prisma Consultation.findMany({ where: { counselorId: currentUserId, date: { gte: new Date() } } }) */}
        <div className="text-center py-8 text-gray-500">
          <p>No upcoming consultations</p>
          <p className="text-sm mt-2">
            Consultation data will be loaded from database
          </p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Recent Applications
        </h2>
        {/* TODO: Fetch from Prisma Application.findMany({ where: { counselorId: currentUserId }, orderBy: { createdAt: 'desc' }, take: 5 }) */}
        <div className="text-center py-8 text-gray-500">
          <p>No applications to display</p>
          <p className="text-sm mt-2">
            Application data will be loaded from database
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Students */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">My Students</h3>
          <p className="text-gray-600 text-sm mb-4">
            View and manage your assigned students
          </p>
          {/* TODO: Add link to students page */}
          <button className="w-full bg-[#0A1F44] text-white py-2 rounded-lg hover:bg-[#0B5ED7] transition-colors">
            View Students
          </button>
        </div>

        {/* Schedule Consultation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Schedule Consultation
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Book a consultation with your students
          </p>
          {/* TODO: Add link to consultation booking page */}
          <button className="w-full bg-[#F7941D] text-white py-2 rounded-lg hover:bg-[#d67a10] transition-colors">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  );
}
