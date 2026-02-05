import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1f44] text-gray-300 mt-auto">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4 bg-gradient-to-r from-white/80 via-blue-400/10 to-transparent p-3 rounded-lg backdrop-blur-sm">
              <Image
                src="/study-window-logo-500-rem.png"
                alt="Study Window Logo"
                width={70}
                height={40}
                className="object-contain opacity-100"
              />
              {/* <h3 className="text-xl font-bold text-white">Study Window</h3> */}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A leading Local (UK & EU) and international student recruitment
              agency in London. We offer free application assistance to students
              looking to enroll in a UK university.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/study-options"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Study Options
                </Link>
              </li>
              <li>
                <Link
                  href="/other-services"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Other Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Study Programs
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pre-sessional-english"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Pre-Sessional English
                </Link>
              </li>
              <li>
                <Link
                  href="/foundation"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="/undergraduate"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link
                  href="/postgraduate"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Postgraduate
                </Link>
              </li>
              <li>
                <Link
                  href="/pre-arrival"
                  className="text-gray-300 hover:text-[#F7941D] transition-colors"
                >
                  Pre-Arrival Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <address className="not-italic text-sm text-gray-400 space-y-3">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#F7941D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  606 Romford Road
                  <br />
                  London E12 5AF
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[#F7941D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Phone: </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[#F7941D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email: </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Study Window. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/about"
                className="hover:text-[#F7941D] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                className="hover:text-[#F7941D] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
