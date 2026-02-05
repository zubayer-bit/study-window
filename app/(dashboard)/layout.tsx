"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // TODO: Implement authentication check
  // TODO: Get user role from session/JWT
  // TODO: Redirect to login if not authenticated
  // TODO: Use actual role from authenticated user

  // Determine role from URL path (temporary until auth is implemented)
  const role = pathname?.startsWith("/admin")
    ? "admin"
    : pathname?.startsWith("/counselor")
      ? "counselor"
      : "student";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        role={role as "admin" | "counselor" | "student"}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
          role={role as "admin" | "counselor" | "student"}
        />

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
