import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {caseStudies} from "@/data/case-studies";
import type {Metadata} from "next";

type Props = {
  params: Promise<{slug: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.company} | Valchy AI Case Study`,
    description: study.heroDescription,
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({params}: Props) {
  const {slug} = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f0f6f9]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="mb-8 relative h-16 md:h-20 w-full max-w-sm mx-auto">
            <Image
              src={study.logo}
              alt={`${study.company} logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="mb-8">
            <span className="inline-block bg-[#6ba4d8] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm shadow-blue-200">
              {study.metric}
            </span>
          </div>
          <p className="text-lg md:text-xl text-[#3b414a] font-medium leading-relaxed max-w-2xl mx-auto">
            {study.heroDescription}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          {/* Challenge */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#fa5252] text-white flex items-center justify-center shrink-0 shadow-sm shadow-red-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d3138]">
                The Challenge
              </h2>
            </div>
            <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-red-100">
              <p className="text-[#4a5568] text-[17px] leading-relaxed">
                {study.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#6ba4d8] text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d3138]">
                The Solution
              </h2>
            </div>
            <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100">
              <p className="text-[#4a5568] text-[17px] leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#20c997] text-white flex items-center justify-center shrink-0 shadow-sm shadow-green-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d3138]">
                The Outcome
              </h2>
            </div>
            <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-green-200/60">
              <p className="text-[#4a5568] text-[17px] leading-relaxed">
                {study.outcome}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12">
            {study.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-blue-50/60"
              >
                <div className="text-3xl md:text-4xl font-black text-[#6ba4d8] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-[#4a5568] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-20 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-[#4a5568] font-bold hover:text-[#6ba4d8] transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2 rotate-180"
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
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-4xl text-center relative z-10 border-t border-gray-100 pt-20">
          <h2 className="text-3xl md:text-4xl font-black text-[#2d3138] mb-6">
            Want Similar Results?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 font-medium">
            Let&apos;s talk about how AI automation can work for your business.
          </p>
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] px-8 py-4 md:px-10 md:py-4 text-lg font-bold text-white shadow-[0_15px_40px_rgba(100,160,210,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(100,160,210,0.5)]"
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
