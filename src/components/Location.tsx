"use client";

import { GLOBAL_CONST } from '@/lib/constants';
import { MapPin, Clock, Phone, Mail, Navigation, MessageCircle, Wrench, ExternalLink } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';


export default function Location() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Sisingamangaraja, Balige",
      subValue: "Kabupaten Toba, Sumatera Utara",
      color: "blue"
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin - Sabtu: 07.00 - 19.00",
      subValue: "Minggu: 09.00 - 17.00",
      color: "slate"
    },
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: GLOBAL_CONST.phone_number,
      subValue: "Fast Response",
      color: "blue",
      link: `${GLOBAL_CONST.whatsapp_number}`
    }
  ];

  return (
    <section id="location" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full mb-6 border border-blue-200/50">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Kunjungi Toko Kami</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Lokasi & Kontak
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            <p className="text-slate-600 text-lg">
              Mudah ditemukan di pusat kota Balige
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Store Card */}
            <GlassCard className="p-8" hover={false}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">
                    Lincom Komputer Balige
                  </h3>
                  <p className="text-slate-600">Solusi Komputer Terpercaya</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                  >
                    <div className={`p-2 bg-${info.color}-100 rounded-lg group-hover:bg-${info.color}-200 transition-colors`}>
                      <info.icon className={`w-5 h-5 text-${info.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-semibold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-2"
                        >
                          {info.value}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <p className="font-semibold text-slate-800">{info.value}</p>
                      )}
                      <p className="text-sm text-slate-500 mt-1">{info.subValue}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-200/50">
                <a
                  href={GLOBAL_CONST.whatsapp_number}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  WhatsApp Kami
                </a>
                <a
                  href="https://maps.app.goo.gl/ch2w8fZLJXPNAEdB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Buka Maps
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-6">
            <GlassCard className="overflow-hidden" hover={false}>
              <div className="relative">
                {/* Map Header */}
                <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-slate-900/80 to-transparent">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm">Lincom Komputer</p>
                      <p className="text-xs opacity-90">Balige, Kabupaten Toba</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Iframe */}
                <iframe
                  title="Google Maps Lincom Komputer Balige"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4905.273438597928!2d99.06596977588997!3d2.334075257620198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e05f3e4ad2853%3A0xe2760cd17fa2f515!2sTOKO%20KOMPUTER!5e1!3m2!1sen!2sid!4v1765706266293!5m2!1sen!2sid"
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />

                {/* Map Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <a
                    href="https://maps.app.goo.gl/ch2w8fZLJXPNAEdB8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-slate-800 hover:bg-white transition-all"
                  >
                    <Navigation className="w-4 h-4 text-blue-600" />
                    Lihat di Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Directions Info */}
            <GlassCard className="p-6" hover={false}>
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-blue-600" />
                Petunjuk Arah
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Depan BRI Balige</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Dekat dengan pusat kota dan mudah diakses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Parkir luas dan aman untuk kendaraan roda 2 & 4</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Bottom Info Banner */}
        <GlassCard className="p-6 text-center" hover={false}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-5 h-5 text-blue-600" />
              <span><strong>Buka Setiap Hari</strong> • Layanan Cepat & Profesional</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2 text-slate-700">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span><strong>WhatsApp Fast Response</strong> • 24/7 Online</span>
            </div>
          </div>
        </GlassCard>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}