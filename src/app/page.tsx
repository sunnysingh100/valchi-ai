"use client";

import Link from "next/link";
import {Copy, Activity, Phone} from "lucide-react";
import {motion} from "framer-motion";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden flex flex-col items-center">
        {/* Background Grid and Gradient */}
        <div className="absolute inset-0 bg-white -z-20" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(100,160,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,160,210,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,transparent_20%,white)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.2),rgba(255,255,255,0))] -z-10 pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 w-full max-w-[1400px] flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="mb-5 text-5xl leading-[1.1] font-extrabold text-[#2d3138] sm:mb-8 sm:text-6xl lg:text-7xl text-center">
            BULGARIA&apos;S <br /> #1 AI AGENCY
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-7 max-w-2xl px-2 text-base leading-relaxed font-normal text-gray-700 sm:mb-10 sm:px-0 sm:text-lg text-center">
            We specialize in building chat, voice and email agents to automate
            up-to 80% of your customer support processes.
          </p>

          {/* CTA */}
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            className="inline-block w-full max-w-sm cursor-pointer rounded-full border border-gray-300 bg-white px-7 py-4 text-lg font-semibold text-gray-900 shadow-[0_6px_12px_rgba(120,180,220,0.25),0_3px_6px_rgba(120,180,220,0.15)] transition-all duration-300 hover:translate-y-[-1px] hover:bg-gray-50 hover:shadow-[0_7px_14px_rgba(100,160,210,0.3),0_3px_7px_rgba(100,160,210,0.18)] sm:w-auto sm:max-w-none sm:px-10 sm:py-5 sm:text-xl relative z-30 mb-20"
          >
            Book a Demo
          </Link>

          {/* Floating Mockups Container */}
          <div className="w-full relative h-[300px] hidden xl:block pointer-events-none -mt-40">
            {/* Left Mockup (Code Editor) */}
            <div className="absolute top-10 left-12 hidden w-[320px] xl:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(100,160,210,0.25)] pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="h-10 border-b border-gray-200/80 flex items-center px-4 gap-2 bg-[#f8fafc]/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-1.5 text-[10px] text-gray-500 font-medium mr-16">
                  <Activity size={10} /> app.js
                </div>
              </div>
              <div className="p-6 text-[10px] sm:text-xs font-mono leading-relaxed bg-white">
                <p>
                  <span className="text-gray-500">import</span>{" "}
                  <span className="text-blue-500">React</span>{" "}
                  <span className="text-gray-500">from</span>{" "}
                  <span className="text-green-600">&apos;react&apos;</span>;
                </p>
                <p>
                  <span className="text-gray-500">import</span> &#123;{" "}
                  <span className="text-blue-500">AIService</span> &#125;{" "}
                  <span className="text-gray-500">from</span>{" "}
                  <span className="text-green-600">&apos;./services&apos;</span>
                  ;
                </p>
                <br />
                <p>
                  <span className="text-blue-600">const</span>{" "}
                  <span className="text-blue-500">AutomateWorkflow</span>{" "}
                  <span className="text-gray-500">= () =&gt;</span> &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-600">const</span> result{" "}
                  <span className="text-gray-500">= await</span>{" "}
                  <span className="text-blue-500">AIService.optimize</span>();
                </p>
                <p className="pl-4">
                  <span className="text-gray-500">return</span> result.
                  <span className="text-blue-400">savings</span>;
                </p>
                <p>&#125;</p>
                <br />
                <p className="text-gray-400 italic">{/* Save 85% costs */}</p>
                <p className="text-gray-400 italic">{/* Automate tasks */}</p>
                <p>
                  <span className="text-gray-500">export default</span>{" "}
                  <span className="text-blue-500">AutomateWorkflow</span>;
                </p>
                <div className="mt-4 flex justify-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 text-blue-600 rounded-full font-sans text-[10px] font-semibold bg-blue-50 border border-blue-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Building...
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup (Dashboard) */}
            <div className="absolute top-10 right-12 hidden w-[320px] xl:block overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(100,160,210,0.4)] pointer-events-auto hover:-translate-y-2 transition-transform duration-500 border border-gray-100">
              <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex items-center justify-center gap-1.5 w-48 h-6 border border-gray-100 rounded-md bg-[#f8fafc] px-2 text-[10px] text-gray-400">
                  <span className="text-green-500 text-[8px]">●</span>{" "}
                  dashboard.app
                </div>
              </div>
              <div className="p-4 bg-white">
                {/* Top skeleton */}
                <div className="bg-white border border-gray-100 rounded-xl p-3 mb-3 flex items-center justify-between shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                  <div className="space-y-1.5">
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full" />
                    <div className="w-28 h-2 bg-gray-100 rounded-full" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#f8fafc] border border-gray-100/80 rounded-xl p-3">
                    <div className="text-xl font-bold text-[#0f172a] mb-1">
                      85%
                    </div>
                    <div className="text-[9px] text-gray-500 font-medium">
                      Cost Saved
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-gray-100/80 rounded-xl p-3">
                    <div className="text-xl font-bold text-[#0f172a] mb-1">
                      3x
                    </div>
                    <div className="text-[9px] text-gray-500 font-medium">
                      ROI Growth
                    </div>
                  </div>
                </div>

                {/* Chart Card */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 relative overflow-hidden h-24 flex items-end justify-between px-4 pt-6 pb-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                  <div className="w-6 h-6 rounded-t-sm bg-blue-200 relative z-10" />
                  <div className="w-6 h-10 rounded-t-sm bg-blue-400 relative z-10" />
                  <div className="w-6 h-8 rounded-t-sm bg-blue-300 relative z-10" />
                  <div className="w-6 h-14 rounded-t-sm bg-blue-600 relative z-10" />

                  <div className="absolute top-2 right-2 z-20">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 border border-blue-200 text-blue-600 rounded-full text-[8px] font-bold">
                      <span className="text-green-500 font-black">✓</span>
                      Live
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY TICKER */}
      <section className="py-8 border-y border-gray-100 bg-[#f8fafc] overflow-hidden flex items-center relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center w-full">
          <div className="px-8 whitespace-nowrap z-20 bg-[#f8fafc]">
            <span className="text-sm font-semibold text-gray-500/80">
              Trusted By Top Brands:
            </span>
          </div>

          <div className="flex overflow-hidden w-full relative">
            <motion.div
              className="flex items-center gap-16 min-w-max pr-16"
              initial={{x: 0}}
              animate={{x: "-50%"}}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-16">
                  {/* Logos repeated to ensure seamless loop */}
                  <span className="text-xl font-bold tracking-tighter opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    transcard
                  </span>
                  <span className="text-xl font-serif italic font-bold opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    Pulse
                  </span>
                  <span className="text-xl font-black italic uppercase tracking-wider opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    ZARIMEX
                  </span>
                  <span className="text-xl font-medium tracking-tight flex items-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    <Copy size={18} className="mr-1" />
                    FlexCost
                  </span>
                  <span className="text-xl font-serif text-gray-500 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    Nova Translate
                  </span>
                  <span className="text-xl font-bold tracking-tighter leading-none opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    trans.card
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO BEST */}
      <section className="py-24 bg-[#f8fafc] relative">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-valchy-text">
              What We Do Best
            </h2>
            <p className="text-lg text-valchy-text-muted">
              We deploy assistants where your customers already are—so you can
              automate support, lift conversions, and reactivate leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chatbot Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold text-valchy-text mb-3">
                  Chatbot Agents
                </h3>
                <p className="text-valchy-text-muted mb-8 leading-relaxed">
                  For websites, WhatsApp, Facebook Messenger, Instagram, mobile
                  apps, and more.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                <div className="self-end bg-blue-500 text-white text-sm px-4 py-2 rounded-2xl rounded-tr-md max-w-[80%]">
                  How do I track my order?
                </div>
                <div className="self-start bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-2xl rounded-tl-md max-w-[80%] shadow-sm">
                  I can help you with that! Please provide your order number.
                </div>
                <div className="self-start px-4 py-2 bg-white border border-gray-200 rounded-full flex gap-1 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-150" />
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold text-valchy-text mb-3">
                  Email Agents
                </h3>
                <p className="text-valchy-text-muted mb-8 leading-relaxed">
                  Automate email customer support with fast, accurate responses
                  and smart routing.
                </p>
              </div>
              <div className="bg-white border text-left border-gray-100 rounded-2xl shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="bg-[#f8fafc] px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500 font-medium">
                    AI Agent responding...
                  </span>
                </div>
                <div className="p-5 flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                    AI
                  </div>
                  <div className="w-full">
                    <div className="font-bold text-sm text-gray-800">
                      Support Agent
                    </div>
                    <div className="text-xs text-gray-400 mb-3">
                      support@company.com
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2" />
                    <div className="w-5/6 h-2 bg-gray-200 rounded-full mb-2" />
                    <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Voice Cards (Half width approx) */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold text-valchy-text mb-3">
                  Voice Agents
                </h3>
                <p className="text-valchy-text-muted mb-8 leading-relaxed">
                  Inbound + outbound calling agents for support, qualification,
                  and marketing calls.
                </p>
              </div>
              <div className="bg-[#ecfdf5] rounded-2xl h-48 border border-[#d1fae5] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-[#10b981]/30">
                  <Phone className="fill-current" />
                </div>
                <div className="font-bold text-gray-800">AI Voice Agent</div>
                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  Connected &bull; 00:42
                </div>
                <div className="flex gap-1 mt-6 items-end h-4">
                  <div className="w-1.5 h-2 bg-[#10b981] rounded-full" />
                  <div className="w-1.5 h-4 bg-[#10b981] rounded-full" />
                  <div className="w-1.5 h-3 bg-[#10b981] rounded-full" />
                  <div className="w-1.5 h-4 bg-[#10b981] rounded-full" />
                  <div className="w-1.5 h-2 bg-[#10b981] rounded-full" />
                </div>
              </div>
            </div>

            {/* Custom Dev Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold text-valchy-text mb-3">
                  Custom Web & AI Development
                </h3>
                <p className="text-valchy-text-muted mb-8 leading-relaxed">
                  End-to-end builds for bespoke workflows, integrations, and
                  production-grade AI systems.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 overflow-hidden shadow-sm h-48">
                <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 text-[10px] text-gray-500 font-mono">
                    custom-ai.ts
                  </div>
                </div>
                <div className="p-4 bg-[#f8fafc] font-mono text-[10px] leading-relaxed">
                  {/* AI-powered automation */}
                  <p>
                    <span className="text-purple-600">import</span> &#123;
                    AIEngine &#125;{" "}
                    <span className="text-purple-600">from</span>{" "}
                    <span className="text-green-600">
                      &apos;@valchy/core&apos;
                    </span>
                    ;
                  </p>
                  <br />
                  <p>
                    <span className="text-purple-600">async function</span>{" "}
                    <span className="text-blue-600">buildCustomAI</span>()
                    &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">const</span> engine ={" "}
                    <span className="text-purple-600">new</span>{" "}
                    <span className="text-blue-600">AIEngine</span>();
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">const</span> workflow ={" "}
                    <span className="text-purple-600">await</span> engine.
                    <span className="text-blue-500">optimize</span>();
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-600">return</span> workflow.
                    <span className="text-blue-500">deploy</span>();
                  </p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF THAT SHIPS */}
      <CaseStudiesSection />

      {/* BENEFITS */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%233b82f6'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-valchy-text">
            Benefits
          </h2>
          <p className="text-lg text-valchy-text-muted mb-20">
            What you&apos;ll achieve with our AI solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting dashed line (visible on desktop) */}
            <div className="hidden md:block absolute bottom-[28px] left-[15%] right-[15%] h-[2px] border-b-[3px] border-dashed border-blue-200 -z-10" />

            {[
              {
                title: "Automate Support",
                desc: "Handle up to 80% of customer questions instantly",
                icon: (
                  <div className="w-16 h-20 bg-blue-50 border-2 border-blue-200 border-b-blue-300 rounded-lg p-2 flex flex-col items-center justify-center relative">
                    <div className="w-10 h-10 border border-blue-200 rounded-md grid grid-cols-3 gap-1 p-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <div className="w-2 h-2 bg-blue-200 rounded-full" />
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <div className="w-2 h-2 bg-blue-200 rounded-full" />
                      <div className="w-2 h-2 bg-blue-200 rounded-full" />
                    </div>
                    <div className="absolute -left-3 top-2 w-4 h-3 bg-blue-300 rounded-sm" />
                    <div className="absolute -right-3 bottom-4 w-4 h-3 bg-blue-200 rounded-sm" />
                  </div>
                ),
                step: "1",
              },
              {
                title: "Increase Conversions",
                desc: "Boost sales by 12% with faster response times",
                icon: (
                  <div className="w-16 h-20 bg-blue-50 border-2 border-blue-200 border-b-blue-300 rounded-lg p-2 flex items-center justify-center relative">
                    <div className="w-8 h-2 bg-blue-200 absolute top-4 left-4" />
                    <div className="w-6 h-2 bg-blue-200 absolute top-8 left-4" />
                    <div className="w-10 h-10 border-2 border-blue-400 rounded-full absolute -right-4 -bottom-2 bg-white flex items-center justify-center">
                      <div className="w-4 h-4 text-blue-500 font-bold">
                        &#10003;
                      </div>
                    </div>
                  </div>
                ),
                step: "2",
              },
              {
                title: "Reactivate Leads",
                desc: "Bring $20k+ in new revenue from dormant leads",
                icon: (
                  <div className="w-24 h-16 bg-blue-50 border-2 border-blue-200 border-b-blue-300 rounded-lg p-3 relative mt-4">
                    <div className="w-full h-full border border-blue-200 flex items-center px-2 shadow-inner">
                      <div className="w-4 h-1 bg-blue-300 mr-2" />
                      <div className="w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-blue-400" />
                      <div className="w-4 h-full border-l border-blue-200 ml-auto" />
                    </div>
                    <div className="absolute -top-4 -right-2 w-6 h-6 border-2 border-blue-400 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                ),
                step: "3",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_5px_20px_-5px_rgba(59,130,246,0.1)] h-full w-full flex flex-col items-center mb-10 pb-12 relative">
                  <div className="mb-6 flex justify-center w-full min-h-[100px] items-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>

                  {/* 3 dots in corner */}
                  <div className="absolute top-6 right-6 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full bg-blue-500 text-white font-bold text-xl flex items-center justify-center shadow-lg border-4 border-blue-100 z-10 -mt-16 bg-linear-to-br from-blue-400 to-blue-600">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 md:py-40 bg-white text-center px-6 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10" />
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0f172a] tracking-tight">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-[#475569] mb-12 max-w-2xl mx-auto font-medium">
            Start your AI journey today. Get a free consultation and discover
            how AI can drive real results.
          </p>
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            className="px-10 py-5 rounded-full bg-[#2d3138] text-white font-bold text-lg hover:bg-black transition-all shadow-[0_8px_20px_rgba(100,160,210,0.4)] hover:shadow-[0_15px_30px_rgba(100,160,210,0.5)] hover:-translate-y-1"
          >
            Book Your Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
