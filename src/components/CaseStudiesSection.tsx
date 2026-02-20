"use client";

import Image from "next/image";

const caseStudies = [
  {
    company: "Transcard",
    description: "Bulgaria's first credit card company",
    metric: "48% customer support automation",
    logo: "/transcard-logo.png",
    stagger: "md:-translate-y-6",
  },
  {
    company: "Pulse Fitness",
    description: "Largest fitness chain in Bulgaria",
    metric: "57% reduced customer support",
    logo: "/pulse-fitness.png",
    stagger: "md:translate-y-6",
  },
  {
    company: "Zarimex",
    description: "Hunting & firearms retailer",
    metric: "90% call reduction",
    logo: "/zarimex.png",
    stagger: "md:-translate-y-6",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-linear-to-b from-[#f0f8fc] via-[#e8f4f9] to-[#f0f8fc]">
      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a8d5f2 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#2d3138] tracking-tight leading-[1.05] mb-8">
            Proof That Ships
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
            A mix of metrics and customer stories—built for production, not
            demos.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar gap-6 md:gap-12 lg:gap-16 pb-8 md:pb-0">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`min-w-[85vw] md:min-w-0 snap-center group bg-white rounded-[2.5rem] border-2 border-blue-200/60 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(100,160,210,0.25)] hover:border-blue-300 hover:-translate-y-2 ${study.stagger}`}
            >
              {/* Logo Area */}
              <div className="aspect-4/3 bg-linear-to-br from-[#c8e4f2] via-[#e8f4f9] to-white flex items-center justify-center p-12 relative overflow-hidden">
                {/* Subtle inner shadow/glow */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={study.logo}
                    alt={`${study.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-950 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {study.company}
                </h3>
                <p className="text-gray-500 text-base mb-6 font-medium leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center text-[#64a0d2] font-bold text-lg">
                  <span className="mr-2 text-2xl leading-none">•</span>
                  <span>{study.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
