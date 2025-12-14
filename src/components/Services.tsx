import { GLOBAL_CONST } from '@/lib/constants';
import { Monitor, Printer, Wrench, Settings, HardDrive, Stethoscope, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export default function Services() {
  const services = [
    {
      title: "Penjualan PC & Laptop",
      desc: "Laptop baru & second, PC rakitan sesuai kebutuhan rumah, kantor, dan sekolah.",
      icon: Monitor,
      gradient: "from-blue-500 to-blue-600",
      highlights: ["Garansi Resmi", "Harga Kompetitif", "Konsultasi Gratis"]
    },
    {
      title: "Printer & Aksesoris",
      desc: "Printer inkjet & laser, tinta, cartridge, dan sparepart komputer.",
      icon: Printer,
      gradient: "from-slate-500 to-slate-600",
      highlights: ["Original & Compatible", "Stok Lengkap", "Harga Terjangkau"]
    },
    {
      title: "Service PC & Laptop",
      desc: "Mati total, lemot, blue screen, upgrade SSD/RAM, dan perbaikan lainnya.",
      icon: Wrench,
      gradient: "from-blue-600 to-slate-600",
      highlights: ["Teknisi Berpengalaman", "Gratis Diagnosa", "Bergaransi"]
    },
    {
      title: "Service Printer",
      desc: "Printer tidak cetak, error, tinta bocor, dan perawatan rutin.",
      icon: Settings,
      gradient: "from-slate-600 to-blue-600",
      highlights: ["Service Cepat", "Sparepart Original", "Maintenance Rutin"]
    },
    {
      title: "Install & Upgrade",
      desc: "Install Windows, software, antivirus, serta upgrade performa.",
      icon: HardDrive,
      gradient: "from-blue-500 to-slate-500",
      highlights: ["Software Legal", "Upgrade SSD/RAM", "Optimasi Sistem"]
    },
    {
      title: "Cek & Diagnosa",
      desc: "Pengecekan awal & konsultasi untuk mengetahui kerusakan.",
      icon: Stethoscope,
      gradient: "from-slate-500 to-blue-500",
      highlights: ["Gratis Cek", "Konsultasi Expert", "Solusi Tepat"]
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" />
      
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full mb-6 border border-blue-200/50">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Layanan Lengkap & Terpercaya</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Layanan Lincom Komputer
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            <p className="text-slate-600 text-lg">
              Solusi lengkap penjualan dan service komputer di Balige – Toba
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <GlassCard 
              key={service.title}
              className="p-6 group cursor-pointer"
            >
              {/* Icon Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Content */}
              <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-4 border-t border-slate-200/50">
                {service.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <GlassCard className="p-8 text-center" hover={false}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Butuh Bantuan Teknis?
            </h3>
            <p className="text-slate-600 mb-6">
              Tim kami siap membantu Anda dengan konsultasi gratis dan solusi terbaik untuk kebutuhan komputer Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={GLOBAL_CONST.whatsapp_number}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Konsultasi Sekarang
              </a>
              <a 
                href="#location" 
                className="px-6 py-3 bg-white/80 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-white hover:border-blue-400 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Kunjungi Toko
                <ArrowRight className="w-5 h-5" />
              </a>
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