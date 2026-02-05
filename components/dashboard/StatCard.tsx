import { IconType } from "react-icons";

interface StatCardProps {
  icon: IconType;
  label: string;
  value: string | number;
  bgColor?: string;
}

export default function StatCard({
  icon: Icon,
  label,
  value,
  bgColor = "bg-[#0A1F44]",
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div
          className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}
        >
          <Icon className="text-white text-xl" />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-medium">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
