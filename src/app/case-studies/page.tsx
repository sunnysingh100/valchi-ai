"use client";

import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    company: "Transcard",
    description:
      "Bulgaria's first credit card company needed to handle repetitive inquiries at scale. We built a chatbot with complex menu-driven flows from their...",
    metric: "48% customer support automation",
    logo: "/transcard-logo.png",
  },
  {
    company: "Pulse Fitness",
    description:
      "Bulgaria's largest fitness chain (26 locations, 13x Fitness of the Year) needed to scale customer engagement. We're building a chatbot across web,...",
    metric: "57% reduced customer support",
    logo: "/pulse-fitness.png",
  },
  {
    company: "Zarimex",
    description:
      "Bulgarian hunting & firearms retailer was drowning in 100+ daily calls. We built a chatbot targeting 50% reduction—achieved 90% instead, proving channel...",
    metric: "90% call reduction",
    logo: "/zarimex.png",
  },
  {
    company: "FlexCost",
    description:
      "US-based window quoting software company and 7+ year client. We built their entire B2C and B2B configuration platform—and this year added voice...",
    metric: "Voice-powered window configuration",
    logo: "/flex-cost.webp",
  },
  {
    company: "Nova Translate",
    description:
      "Bulgarian translation agency (15 years, 10K+ projects, clients like Binance & Revolut) needed to scale quoting. We built a chatbot that analyzes uploaded...",
    metric: "AI-powered quoting system",
    logo: "/nova-translate.png",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-linear-to-b from-[#c8e4f2] via-[#e8f4f9] to-[#f0f8fc]">
        <div className="container mx-auto text-center relative z-10">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2d3138] tracking-tight leading-[1.05] mb-8"
            style={{textShadow: "0 1px 2px rgba(0,0,0,0.1)"}}
          >
            Proof That Ships
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
            Everything we build is designed for production.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-200/30 blur-2xl rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-300/20 blur-3xl rounded-full" />
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 bg-linear-to-b from-[#f0f8fc] via-white to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2.5rem] border-2 border-blue-200/60 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(100,160,210,0.2)] hover:border-blue-300 hover:-translate-y-2"
              >
                {/* Logo Area */}
                <div className="aspect-video bg-linear-to-br from-[#c8e4f2] via-[#e8f4f9] to-white flex items-center justify-center p-12 relative overflow-hidden">
                  {/* Metric Ribbon/Capsule */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-linear-to-r from-[#64a0d2] to-[#5b9fd4] text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {study.metric}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={study.logo}
                      alt={`${study.company} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {study.company}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed font-medium">
                    {study.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-500 font-bold hover:text-blue-700 transition-colors"
                  >
                    Read case study
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a8d5f2 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#2d3138] mb-6">
            Want Results Like These?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 font-medium">
            Let&apos;s talk about what we can build for your business.
          </p>
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] px-8 py-4 md:px-12 md:py-5 text-lg font-bold text-white shadow-[0_15px_40px_rgba(100,160,210,0.4)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(100,160,210,0.5)]"
          >
            Book a Call
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
