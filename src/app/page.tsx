"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import {
  Scale, DollarSign, Calendar, Code2, Shield,
  ChevronDown,
} from "lucide-react";

/* ─── FEATURES ─── */
const features = [
  {
    icon: Scale,
    title: "Dengeli Hard RP",
    description: "Rol bütünlüğünü esas alan, adil yaptırım sistemiyle desteklenen kaliteli bir roleplay ortamı seni bekliyor.",
  },
  {
    icon: DollarSign,
    title: "Gerçekçi Ekonomi",
    description: "Oyuncu odaklı ekonomi sistemi ve özel iş kollarıyla gerçek hayatı taklit eden bir dünya.",
  },
  {
    icon: Calendar,
    title: "Düzenli Etkinlikler",
    description: "Haftalık yarışmalar, hikaye etkinlikleri ve topluluk buluşmalarıyla her zaman aktif bir sunucu.",
  },
  {
    icon: Code2,
    title: "Modern Scriptler",
    description: "Optimize edilmiş ve yenilikçi custom scriptlerle diğer sunucularda bulamayacağın özellikler.",
  },
  {
    icon: Shield,
    title: "Aktif Yönetim",
    description: "7/24 admin desteği ve adil kural uygulamasıyla güvenilir, huzurlu bir ortam garantisi.",
  },
];

/* ─── JOIN STEPS ─── */
const steps = [
  { num: "01", title: "Discord'a Katıl", desc: "Bağlantıya tıkla, sunucumuza katıl ve başvuru kanalını bul." },
  { num: "02", title: "Sesli Mülakata Gir", desc: "Ekibimizle kısa bir sesli görüşme yaparak kendini tanıt." },
  { num: "03", title: "Onay Bekle", desc: "Ekibimiz değerlendirmeni tamamlar ve seni bilgilendirir." },
  { num: "04", title: "Oynamaya Başla", desc: "Onaylandıktan sonra karakter oluştur ve maceraya atıl!" },
];

/* ─── ANIMATION VARIANTS ─── */
const easeOut: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">

      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* — ca_dreams background image — */}
        <div className="absolute inset-0 animate-subtle-zoom origin-center"
          style={{
            backgroundImage: "url('/ca_dreams.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />

        {/* — Animated zooming background gradient — */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 50%, rgba(30,64,175,0.22) 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 70% 60%, rgba(14,165,233,0.12) 0%, transparent 70%),
              rgba(6,6,16,0.70)
            `,
          }}
        />

        {/* — Grid overlay — */}
        <div className="absolute inset-0 bg-grid opacity-100" />

        {/* — Radial glow center — */}
        <div className="absolute inset-0 animate-glow-pulse pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(14,165,233,0.08) 0%, transparent 65%)",
          }}
        />

        {/* — Top-left decorative orb — */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(30,64,175,0.20) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        {/* — Bottom-right orb — */}
        <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        {/* — Floating decorative dots — */}
        {[
          { top: "20%", left: "10%", size: 6, delay: "0s" },
          { top: "70%", left: "8%",  size: 4, delay: "1s" },
          { top: "40%", right: "8%", size: 5, delay: "2s" },
          { top: "80%", right: "15%",size: 3, delay: "0.5s" },
          { top: "15%", right: "20%",size: 4, delay: "1.5s" },
        ].map((dot, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none animate-glow-pulse"
            style={{
              top: dot.top, left: (dot as any).left, right: (dot as any).right,
              width: dot.size, height: dot.size,
              background: "#0ea5e9",
              boxShadow: `0 0 ${dot.size * 3}px #0ea5e9`,
              animationDelay: dot.delay,
            }}
          />
        ))}

        {/* — HERO CONTENT — */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, rgba(30,64,175,0.25), rgba(14,165,233,0.15))",
                border: "1px solid rgba(14,165,233,0.35)",
                color: "#38bdf8",
                boxShadow: "0 0 20px rgba(14,165,233,0.15)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              FiveM Los Angeles RP · Türkçe
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", letterSpacing: "-0.03em" }}
          >
            <span className="block text-white">California</span>
            <span className="block text-shimmer">Dreams</span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mb-6 h-px w-48"
            style={{ background: "linear-gradient(90deg, transparent, #0ea5e9, transparent)" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-2 italic font-light"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
          >
            Bir Rüyadan Fazlası...
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-500 text-sm sm:text-base mb-10 tracking-wider"
          >
            BALANCED HARD RP &nbsp;·&nbsp; REALİSTİK EKONOMİ &nbsp;·&nbsp; ÖZEL ETKİNLİKLER
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank" rel="noopener noreferrer"
              className="btn-glow text-white font-bold px-8 py-4 rounded-xl text-sm tracking-widest uppercase inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.013.043.031.055a19.944 19.944 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Discord&apos;a Katıl
            </a>

            <a href="#features"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-sm tracking-widest uppercase text-gray-300 hover:text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
            >
              Keşfet
              <ChevronDown size={16} />
            </a>
          </motion.div>
        </div>

        {/* — Scroll indicator — */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs tracking-widest uppercase">Kaydır</span>
          <div className="animate-bounce-down w-px h-8"
            style={{ background: "linear-gradient(to bottom, #0ea5e9, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════
          FEATURES
      ══════════════════════════════ */}
      <section id="features" className="py-28 px-4 sm:px-6 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(30,64,175,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          {/* Heading */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#0ea5e9" }}>
              Neden California Dreams?
            </p>
            <h2 className="font-black leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              <span className="text-white">Sunucuyu </span>
              <span className="text-gradient">Farklı Kılan</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Kaliteli bir roleplay deneyimi için ihtiyacın olan her şey tek bir yerde.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                custom={i} viewport={{ once: true }}
                className="glass-card rounded-2xl p-7 group cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(30,64,175,0.25), rgba(14,165,233,0.15))",
                    border: "1px solid rgba(14,165,233,0.25)",
                    boxShadow: "0 0 20px rgba(14,165,233,0.1)",
                  }}
                >
                  <f.icon size={22} style={{ color: "#0ea5e9" }} />
                </div>

                {/* Accent line */}
                <div className="w-8 h-0.5 mb-4 rounded-full"
                  style={{ background: "linear-gradient(90deg, #1e40af, #0ea5e9)", opacity: 0.6 }}
                />

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HOW TO JOIN
      ══════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="max-w-5xl mx-auto relative">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#0ea5e9" }}>
              Nasıl Katılırım?
            </p>
            <h2 className="font-black mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              <span className="text-white">Aramıza </span>
              <span className="text-gradient">Katıl</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp} initial="hidden" whileInView="show"
                custom={i} viewport={{ once: true }}
                className="relative glass-card rounded-2xl p-6 text-center"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-5 h-px z-10"
                    style={{ background: "linear-gradient(90deg, rgba(14,165,233,0.4), transparent)" }}
                  />
                )}
                <div className="text-4xl font-black mb-3 text-gradient opacity-60">{step.num}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVER STATUS
      ══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,64,175,0.15), rgba(14,165,233,0.08))",
              border: "1px solid rgba(14,165,233,0.20)",
              boxShadow: "0 0 60px rgba(14,165,233,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Inner glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #0ea5e9, transparent)" }}
            />

            <div className="p-10 sm:p-14 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Sunucu Aktif</span>
              </div>

              <h2 className="font-black mb-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                <span className="text-white">Rüyaya Katılmaya </span>
                <span className="text-gradient">Hazır mısın?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Discord sunucumuza katıl, whitelist başvurunu yap ve California
                Dreams ailesine hoş geldin.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <div className="text-center">
                  <div className="text-5xl font-black text-white leading-none">WL</div>
                  <div className="text-gray-500 text-xs mt-1 tracking-wider">WHİTELİST</div>
                </div>
                <div className="w-px h-14 hidden sm:block"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(14,165,233,0.3), transparent)" }}
                />
                <div className="text-center">
                  <div className="text-5xl font-black text-gradient leading-none">TR</div>
                  <div className="text-gray-500 text-xs mt-1 tracking-wider">TÜRKÇE</div>
                </div>
                <div className="w-px h-14 hidden sm:block"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(14,165,233,0.3), transparent)" }}
                />
                <div className="text-center">
                  <div className="text-5xl font-black text-gradient leading-none">RP</div>
                  <div className="text-gray-500 text-xs mt-1 tracking-wider">ROLEPLAY</div>
                </div>
              </div>

              <a
                href="https://discord.gg/DWT2X6uEZb"
                target="_blank" rel="noopener noreferrer"
                className="btn-glow text-white font-bold px-10 py-4 rounded-xl text-sm tracking-widest uppercase inline-block"
              >
                Hemen Başvur
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
