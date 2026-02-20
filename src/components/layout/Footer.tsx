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
                viewBox="0 0 1446 1492"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <path
                  d="M865.251 257.544L1028.44 299.134L720.772 783.856L546.23 739.396L506.433 166.085L669.624 207.676L670.174 474.063L669.292 619.482L738.12 491.414L865.251 257.544Z"
                  fill="currentColor"
                />
                <path
                  d="M1119.28 1184.6L1004.93 1308.19L725.688 806.466L848.033 674.258L1370.86 912.807L1256.5 1036.4L1022.1 909.783L894.744 839.714L974.518 961.33L1119.4 1184.66L1119.28 1184.6Z"
                  fill="currentColor"
                />
                <path
                  d="M170.126 924.251L127.961 761.196L700.966 797.457L746.068 971.83L262.864 1282.81L220.7 1119.76L453.973 990.994L581.84 921.746L436.46 923.146L170.239 924.317L170.126 924.251Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-xl font-semibold tracking-tight text-black">
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
            <ul className="flex flex-col gap-3 text-sm">
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
            <ul className="flex flex-col gap-3 text-sm">
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
