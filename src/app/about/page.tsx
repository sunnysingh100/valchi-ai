import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Valchy AI, founded by Valeri Sabev. We're a team of engineers in Sofia, Bulgaria, who ship production-ready chat and voice AI automation.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#c8e4f2] via-[#e8f4f9] to-[#f0f8fc]">
      {/* SECTION 1: Who Are We? & The Story */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#c8e4f2] via-[#e8f4f9] to-[#f0f8fc] pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto mb-12 max-w-4xl px-4 text-center sm:mb-16">
              <h1
                className="mb-4 text-4xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
                style={{textShadow: "0 1px 2px rgba(0,0,0,0.1)"}}
              >
                Who Are We?
              </h1>
            </div>

            <div className="mx-auto max-w-5xl px-4">
              <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
                {/* Timeline Card */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-blue-200/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(100,160,210,0.2)] backdrop-blur-sm sm:rounded-3xl sm:p-10">
                    <div className="relative">
                      {/* Vertical gradient line */}
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 rounded-full bg-linear-to-b from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] sm:left-6 sm:w-1" />

                      <div className="relative space-y-6 sm:space-y-8">
                        {/* 2023 */}
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-3 border-[#64a0d2] bg-white shadow-lg sm:h-14 sm:w-14 sm:border-4">
                            <span className="text-xs font-bold text-[#64a0d2] sm:text-sm">
                              2023
                            </span>
                          </div>
                          <div className="pt-2">
                            <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                              The Problem
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                              AI that didn&apos;t work
                            </p>
                          </div>
                        </div>

                        {/* 2024 */}
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-3 border-[#64a0d2] bg-white shadow-lg sm:h-14 sm:w-14 sm:border-4">
                            <span className="text-xs font-bold text-[#64a0d2] sm:text-sm">
                              2024
                            </span>
                          </div>
                          <div className="pt-2">
                            <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                              The Solution
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                              Built practical agents
                            </p>
                          </div>
                        </div>

                        {/* 2025 */}
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-3 border-[#64a0d2] bg-white shadow-lg sm:h-14 sm:w-14 sm:border-4">
                            <span className="text-xs font-bold text-[#64a0d2] sm:text-sm">
                              Today
                            </span>
                          </div>
                          <div className="pt-2">
                            <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                              15+ companies automated
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story text */}
                <div>
                  <h2 className="mb-4 text-2xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-6 sm:text-3xl md:text-4xl">
                    The Story
                  </h2>
                  <div className="space-y-3 text-base leading-relaxed text-gray-700 sm:space-y-4 sm:text-lg">
                    <p>
                      We got tired of seeing companies burn money on AI projects
                      that never shipped—demos that looked great but
                      couldn&apos;t handle real users.
                    </p>
                    <p>
                      So we built a team that ships production-ready AI. No
                      6-month discovery phases. Just working automation from day
                      one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 hidden h-20 w-20 rounded-full bg-blue-200/30 blur-2xl sm:block" />
        <div className="absolute right-20 bottom-10 hidden h-32 w-32 rounded-full bg-blue-300/20 blur-3xl sm:block" />
      </section>

      {/* SECTION 2: The Founder */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#f0f8fc] via-[#e8f4f9] to-[#f0f8fc] py-12 sm:py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a8d5f2 2px, transparent 2px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto max-w-5xl px-4">
              <div className="mb-6 text-center sm:mb-12">
                <h2 className="mb-2 text-3xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-3 sm:text-4xl md:text-5xl">
                  The Founder
                </h2>
                <p className="text-base text-gray-600 sm:text-lg">
                  Built by someone who codes, not just consults
                </p>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border-2 border-blue-200/60 bg-white shadow-[0_20px_60px_rgba(100,160,210,0.2)] sm:rounded-3xl">
                  {/* Mobile Founder Card */}
                  <div className="lg:hidden">
                    <div className="relative flex flex-col items-center overflow-hidden bg-linear-to-br from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] p-6">
                      <div className="absolute top-5 right-5 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute bottom-5 left-5 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
                      <div className="relative z-10 mb-3 h-24 w-24 overflow-hidden rounded-2xl border-3 border-white/30 shadow-2xl">
                        <Image
                          src="/valeri_sabev_pic.jpg"
                          alt="Valeri Sabev"
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mb-1 text-xl font-bold text-white">
                        Valeri Sabev
                      </h3>
                      <p className="mb-3 text-sm font-medium text-blue-100">
                        Founder &amp; CEO
                      </p>
                      <div className="flex gap-2.5">
                        <a
                          href="https://www.linkedin.com/in/valeri-sabev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                        >
                          <svg
                            className="h-4 w-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                        <p>
                          I&apos;m the Founder of Valchy AI, where I build
                          high-converting AI chatbots and voice agents for
                          businesses. I&apos;m a Voiceflow Expert Certified
                          partner and also the creator of Hintora, a desktop
                          assistant that provides simple on-screen guidance to
                          help users navigate software faster and with fewer
                          mistakes.
                        </p>
                        <p>
                          Before focusing on AI, I spent over six years
                          developing an advanced window-configuration system for
                          Bauwerk Building Solutions. That experience shaped how
                          I approach problem-solving and taught me how to turn
                          complex requirements into reliable, real-world
                          software.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Founder Card */}
                  <div className="hidden grid-cols-5 gap-0 lg:grid">
                    <div className="relative col-span-2 flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] p-10">
                      <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                      <div className="relative z-10 mb-5 h-40 w-40 overflow-hidden rounded-3xl border-4 border-white/30 shadow-2xl">
                        <Image
                          src="/valeri_sabev_pic.jpg"
                          alt="Valeri Sabev"
                          width={160}
                          height={160}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mb-1 text-2xl font-bold text-white">
                        Valeri Sabev
                      </h3>
                      <p className="text-base font-medium text-blue-100">
                        Founder &amp; CEO
                      </p>
                      <div className="mt-5 flex gap-3">
                        <a
                          href="https://www.linkedin.com/in/valeri-sabev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                        >
                          <svg
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="col-span-3 p-10">
                      <div className="flex h-full flex-col justify-center">
                        <div className="space-y-4 leading-relaxed text-gray-700">
                          <p className="text-lg">
                            With almost ten years of experience in full stack
                            web development, I bring a unique blend of technical
                            and business expertise to every project I tackle.
                            After earning my degree in Computer Science and
                            Business from a university in Barcelona, I returned
                            to my hometown of Sofia, Bulgaria. There, I decided
                            to leverage my background to scale my expertise and
                            build something meaningful—founding and leading
                            Valchy AI, where I now serve as CEO.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Meet The Team */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#f0f8fc] via-[#e8f4f9] to-[#f0f8fc] py-12 sm:py-20">
        <div className="absolute top-20 left-10 hidden h-32 w-32 animate-pulse rounded-full bg-blue-300/20 blur-3xl sm:block" />
        <div
          className="absolute right-10 bottom-20 hidden h-40 w-40 animate-pulse rounded-full bg-blue-200/20 blur-3xl sm:block"
          style={{animationDelay: "1s"}}
        />

        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto max-w-[1800px] px-6 sm:px-8">
              <div className="mb-6 text-center sm:mb-16">
                <h2 className="mb-3 text-3xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-4 sm:text-4xl md:text-5xl">
                  Meet The Team
                </h2>
                <p className="mx-auto max-w-2xl px-4 text-base text-gray-600 sm:text-lg">
                  Engineers who build, ship, and support your AI systems in
                  production
                </p>
              </div>

              {/* Grid map for Team */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
                {[
                  {
                    name: "Nikolay Todorov",
                    desc: "Full Stack Developer",
                    img: "/nikolay.png",
                    link: "https://www.linkedin.com/in/n-todorov508/",
                    badges: ["React", "Node.js", "AI Integration"],
                    colors: "from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9]",
                  },
                  {
                    name: "Sven Nevin",
                    desc: "Full Stack Developer",
                    img: "/sven.jpeg",
                    link: "https://www.linkedin.com/in/svennevin/",
                    badges: ["TypeScript", "APIs", "DevOps"],
                    colors: "from-[#5b9fd4] via-[#64a0d2] to-[#6ba8d6]",
                  },
                  {
                    name: "Aleksandar Velev",
                    desc: "Marketing Specialist",
                    img: "/alex.png",
                    link: "https://www.linkedin.com/in/aleksvelev12/",
                    badges: ["Strategy", "Growth", "Analytics"],
                    colors: "from-[#4a8fc9] via-[#5b9fd4] to-[#64a0d2]",
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="group relative h-full overflow-hidden rounded-2xl border-2 border-blue-200/60 bg-white shadow-[0_15px_50px_rgba(100,160,210,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_25px_70px_rgba(100,160,210,0.3)] sm:rounded-3xl"
                  >
                    <div
                      className={`relative bg-linear-to-br ${member.colors} flex aspect-video items-center justify-center overflow-hidden`}
                    >
                      <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:scale-150" />
                        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-150" />
                        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
                      </div>
                      <div className="relative z-10 h-24 w-24 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl transition-all duration-500 group-hover:scale-110 sm:h-28 sm:w-28">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="relative p-5 sm:p-6">
                      <div className="mb-3 text-center sm:mb-4">
                        <h3 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-[#64a0d2] sm:text-base">
                          {member.desc}
                        </p>
                      </div>
                      <div className="mb-4 flex flex-wrap justify-center gap-2">
                        {member.badges.map((b) => (
                          <span
                            key={b}
                            className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-[#64a0d2]"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center gap-2.5">
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#64a0d2] to-[#5b9fd4] shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        >
                          <svg
                            className="h-4 w-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 h-2 w-2 animate-pulse rounded-full bg-white/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Let's Build */}
      <section className="relative bg-linear-to-b from-[#f0f8fc] via-[#e8f4f9] to-white py-12 sm:py-20">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto max-w-3xl px-4 text-center">
              <h2 className="mb-4 text-3xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-5 sm:text-4xl md:text-5xl">
                Let&apos;s Build
              </h2>
              <p className="mb-6 text-base text-gray-700 sm:mb-8 sm:text-lg">
                No hype. Just honest conversation about what AI can do for your
                business.
              </p>
              <a
                href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(100,160,210,0.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(100,160,210,0.45)] sm:gap-3 sm:px-10 sm:py-5 sm:text-lg"
              >
                <span>Book a Call</span>
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
