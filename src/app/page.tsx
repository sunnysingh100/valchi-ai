"use client";

import Link from "next/link";
import {Copy, Activity, Phone} from "lucide-react";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-100 via-valchy-bg to-valchy-bg -z-10" />

        <div className="container mx-auto text-center relative z-10 w-full max-w-7xl flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tight leading-[1.1] text-valchy-text mb-8">
            BULGARIA&apos;S <br /> #1 AI AGENCY
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-[1.35rem] text-valchy-text-muted max-w-2xl mx-auto mb-12 font-medium">
            We specialize in building chat, voice and email agents to automate
            up-to 80% of your customer support processes.
          </p>

          {/* CTA */}
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            className="px-8 py-4 rounded-full bg-valchy-text hover:bg-black text-white font-semibold transition-all hover:scale-105 shadow-xl mb-24 z-20"
          >
            Book a Demo
          </Link>

          {/* Floating Mockups Container */}
          <div className="w-full relative h-[400px] hidden lg:block -mt-40 pointer-events-none">
            {/* Left Mockup (Code Editor) */}
            <div className="absolute left-0 top-10 w-[420px] bg-[#f9f9f9] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200/50 overflow-hidden pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="h-10 border-b border-gray-200 flex items-center px-4 gap-2 bg-[#f0f0f0]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  app.js
                </div>
              </div>
              <div className="p-6 text-xs font-mono leading-relaxed bg-[#f9f9f9]">
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
                {/* Save 85% costs */}
                {/* Automate tasks */}
                <br />
                <p>
                  <span className="text-gray-500">export default</span>{" "}
                  <span className="text-blue-500">AutomateWorkflow</span>;
                </p>

                <div className="mt-4 flex justify-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-sans text-[10px] font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Building...
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup (Dashboard) */}
            <div className="absolute right-0 top-10 w-[420px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200/50 overflow-hidden pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex items-center gap-1.5 w-64 h-6 border border-gray-100 rounded-md bg-gray-50 px-2 text-[10px] text-gray-400">
                  <Activity size={10} /> dashboard.app
                </div>
              </div>
              <div className="p-4 bg-[#f8fafc]">
                {/* Top skeleton */}
                <div className="bg-white border border-gray-100 rounded-xl p-3 mb-3 flex items-center justify-between shadow-sm">
                  <div className="space-y-1.5">
                    <div className="w-24 h-2.5 bg-gray-200 rounded-full" />
                    <div className="w-32 h-2 bg-gray-100 rounded-full" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      85%
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium">
                      Cost Saved
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      3x
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium">
                      ROI Growth
                    </div>
                  </div>
                </div>

                {/* Chart Card */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm relative overflow-hidden h-28 flex items-end justify-between px-6 pt-8 pb-4">
                  <div className="w-8 h-8 rounded-sm bg-blue-300 relative z-10" />
                  <div className="w-8 h-12 rounded-sm bg-blue-500 relative z-10" />
                  <div className="w-8 h-10 rounded-sm bg-blue-400 relative z-10" />
                  <div className="w-8 h-16 rounded-sm bg-blue-600 relative z-10" />

                  <div className="absolute bottom-2 right-2 z-20">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-[9px] font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
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
      <section className="py-10 border-t border-valchy-border bg-valchy-bg overflow-hidden flex items-center">
        <div className="container mx-auto px-6 flex items-center justify-center gap-8 md:gap-16 w-full">
          <span className="text-sm font-semibold text-valchy-text-muted whitespace-nowrap">
            Trusted By Top Brands:
          </span>
          <div className="flex items-center gap-8 md:gap-16 opacity-60 grayscale filter">
            {/* Approximations for logos to match screenshot */}
            <span className="text-xl font-bold tracking-tighter">
              transcard
            </span>
            <span className="text-xl font-serif italic font-bold">Pulse</span>
            <span className="text-xl font-black italic uppercase tracking-wider">
              ZARIMEX
            </span>
            <span className="text-xl font-medium tracking-tight flex items-center">
              <Copy size={18} className="mr-1" />
              FlexCost
            </span>
            <span className="text-xl font-serif text-gray-500">
              Nova Translate
            </span>
            <span className="text-xl font-bold tracking-tighter flex items-center justify-center border-2 border-current rounded-full w-6 h-6 mr-1">
              T
            </span>
            <span className="text-xl font-bold tracking-tighter leading-none">
              trans.card
            </span>
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
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
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
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
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
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
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
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
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
            <div className="hidden md:block absolute top-[85%] left-[20%] right-[20%] h-[2px] border-b-[3px] border-dashed border-blue-200 -translate-y-1/2 -z-10" />

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
    </div>
  );
}
