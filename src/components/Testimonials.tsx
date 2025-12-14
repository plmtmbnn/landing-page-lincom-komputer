"use client";

import { Star, Quote, MapPin, Laptop, Printer, Wrench, Users } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jeremi",
      role: "Pengusaha",
      location: "Balige",
      review: "Laptop mati total, sekarang normal lagi. Pelayanan cepat dan ramah. Teknisinya profesional, dijelaskan dengan detail masalahnya apa. Harga juga masuk akal!",
      rating: 5,
      service: "Service Laptop",
      icon: Laptop,
      avatar: "JS"
    },
    {
      name: "Laurensius",
      role: "Pengusaha",
      location: "Toba",
      review: "Printer kantor bermasalah, langsung beres. Recommended di Balige. Service cepat, harga transparan, dan hasilnya memuaskan. Sekarang printer lancar lagi!",
      rating: 5,
      service: "Service Printer",
      icon: Printer,
      avatar: "LN"
    },
    {
      name: "Maria",
      role: "Guru",
      location: "Balige",
      review: "Beli laptop untuk mengajar online, dapat harga bagus dan bonus tas laptop. Pelayanannya ramah, dijelaskan spesifikasinya dengan detail. Puas banget!",
      rating: 5,
      service: "Penjualan Laptop",
      icon: Laptop,
      avatar: "MS"
    },
    {
      name: "Joni",
      role: "Mahasiswa",
      location: "Balige",
      review: "Upgrade RAM dan install SSD, laptop jadi super cepat! Prosesnya gak lama, teknisinya juga kasih tips maintenance. Recommended buat yang mau upgrade!",
      rating: 5,
      service: "Upgrade PC",
      icon: Wrench,
      avatar: "JO"
    }
  ];

  // Stats data
  const stats = [
    { number: "5000+", label: "Pelanggan Puas", icon: Users },
    { number: "4.9/5", label: "Rating Rata-rata", icon: Star },
    { number: "98%", label: "Tingkat Kepuasan", icon: Quote }
  ];

  return (
    <section id="testimonial" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50/30 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full mb-6 border border-blue-200/50">
            <Quote className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Testimoni Nyata dari Pelanggan Kami</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Apa Kata Mereka?
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            <p className="text-slate-600 text-lg">
              Kepuasan pelanggan adalah prioritas kami
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-4 text-center" hover={false}>
                <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-blue-600 to-slate-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={index}
              className="p-6 group cursor-pointer"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-600/20 group-hover:text-blue-600/40 transition-colors" />
                <div className={`p-2 bg-gradient-to-br from-blue-500 to-slate-600 rounded-lg`}>
                  <testimonial.icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                {testimonial.review}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span>{testimonial.role}</span>
                    <span className="w-1 h-1 bg-slate-400 rounded-full" />
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="hidden sm:block">
                  <div className="px-3 py-1 bg-blue-100/80 rounded-full text-xs font-semibold text-blue-700">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

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