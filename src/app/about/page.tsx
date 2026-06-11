"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Activity, Star } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Kuruluş", value: "2025" },
  { icon: Users, label: "Oyuncu Kapasitesi", value: "100" },
  { icon: Activity, label: "Sunucu Uptime", value: "99.5%" },
  { icon: Star, label: "Etkinlik / Ay", value: "4+" },
];

const team = [
  {
    name: "Kurucu Yönetici",
    role: "Founder",
    description: "California Dreams'in vizyonunu hayata geçiren kurucu.",
    initial: "F",
  },
  {
    name: "Baş Admin",
    role: "Head Admin",
    description: "Sunucu düzenini ve kural uygulamasını yöneten yetkili.",
    initial: "A",
  },
  {
    name: "Moderatör",
    role: "Moderator",
    description: "Oyuncu deneyimini iyileştiren ve topluluğu destekleyen ekip.",
    initial: "M",
  },
  {
    name: "Script Geliştirici",
    role: "Developer",
    description: "Custom scriptleri geliştiren ve sunucuyu optimize eden geliştirici.",
    initial: "D",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#0f172a] to-transparent py-14 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#1e40af]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            Biz Kimiz
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            California{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]">
              Dreams
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Los Angeles&apos;in ruhunu FiveM dünyasına taşıyan, kaliteli roleplay topluluğu.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1e293b]/60 border border-[#1e40af]/20 rounded-3xl p-8 sm:p-10 mb-10"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Hikayemiz</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              California Dreams, Los Angeles&apos;in canlı ve çeşitli atmosferini
              FiveM platformuna taşıma hayaliyle kuruldu. Kaliteli roleplay
              deneyimini herkes için erişilebilir kılmak ve aynı zamanda yüksek
              RP standartlarını korumak amacıyla yola çıktık.
            </p>
            <p>
              Sunucumuz, &quot;Dengeli Hard RP&quot; felsefesiyle tasarlandı. Ne çok katı,
              ne de çok gevşek — kaliteyi ödün vermeden eğlenceli ve sürdürülebilir
              bir ortam sunuyoruz. 70-100 kişilik whitelist sistemiyle curated
              bir topluluk oluşturduk.
            </p>
            <p>
              Modern scriptlerimiz, özel iş sistemimiz ve düzenli etkinliklerimizle
              her oturumda yeni bir şey keşfedeceksiniz. California Dreams sadece
              bir sunucu değil — bir rüyadan fazlası.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#1e293b]/60 border border-[#1e40af]/20 rounded-2xl p-5 text-center"
            >
              <div className="bg-[#1e40af]/15 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon size={18} className="text-[#0ea5e9]" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Yönetim Ekibi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#1e293b]/60 border border-[#1e40af]/20 hover:border-[#0ea5e9]/30 rounded-2xl p-5 flex gap-4 transition-colors duration-300"
              >
                <div className="bg-gradient-to-br from-[#1e40af] to-[#0ea5e9] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  {member.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{member.name}</div>
                  <div className="text-[#0ea5e9] text-xs mb-1">{member.role}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">
                    {member.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-[#1e40af]/20 to-[#0ea5e9]/10 border border-[#1e40af]/30 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Ailemize Katıl
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Discord sunucumuza katılarak whitelist başvurusu yapabilirsin.
          </p>
          <a
            href="https://discord.gg/DWT2X6uEZb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#0ea5e9]/25 text-sm tracking-wide inline-block"
          >
            DISCORD&apos;A KATIL
          </a>
        </motion.div>
      </div>
    </div>
  );
}
