"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaFileAlt,
  FaUniversity,
  FaBook,
  FaCalendarAlt,
  FaFolder,
  FaUser,
  FaTimes,
} from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role: "admin" | "counselor" | "student";
}

export default function Sidebar({ isOpen, onClose, role }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { icon: FaHome, label: "Dashboard", href: `/${role}` },
    { icon: FaFileAlt, label: "Applications", href: `/${role}/applications` },
    {
      icon: FaUniversity,
      label: "Universities",
      href: `/${role}/universities`,
    },
    { icon: FaBook, label: "Courses", href: `/${role}/courses` },
    {
      icon: FaCalendarAlt,
      label: "Consultations",
      href: `/${role}/consultations`,
    },
    { icon: FaFolder, label: "Documents", href: `/${role}/documents` },
    { icon: FaUser, label: "Profile", href: `/${role}/profile` },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#0A1F44] text-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
          <Link href="/" className="text-xl font-bold text-white">
            Study Window
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#0B5ED7] text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={onClose}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4">
          <p className="text-xs text-gray-400 text-center">
            © 2026 Study Window
          </p>
        </div>
      </aside>
    </>
  );
}
