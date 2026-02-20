"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#c8e4f2] via-[#e8f4f9] to-[#f0f8fc] pt-32 pb-8 sm:pt-40 sm:pb-12">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto max-w-5xl px-4 text-center translate-y-0 opacity-100">
              <h1
                className="mb-8 text-4xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-12 sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif`,
                  fontWeight: 800,
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                Let&apos;s Build Together
              </h1>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 translate-y-0 opacity-100">
                <div className="text-center">
                  <div
                    className="text-3xl font-extrabold text-[#2d3138] sm:text-4xl md:text-5xl"
                    style={{
                      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif`,
                      fontWeight: 800,
                    }}
                  >
                    50+
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600 sm:mt-2 sm:text-sm md:text-base">
                    Companies Automated
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-extrabold text-[#2d3138] sm:text-4xl md:text-5xl"
                    style={{
                      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif`,
                      fontWeight: 800,
                    }}
                  >
                    80%
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600 sm:mt-2 sm:text-sm md:text-base">
                    Avg. Support Deflected
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-extrabold text-[#2d3138] sm:text-4xl md:text-5xl"
                    style={{
                      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif`,
                      fontWeight: 800,
                    }}
                  >
                    3x
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600 sm:mt-2 sm:text-sm md:text-base">
                    Average ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 hidden h-20 w-20 rounded-full bg-blue-200/30 blur-2xl sm:block"></div>
        <div className="absolute right-20 bottom-10 hidden h-32 w-32 rounded-full bg-blue-300/20 blur-3xl sm:block"></div>
      </section>

      {/* STEPS SECTION */}
      <section className="relative bg-linear-to-b from-[#f0f8fc] to-[#f0f8fc] py-4 sm:py-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto max-w-5xl px-4 translate-y-0 opacity-100">
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-[#64a0d2] to-[#5b9fd4] shadow-lg sm:h-8 sm:w-8">
                    <span className="text-xs font-bold text-white sm:text-sm">
                      1
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
                    Pick a time slot
                  </span>
                </div>
                <div className="h-0.5 w-8 bg-gray-300 sm:w-12"></div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 sm:h-8 sm:w-8">
                    <span className="text-xs font-bold text-gray-500 sm:text-sm">
                      2
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-500 sm:text-sm md:text-base">
                    We&apos;ll reach out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="relative bg-linear-to-b from-[#f0f8fc] via-white to-white pt-6 pb-28 lg:pb-24">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 translate-y-0 opacity-100">
                {/* Left Column */}
                <div className="mx-auto w-full max-w-2xl space-y-6 sm:space-y-8 lg:mx-0">
                  {/* Demo Call Card */}
                  <div className="rounded-2xl border-2 border-blue-200/60 bg-white p-5 shadow-[0_10px_40px_rgba(100,160,210,0.12)] sm:rounded-3xl sm:p-8">
                    <h2
                      className="mb-4 text-2xl font-extrabold text-[#2d3138] sm:mb-6 sm:text-3xl"
                      style={{
                        fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif`,
                        fontWeight: 800,
                      }}
                    >
                      Demo Call
                    </h2>
                    <div className="space-y-4 text-gray-700 sm:space-y-6">
                      <p className="text-base leading-relaxed font-medium sm:text-lg">
                        Here&apos;s what we cover on your demo call:
                      </p>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex gap-3 sm:gap-4">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#64a0d2] to-[#5b9fd4] sm:h-6 sm:w-6">
                            <svg
                              className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="mb-1 text-sm font-bold text-gray-900 sm:text-base">
                              Your situation
                            </h3>
                            <p className="text-xs leading-relaxed sm:text-sm">
                              What you&apos;re building, where you&apos;re at
                              with AI, what you&apos;ve tried so far.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3 sm:gap-4">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#64a0d2] to-[#5b9fd4] sm:h-6 sm:w-6">
                            <svg
                              className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="mb-1 text-sm font-bold text-gray-900 sm:text-base">
                              The product
                            </h3>
                            <p className="text-xs leading-relaxed sm:text-sm">
                              We&apos;ll show you around and what actually
                              applies to your stage.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3 sm:gap-4">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#64a0d2] to-[#5b9fd4] sm:h-6 sm:w-6">
                            <svg
                              className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="mb-1 text-sm font-bold text-gray-900 sm:text-base">
                              The right fit
                            </h3>
                            <p className="text-xs leading-relaxed sm:text-sm">
                              Which plan makes sense for where you&apos;re at,
                              or if it makes sense to wait.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-3 sm:pt-4">
                        <p className="text-sm font-semibold text-[#64a0d2] sm:text-base">
                          30 min. No pitch, just clarity.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Other Ways to Reach Us Card */}
                  <div className="rounded-2xl border-2 border-blue-200/60 bg-linear-to-br from-[#c8e4f2] via-[#e8f4f9] to-white p-5 shadow-[0_10px_40px_rgba(100,160,210,0.12)] sm:rounded-3xl sm:p-8">
                    <h3 className="mb-4 text-lg font-bold text-gray-950 sm:mb-5 sm:text-xl">
                      Other Ways to Reach Us
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <div className="mb-1 text-xs font-bold tracking-wide text-gray-600 uppercase">
                          Email
                        </div>
                        <a
                          href="mailto:hi@valchy.ai"
                          className="cursor-pointer text-base font-semibold text-[#64a0d2] transition-colors hover:text-[#5b9fd4] sm:text-lg"
                        >
                          hi@valchy.ai
                        </a>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-bold tracking-wide text-gray-600 uppercase">
                          Phone
                        </div>
                        <a
                          href="tel:+35924373371"
                          className="cursor-pointer text-base font-semibold text-[#64a0d2] transition-colors hover:text-[#5b9fd4] sm:text-lg"
                        >
                          +359 24 373 371
                        </a>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-bold tracking-wide text-gray-600 uppercase">
                          Location
                        </div>
                        <p className="text-base font-semibold text-gray-900 sm:text-lg">
                          Sofia, Bulgaria
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-gray-600 sm:mt-6 sm:text-sm">
                      Prefer email? Send a message and we&apos;ll get back
                      within 1 business day.
                    </p>
                  </div>
                </div>

                {/* Right Column - Calendar Container */}
                <div
                  id="calendar-section"
                  className="hidden lg:sticky lg:top-8 lg:block"
                >
                  <div className="overflow-hidden rounded-2xl border-2 border-blue-200/60 bg-white shadow-[0_10px_40px_rgba(100,160,210,0.12)] sm:rounded-3xl">
                    <div className="bg-linear-to-r from-[#64a0d2] to-[#5b9fd4] px-5 py-4 sm:px-8 sm:py-6">
                      <h3 className="mb-1 text-xl font-bold text-white sm:mb-2 sm:text-2xl">
                        Book Your Call
                      </h3>
                      <p className="text-xs text-blue-50 sm:text-sm">
                        Choose a time that works for you
                      </p>
                    </div>
                    <div
                      className="relative w-full"
                      style={{height: "600px", backgroundColor: "#f9fafb"}}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-5 text-center sm:p-8">
                          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#64a0d2] to-[#5b9fd4] shadow-xl sm:mb-6 sm:h-20 sm:w-20">
                            <svg
                              className="h-8 w-8 text-white sm:h-10 sm:w-10"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>

                          <h3 className="mb-2 text-xl font-bold text-gray-900 sm:mb-3 sm:text-2xl">
                            Google Calendar Integration
                          </h3>
                          <p className="mx-auto mb-6 max-w-md px-2 text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
                            Click below to open our booking calendar and choose
                            your preferred time slot
                          </p>

                          <Link
                            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(100,160,210,0.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(100,160,210,0.45)] sm:gap-3 sm:px-10 sm:py-5 sm:text-lg"
                          >
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <span>Open Google Calendar</span>
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </Link>

                          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-600 sm:mt-8 sm:gap-8 sm:text-sm">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <svg
                                className="h-4 w-4 text-[#64a0d2] sm:h-5 sm:w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span className="font-medium">30 min</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <svg
                                className="h-4 w-4 text-[#64a0d2] sm:h-5 sm:w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                ></path>
                              </svg>
                              <span className="font-medium">Video call</span>
                            </div>
                          </div>
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

      {/* MOBILE FLOATING CTA */}
      <div className="fixed right-0 bottom-0 left-0 z-50 lg:hidden">
        <div className="border-t-2 border-blue-200/60 bg-linear-to-t from-white via-white to-white/95 p-4 shadow-[0_-10px_40px_rgba(100,160,210,0.2)] backdrop-blur-md">
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#64a0d2] via-[#5b9fd4] to-[#4a8fc9] px-6 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(100,160,210,0.4)] transition-all duration-500 hover:shadow-[0_12px_35px_rgba(100,160,210,0.5)] active:scale-[0.98]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span>Book a Call - 30 min</span>
            <svg
              className="h-5 w-5 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
