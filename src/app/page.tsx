"use client";

import { motion } from "framer-motion";
import {
  Scale,
  DollarSign,
  Calendar,
  Code2,
  Shield,
  Briefcase,
  Users,
  Activity,
  ChevronDown,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Dengeli Hard RP",
    description:
      "Rol bütünlüğünü esas alan, adil yaptırım sistemiyle desteklenen kaliteli bir roleplay ortamı.",
  },
  {
    icon: DollarSign,
    title: "Gerçekçi Ekonomi",
    description:
      "Oyuncu odaklı ekonomi sistemi ve özel iş kollarıyla gerçekçi bir Los Angeles deneyimi.",
  },
  {
    icon: Calendar,
    title: "Düzenli Etkinlikler",
    description:
      "Haftalık yarışmalar, hikaye etkinlikleri ve topluluk buluşmalarıyla her zaman aktif.",
  },
  {
    icon: Code2,
    title: "Modern Scriptler",
    description:
      "Optimize edilmiş, yenilikçi custom scriptlerle diğer sunucularda olmayan özellikler.",
  },
  {
    icon: Shield,
    title: "Aktif Yönetim",
    description:
      "7/24 admin desteği ve adil kural uygulamasıyla güvenilir bir ortam garantisi.",
  },
  {
    icon: Briefcase,
    title: "Özel İş Sistemi",
    description:
      "Standart RP ötesinde benzersiz meslekler ve karakter gelişim fırsatları.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#1e3a8a]/40" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1e40af]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0ea5e9]/8 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-[#1e40af]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              FiveM Los Angeles RP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            <span className="text-white">California </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]">
              Dreams
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-3 font-light italic"
          >
            Bir Rüyadan Fazlası...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10"
          >
            Dengeli Hard RP · Gerçekçi Ekonomi · Unutulmaz Etkinlikler
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#0ea5e9]/25 text-sm tracking-wide"
            >
              DISCORD&apos;A KATIL
            </a>
            <a
              href="#features"
              className="border border-[#1e40af]/50 hover:border-[#0ea5e9]/50 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm tracking-wide"
            >
              DAHA FAZLA
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown
            className="text-gray-500 animate-bounce"
            size={24}
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Neden{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]">
                California Dreams?
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Kaliteli bir roleplay deneyimi için ihtiyacınız olan her şey burada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1e293b]/60 border border-[#1e40af]/20 hover:border-[#0ea5e9]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#1e40af]/10 group"
              >
                <div className="bg-[#1e40af]/15 group-hover:bg-[#0ea5e9]/15 w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon
                    size={22}
                    className="text-[#0ea5e9]"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Status Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e293b]/60 border border-[#1e40af]/20 rounded-3xl p-8 sm:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">
                Sunucu Aktif
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-8">
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users size={18} className="text-[#0ea5e9]" />
                  <span className="text-4xl font-bold text-white">—</span>
                </div>
                <p className="text-gray-400 text-sm">Oyuncu Online</p>
              </div>
              <div className="w-px h-12 bg-[#1e40af]/30 hidden sm:block" />
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Activity size={18} className="text-[#0ea5e9]" />
                  <span className="text-4xl font-bold text-white">100</span>
                </div>
                <p className="text-gray-400 text-sm">Maksimum Kapasite</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-8">
              Whitelist sistemi üzerinden alım yapılmaktadır. Discord&apos;a
              katılarak başvurabilirsiniz.
            </p>

            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#0ea5e9]/25 text-sm tracking-wide inline-block"
            >
              BAŞVUR
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Rüyaya katılmaya hazır mısın?
            </h2>
            <p className="text-gray-400 mb-8">
              Discord sunucumuza katıl, whitelist başvurunu yap ve California
              Dreams ailesine hoş geldin.
            </p>
            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#0ea5e9]/25 text-sm tracking-wide inline-block"
            >
              DISCORD&apos;A KATIL
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
