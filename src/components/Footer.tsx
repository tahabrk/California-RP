import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070d1a] border-t border-[#1e40af]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-xl mb-3">
              <span className="text-white">ca</span>
              <span className="text-[#0ea5e9]">dreams</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Los Angeles temalı, dengeli Hard RP FiveM sunucusu. Bir rüyadan
              fazlası...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/rules", label: "Kurallar" },
                { href: "/about", label: "Hakkımızda" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#0ea5e9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Topluluk
            </h3>
            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e40af]/20 hover:bg-[#0ea5e9]/20 border border-[#1e40af]/40 hover:border-[#0ea5e9]/40 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#0ea5e9]"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.013.043.031.055a19.944 19.944 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Discord&apos;a Katıl
            </a>
          </div>
        </div>

        <div className="border-t border-[#1e40af]/20 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} California Dreams. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
