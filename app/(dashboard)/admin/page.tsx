import StatCard from "@/components/dashboard/StatCard";
import {
  FaUsers,
  FaFileAlt,
  FaUniversity,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";

export default function AdminDashboard() {
  // TODO: Fetch data from Prisma
  // TODO: Get total users, applications, universities, etc.
  // TODO: Filter by different statuses and roles

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the Study Window Admin Panel
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* TODO: Replace with actual counts from Prisma User.count() */}
        <StatCard
          icon={FaUsers}
          label="Total Users"
          value={0}
          bgColor="bg-[#0A1F44]"
        />

        {/* TODO: Replace with Prisma Application.count() */}
        <StatCard
          icon={FaFileAlt}
          label="Total Applications"
          value={0}
          bgColor="bg-[#0B5ED7]"
        />

        {/* TODO: Replace with Prisma University.count() */}
        <StatCard
          icon={FaUniversity}
          label="Partner Universities"
          value={0}
          bgColor="bg-[#F7941D]"
        />

        {/* TODO: Replace with Prisma Application.count({ where: { status: 'APPROVED' } }) */}
        <StatCard
          icon={FaCheckCircle}
          label="Approved Applications"
          value={0}
          bgColor="bg-green-600"
        />

        {/* TODO: Replace with Prisma Application.count({ where: { status: 'PENDING' } }) */}
        <StatCard
          icon={FaHourglassHalf}
          label="Pending Applications"
          value={0}
          bgColor="bg-yellow-600"
        />

        {/* TODO: Replace with Prisma Application.count({ where: { status: 'REJECTED' } }) */}
        <StatCard
          icon={FaTimesCircle}
          label="Rejected Applications"
          value={0}
          bgColor="bg-red-600"
        />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Recent Activity
        </h2>
        {/* TODO: Fetch recent applications/users from Prisma */}
        <div className="text-center py-8 text-gray-500">
          <p>No recent activity to display</p>
          <p className="text-sm mt-2">
            Activity data will be loaded from database
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Users Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            User Management
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Manage students, counselors, and administrators
          </p>
          {/* TODO: Add link to user management page */}
          <button className="w-full bg-[#0A1F44] text-white py-2 rounded-lg hover:bg-[#0B5ED7] transition-colors">
            Manage Users
          </button>
        </div>

        {/* University Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            University Management
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Add and manage partner universities and courses
          </p>
          {/* TODO: Add link to university management page */}
          <button className="w-full bg-[#F7941D] text-white py-2 rounded-lg hover:bg-[#d67a10] transition-colors">
            Manage Universities
          </button>
        </div>
      </div>
    </div>
  );
}
