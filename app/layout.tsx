import "./globals.css";
import ConditionalLayout from "../components/ConditionalLayout";

export const metadata = {
  title: "Study Window",
  description: "Study Window - Student recruitment and application support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
