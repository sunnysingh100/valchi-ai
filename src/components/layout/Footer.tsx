import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-valchy-bg pt-20 pb-10 border-t border-valchy-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <path
                  d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-black">
                Valchy AI
              </span>
            </Link>
            <p className="text-valchy-text-muted max-w-sm mb-6 leading-relaxed">
              Building the future of AI automation. Transform your business with
              intelligent solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-black font-semibold mb-4 text-lg">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-valchy-text-muted hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-valchy-text-muted hover:text-black transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-valchy-text-muted hover:text-black transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-valchy-text-muted hover:text-black transition-colors"
                >
                  Hackathon
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-black font-semibold mb-4 text-lg">Contacts</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:valchyai@gmail.com"
                  className="text-valchy-text-muted hover:text-black transition-colors"
                >
                  valchyai@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+35924373371"
                  className="text-valchy-text-muted hover:text-black transition-colors"
                >
                  +359 24 373 371
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-valchy-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-valchy-text-muted">
          <p>© {new Date().getFullYear()} Valchy AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Terms of Use
            </Link>
            <Link
              href="/contact"
              className="hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
