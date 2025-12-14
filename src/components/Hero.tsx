"use client";

import { useState } from "react";

/* ---------------------------------------------
 * Static Config
 * ------------------------------------------- */
const SERVICES = [
  {
    label: "Service Laptop",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: {
      bg: "bg-blue-50/80",
      border: "border-blue-300",
      iconBg: "bg-blue-100",
      iconText: "text-blue-600",
    },
  },
  {
    label: "Service PC",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: {
      bg: "bg-indigo-50/80",
      border: "border-indigo-300",
      iconBg: "bg-indigo-100",
      iconText: "text-indigo-600",
    },
  },
  {
    label: "Perbaikan Hardware",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: {
      bg: "bg-slate-50/80",
      border: "border-slate-300",
      iconBg: "bg-slate-100",
      iconText: "text-slate-600",
    },
  },
  {
    label: "Service Gadget",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: {
      bg: "bg-cyan-50/80",
      border: "border-cyan-300",
      iconBg: "bg-cyan-100",
      iconText: "text-cyan-600",
    },
  },
];

const FEATURES = [
  "Paling lengkap",
  "Sparepart original",
  "Teknisi bersertifikat",
  "Gratis konsultasi",
];

const yearsFrom1998 = () => new Date().getFullYear() - 1998;
const WHATSAPP_NUMBER = "https://wa.me/6281234567890"; // Replace with actual number

/* ---------------------------------------------
 * Hero Section
 * ------------------------------------------- */
export default function HeroSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Replace with your actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-white"></div>
        
        {/* Optional: Add actual image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/hero-pattern.png')", // Add your pattern/image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Subtle animated orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">
                Buka 07:00 – 19:00 WIB
              </span>
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Headings */}
            <header className="space-y-6">
              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight"
              >
                Lincom{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-700">Komputer</span>
                  <span className="absolute inset-x-0 bottom-2 h-4 bg-blue-200/50 -rotate-1 rounded"></span>
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
                Service Laptop, PC & Printer — Lincom Komputer
              </h2>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                Partner teknologi profesional dengan garansi resmi, harga transparan,
                dan layanan cepat di Balige & sekitar Toba.
              </p>
            </header>

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-3 max-w-xl">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-100">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${WHATSAPP_NUMBER}?text=Halo%20Lincom%20Komputer`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Konsultasi Gratis
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 font-semibold hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Lihat Layanan
              </a>
            </div>

            {/* Quick Info */}
            <p className="inline-flex items-center gap-2 text-sm text-slate-600 bg-amber-50/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-200">
              <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">Respon WhatsApp rata-rata &lt; 5 menit</span>
            </p>
          </div>

          {/* RIGHT CONTENT - Stats & Services Card */}
          <div className="animate-slide-in-right">
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-700 tabular-nums mb-1">
                    {yearsFrom1998()}+
                  </div>
                  <div className="text-sm font-medium text-slate-600">Tahun Berpengalaman</div>
                </div>

                <div className="text-center p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-200">
                  <div className="text-3xl lg:text-4xl font-bold text-indigo-700 tabular-nums mb-1">
                    5K+
                  </div>
                  <div className="text-sm font-medium text-slate-600">Klien Puas</div>
                </div>

                <div className="text-center p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-700 tabular-nums mb-1">
                    99%
                  </div>
                  <div className="text-sm font-medium text-slate-600">Tingkat Kepuasan</div>
                </div>

                <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200">
                  <svg className="w-8 h-8 text-amber-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-600">Bersertifikat</span>
                </div>
              </div>

              {/* Services Grid */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Layanan Kami
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((s, i) => (
                    <div
                      key={s.label}
                      onMouseEnter={() => setActiveService(i)}
                      onMouseLeave={() => setActiveService(null)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                        activeService === i
                          ? `${s.color.bg} ${s.color.border} shadow-md scale-105`
                          : "bg-white/60 border-slate-200 hover:border-slate-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${s.color.iconBg} transition-transform duration-300 ${activeService === i ? 'scale-110' : ''}`}>
                          <div className={s.color.iconText}>
                            {s.icon}
                          </div>
                        </div>
                        <span className="font-medium text-slate-700 text-sm">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-2xl bg-blue-100 border-4 border-white flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-slate-100 border-4 border-white flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}