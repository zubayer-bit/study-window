"use client";

import { FaBars, FaBell, FaSignOutAlt } from "react-icons/fa";

interface DashboardHeaderProps {
  onMenuClick: () => void;
  role: "admin" | "counselor" | "student";
}

export default function DashboardHeader({
  onMenuClick,
  role,
}: DashboardHeaderProps) {
  // TODO: Fetch user data from session/Prisma
  // TODO: Get user name and avatar from authenticated user
  const userName = "User"; // Placeholder

  const handleLogout = () => {
    // TODO: Implement logout logic
    // TODO: Clear session/JWT token
    // TODO: Redirect to login page
    console.log("Logout clicked");
  };

  return (
    <header className="h-16 bg-[#0A1F44] border-b border-white/10 flex items-center justify-between px-4 lg:px-6">
      {/* Left: Menu Button & Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-white hover:text-gray-300 transition-colors"
        >
          <FaBars size={20} />
        </button>
        <h1 className="text-white text-lg font-semibold capitalize hidden sm:block">
          {role} Dashboard
        </h1>
      </div>

      {/* Right: Notifications & User Menu */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-white hover:text-gray-300 transition-colors">
          <FaBell size={20} />
          {/* TODO: Add notification count badge from Prisma */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F7941D] rounded-full text-xs flex items-center justify-center text-white">
            0
          </span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-white">{userName}</p>
            <p className="text-xs text-gray-400 capitalize">{role}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F7941D] flex items-center justify-center text-white font-semibold">
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-white hover:text-[#F7941D] transition-colors"
          title="Logout"
        >
          <FaSignOutAlt size={20} />
        </button>
      </div>
    </header>
  );
}
