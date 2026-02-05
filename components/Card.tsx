export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
