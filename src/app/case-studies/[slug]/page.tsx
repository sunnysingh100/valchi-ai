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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-linear-to-b from-[#c8e4f2] via-[#e8f4f9] to-[#f0f8fc]">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-12 relative h-24 md:h-32 w-full max-w-sm mx-auto">
            <Image
              src={study.logo}
              alt={`${study.company} logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            {study.heroDescription}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-200/30 blur-2xl rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-300/20 blur-3xl rounded-full" />
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg prose-blue mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              {study.challenge}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Solution
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              {study.solution}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Outcome
            </h2>
            <p className="text-gray-600 mb-16 leading-relaxed">
              {study.outcome}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 border-t border-gray-100 pt-16">
            {study.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-20 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-gray-500 font-bold hover:text-blue-600 transition-colors"
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
      <section className="py-24 px-6 relative overflow-hidden bg-linear-to-b from-white via-[#f8fbfd] to-[#f0f8fc]">
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
          <h2 className="text-4xl md:text-5xl font-black text-[#2d3138] mb-6">
            Want Similar Results?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 font-medium">
            Let&apos;s talk about how AI automation can work for your business.
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
