"use client";

import { GLOBAL_CONST } from '@/lib/constants';
import { Monitor, MapPin, Phone, Mail, Facebook, Instagram, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    layanan: [
      { label: "Penjualan PC & Laptop", href: "#services" },
      { label: "Service & Repair", href: "#services" },
      { label: "Printer & Supplies", href: "#services" },
      { label: "Install & Upgrade", href: "#services" }
    ],
    informasi: [
      { label: "Testimoni", href: "#testimonial" },
      { label: "Lokasi", href: "#location" },
      { label: "Kontak", href: "#location" }
    ]
  };

  const contactInfo = [
    { icon: MapPin, text: "Balige, Kabupaten Toba" },
    { icon: Phone, text: GLOBAL_CONST.phone_number },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lincom Komputer</h3>
                  <p className="text-xs text-slate-400">Balige - Toba</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                Solusi terpercaya untuk kebutuhan komputer, laptop, dan printer Anda. 
                Melayani dengan profesional sejak 1998.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-slate-300">
                    <info.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Layanan Column */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Layanan</h4>
              <ul className="space-y-3">
                {footerLinks.layanan.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informasi Column */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Informasi</h4>
              <ul className="space-y-3">
                {footerLinks.informasi.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Lincom Komputer Balige.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>di Balige</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
}