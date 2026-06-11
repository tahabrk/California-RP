"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertTriangle, Shield, MessageSquare, Gavel, Tv, Wrench, Zap } from "lucide-react";

const rulesData = [
  {
    id: "discord",
    icon: MessageSquare,
    title: "Discord Kuralları",
    color: "#5865F2",
    sections: [
      {
        title: "Genel Davranış",
        rules: [
          "Sunucuya giriş yapan her kullanıcı tüm kuralları okumuş ve kabul etmiş sayılır.",
          "Tüm üyelere karşı saygılı, seviyeli ve ölçülü bir iletişim dili kullanmak zorunludur.",
          "Hakaret, küfür, aşağılama, tehdit, kışkırtma, zorbalık ve provoke edici davranışlar kesinlikle yasaktır.",
          "Irk, din, dil, cinsiyet, etnik köken veya siyasi görüş temelli ayrımcılık ve nefret söylemi ağır ihlal kapsamındadır.",
          "Sunucu huzurunu bozacak tartışmalar ve kaos yaratma girişimleri yasaktır.",
        ],
      },
      {
        title: "Özel Mesaj (DM) İhlalleri",
        rules: [
          "DM yoluyla taciz, ısrarlı rahatsız etme ve tehdit kalıcı ban sebebidir.",
          "Özellikle kadın üyelere yönelik rahatsız edici, baskılayıcı veya uygunsuz davranışlar kesinlikle yasaktır.",
          "Bu ihlaller için uyarı, savunma veya ikinci bir şans verilmez.",
        ],
      },
      {
        title: "Spam ve Flood",
        rules: [
          "Flood yapmak, gereksiz mesaj atmak, sürekli etiketleme, emoji spam ve sohbet akışını sabote eden davranışlar yasaktır.",
          "Sohbet kanalları belirlenen amaçları dışında kullanılamaz.",
          "Reklam, yönlendirme, davet linki veya konuyla alakasız bağlantı paylaşımları kesinlikle yasaktır.",
          "Bot komutlarının spamlanması veya kötüye kullanılması yaptırım sebebidir.",
        ],
      },
      {
        title: "Reklam ve Tanıtım",
        rules: [
          "Yetkili onayı olmaksızın Discord sunucusu, FiveM sunucusu, web sitesi veya sosyal medya hesabı reklamı yasaktır.",
          "DM yoluyla yapılan reklam faaliyetleri de bu kapsama dahildir.",
        ],
      },
      {
        title: "Kullanıcı Adı ve Profil",
        rules: [
          "Küfür, hakaret, ırkçılık veya provoke edici anlam taşıyan kullanıcı adları, takma adlar ve profil fotoğrafları yasaktır.",
          "Yetkililer uygun görmedikleri kullanıcı adlarını değiştirme talep etme hakkını saklı tutar.",
        ],
      },
      {
        title: "Sesli Kanal Kuralları",
        rules: [
          "Ses kanallarında bağırmak, küfür etmek, hakaret etmek ve ses kirliliği oluşturmak yasaktır.",
          "Soundpad vb. ses değiştirici veya rahatsız edici ses programlarının kullanımı yasaktır.",
          "Diğer kullanıcıların konuşmasını bilinçli şekilde bölmek yasaktır.",
        ],
      },
      {
        title: "Gizlilik ve Güvenlik",
        rules: [
          "Başka kullanıcıların kişisel bilgilerini, özel mesajlarını veya ekran görüntülerini izinsiz paylaşmak kesinlikle yasaktır.",
          "Sahte hesap açmak, kimlik taklidi yapmak veya dolandırıcılık girişimi kalıcı ban sebebidir.",
        ],
      },
    ],
  },
  {
    id: "genel",
    icon: Shield,
    title: "Genel Davranış Kuralları",
    color: "#1e40af",
    sections: [
      {
        title: "Saygı ve Üslup",
        rules: [
          "Sunucu içerisinde tüm üyeler karşılıklı saygı çerçevesinde iletişim kurmak zorundadır.",
          "Hakaret, aşağılama, tehdit, kışkırtma ve toxic tutumlar kesinlikle yasaktır.",
        ],
      },
      {
        title: "Roleplay Farkındalığı",
        rules: [
          "Tüm oyuncular rol play ciddiyetini korumakla yükümlüdür.",
          "RP kalitesini düşüren, kaos amaçlı, troll davranışlar yasaktır.",
        ],
      },
      {
        title: "IC – OOC Ayrımı",
        rules: [
          "IC'de yaşanan olaylar OOC'ye taşınamaz.",
          "OOC üzerinden baskı kurmak, tehdit etmek veya tartışma çıkarmak ceza sebebidir.",
        ],
      },
      {
        title: "Ana Kurallar",
        rules: [
          "Sunucu bir Rol Yapma (RP) sunucusudur. Rol içerisinde yaşanan tüm olaylar kurgusaldır.",
          "Hiçbir oyuncu diğerine karşı üstünlük veya ayrıcalık sahibi değildir.",
          "Karakterinize ait tüm özellikler (isim, geçmiş, kişilik vb.) tamamen sizin sorumluluğunuzdadır.",
          "Sunucuda uygulanan rol yapısı Hard RP standartlarındadır.",
          "CK veya COOC uygulanmış karakterler hiçbir varlığı başka oyuncuya devredemez.",
          "Başka bir karakteri kopyalayan veya taklit eden karakterlerle rol yapmak yasaktır.",
          "Öldürülen oyuncuların taşınması veya lootlanması yasaktır.",
          "Sunucu girişleri düzenli kontrol edilir. Son 1 ay içinde giriş yapmayan oyuncuların verileri silinir.",
        ],
      },
    ],
  },
  {
    id: "temel-rp",
    icon: Gavel,
    title: "Temel Rol Kuralları",
    color: "#0ea5e9",
    sections: [
      {
        title: "Temel RP Kuralları",
        rules: [
          "Sunucu içerisinde OOC (rol dışı) çıkılması yasaktır.",
          "Rol esnasında UTC, mail vb. rol dışı iletişim unsurlarına atıfta bulunulamaz.",
          "Herhangi bir çatışma sırasında bayılan oyuncuya trash talk yapmak yasaktır.",
          "Sunucu içerisinde Aile, Mafya veya Kartel rolleri yasaktır.",
          "Oyun içerisinde tespit edilen sistem açıklarını (hile, mod, bug) kullanmak kalıcı yasaklanma sebebidir.",
          "Sunucu içerisinde Türk karakter canlandırmak yasaktır.",
          "Yüzü tamamen kapatan (full face) maske takılı olması durumunda oyuncu sesinden tanınamaz.",
          "Sarı Sayfalar uygulaması ve Twitter üzerinden spam yapmak yasaktır.",
          "ADK serbesttir; ancak rolsüz şekilde ADK yapılması yasaktır.",
          "DDK ve MDK kesinlikle yasaktır.",
          "Ghost RP kesinlikle yasaktır (Hastane ve resmi departman alanlarında geçerli değildir).",
          "Aktif rol sırasında ölünmesi durumunda hastaneye ışınlanma 'E' özelliğini kullanmak yasaktır.",
        ],
      },
      {
        title: "Maske ve Zırh Kullanımı",
        rules: [
          "Tıbbi maske dışında maske veya zırhın aksesuar amaçlı kullanılması durumunda kolluk kuvvetleri cezai işlem uygulayabilir.",
          "Full face maske kullanan oyuncunun sesinden, vücut özelliklerinden tanınması Meta Gaming ve Fail RP kapsamındadır.",
          "Yarım maske veya peçe tanınmayı engellemez.",
        ],
      },
      {
        title: "Fear Roleplay Kuralları",
        rules: [
          "Üzerinizde açık bir güç üstünlüğü bulunan kişilere karşı korku rolü yapmak zorunludur.",
          "Size silah doğrultan oyuncunun rol içinde verdiği makul talimatlara uymak zorundasınız.",
          "Polislere karşı fear yapmamak için polislerin en az 2 katı sayıda olmanız gerekmektedir.",
        ],
      },
      {
        title: "Kişi Soyma Kuralları",
        rules: [
          "Oyuncular rastgele ve sebepsiz şekilde kişileri soyamaz. Geçerli, rol temelli bir gerekçe zorunludur.",
          "Soyduğunuz kişiyi vuramaz, vurduğunuz kişiyi sonradan soyamazsınız.",
          "Geçerli bir rol sebebi bulunmadığı sürece sivillerin soyulması kesinlikle yasaktır.",
          "Kişi soymak bir gelir yöntemi veya 'farm' faaliyeti olarak kullanılamaz.",
          "Herhangi bir script ile meşgul oyuncu (benzin doldurma, alışveriş vb.) soyulamaz.",
          "Compton bölgesinde zengin görünümlü sivillerin gasp edilmesi rol kapsamında mümkündür.",
        ],
      },
      {
        title: "Non-RP Driving",
        rules: [
          "Non-RP Driving (gerçekçilik dışı araç kullanımı) yasaktır.",
          "Araçlar yalnızca kullanım amacına ve yol koşullarına uygun şekilde sürülmelidir.",
          "Araçlarla çatılardan veya rampalardan gerçekçilik dışı atlayıp zıplamak yasaktır.",
          "Lastiği patlayan araçla sürüşe devam edilemez.",
          "VDM (araçla kasten insanlara zarar verme) kalıcı yasaklanma sebebidir.",
        ],
      },
      {
        title: "CK Kuralları",
        rules: [
          "CK (Character Kill) yetkisi ve nihai karar hakkı yönetimdedir.",
          "CK rollerinde geçerli ve güçlü rol gerekçesi ile video kaydı veya kanıt sunulması zorunludur.",
        ],
      },
      {
        title: "LAMS / Hastane Rolleri",
        rules: [
          "LAMS içerisinde sağlık personeline karşı saygılı ve role uygun davranılması zorunludur.",
          "Doktora başvuran oyuncular yalnızca ağrıyan veya sorunlu bölge hakkında bilgi verebilir.",
          "Taburcu süresi ve tedavi sürecine yalnızca doktorlar karar verir.",
          "LAMS personelini yalnızca hızlı iyileşme amacıyla kullanmak yasaktır.",
        ],
      },
    ],
  },
  {
    id: "isletme",
    icon: Wrench,
    title: "İşletme Kuralları",
    color: "#f59e0b",
    sections: [
      {
        title: "Genel İşletme Kuralları",
        rules: [
          "İşletmeler minimum 5, maksimum 10 kişilik aktif bir ekip ile yönetilmelidir.",
          "7 gün boyunca aktiflik göstermeyen ekip üyeleri kadrodan çıkarılmalıdır.",
          "İşletme sahipleri ve ekip üyeleri günlük ortalama 1-2 saat aktif olmalıdır.",
          "Her işletme resmi açılışını rol içerisinde gerçekleştirmek zorundadır.",
          "Sarı Sayfalar'a minimum 30 dakikada bir ilan verilebilir.",
          "Sarı Sayfalar'a 30 dakikanın altında ilan atılması spam olarak değerlendirilir.",
        ],
      },
      {
        title: "Kamera Zorunluluğu",
        rules: [
          "Silah satıcıları: Güvenlik kamerası ZORUNLUDUR (California Penal Code § 26806).",
          "Cannabis lisanslı işletmeleri: Güvenlik kamerası ZORUNLUDUR (California Code of Regulations § 15044).",
          "Kumarhane ve kart odası işletmeleri: Güvenlik kamerası ZORUNLUDUR.",
          "Kafe ve benzeri işletmeler bu zorunluluk kapsamında değildir.",
        ],
      },
      {
        title: "Mekanik İşletme Kuralları",
        rules: [
          "Mekanik hizmetleri rol çerçevesinde ve gerçekçi şekilde verilmelidir.",
          "İşlemler anlık ve emeksiz şekilde tamamlanamaz; rol süreci atlanamaz.",
          "Çatışma ortasında veya aktif kovalamaca sırasında araç tamiri yapılamaz.",
          "Araç ile ilgili durumlarda emote kullanımı zorunludur.",
          "Tüm hizmetler sunucu ekonomisine uygun fiyat aralıklarında verilmelidir.",
          "Araç çoğaltma, sistem açığı kullanma veya bug abuse kesinlikle yasaktır.",
          "Mekanik işletmelerde kamera sistemi aktif varsayılır.",
        ],
      },
    ],
  },
  {
    id: "ticket",
    icon: MessageSquare,
    title: "Ticket Kuralları",
    color: "#8b5cf6",
    sections: [
      {
        title: "Ticket Sistemi Kullanımı",
        rules: [
          "Ticket sistemi yalnızca oyun dışı (OOC) sorunlar için kullanılmalıdır.",
          "Ticket içeriğinde yalnızca yaşanan olay açıklanmalı, kişisel veya duygusal ifadelerden kaçınılmalıdır.",
          "Ekran görüntüsü, video kaydı veya benzeri kanıt eklenmesi zorunludur.",
          "Ticket açarken doğru kategori seçilmesi zorunludur.",
          "Yetkililere karşı saygılı, sakin ve uygun bir dil kullanılmalıdır.",
          "Yetkilileri etiketlemek, spam mesaj göndermek veya sürekli durum sormak yasaktır.",
          "Eğlence amacıyla veya gerçek bir sorun olmadan ticket açmak yasaktır.",
          "Her oyuncu yalnızca kendi adına ticket açabilir.",
        ],
      },
    ],
  },
  {
    id: "etkinlik",
    icon: Zap,
    title: "Etkinlik Kuralları",
    color: "#ec4899",
    sections: [
      {
        title: "Etkinlik Kuralları",
        rules: [
          "Sunucu içerisinde gerçekleştirilen tüm etkinlikler roleplay prensipleri ve sunucu kurallarına uygun şekilde yürütülür.",
          "Etkinlik sırasında troll amaçlı hareketler ve rolü sabote edici davranışlar yasaktır.",
          "Etkinlik alanı kalabalık ve kamusal kabul edilir; düşman görülen durumlarda doğrudan agresif eylem gerçekleştirilmemelidir.",
          "Etkinlik düzenleyicilerinin talimatlarına uymak zorunludur.",
          "Etkinlik alanına veya yakınına araç park etmek yasaktır.",
          "Etkinlik bölgesinde sözlü veya fiziksel kavga çıkarmak yasaktır.",
          "İllegal etkinliklere polislerin katılımı yasaktır.",
        ],
      },
    ],
  },
  {
    id: "streamer",
    icon: Tv,
    title: "Streamer Kuralları",
    color: "#f97316",
    defaultCollapsed: true,
    sections: [
      {
        title: "Yayın Etiği",
        rules: [
          "Yayıncılar, yayın açtıkları süre boyunca sunucuyu temsil ettiklerini kabul eder.",
          "Yayın sırasında sunucunun itibarını zedeleyecek davranışlarda bulunulamaz.",
          "Sunucuya, yönetime veya oyunculara yönelik karalama söylemleri yasaktır.",
          "Yayıncının üst yönetim onayı olmadan yayın geçmişini silmesi yasaktır.",
        ],
      },
      {
        title: "Metagaming & Stream Sniping",
        rules: [
          "Yayın izleyicilerinden veya başka yayınlardan elde edilen bilgiler IC kullanılamaz.",
          "Yayın chatinden gelen ihbar, konum, isim, plaka vb. bilgiler RP içinde kullanılamaz.",
          "Yayıncı, stream sniper'ı teşvik edici söylemlerde bulunamaz.",
        ],
      },
      {
        title: "OOC / IC Ayrımı",
        rules: [
          "Yayın sırasında OOC tartışmalar IC'e yansıtılamaz.",
          "Yayın chatinde yapılan kışkırtmalar IC davranışa dönüştürülemez.",
          "'Chat dedi', 'yayında öyle söylediler' gibi ifadeler IC'de kullanılamaz.",
        ],
      },
      {
        title: "Reklam ve Tanıtım",
        rules: [
          "Yayın içinde başka RP sunucularının reklamı yapılamaz.",
          "Yayın başlığında sunucunun ismi ve içeriğinde sunucunun logosu bulunmak zorundadır.",
        ],
      },
    ],
  },
  {
    id: "uyari",
    icon: AlertTriangle,
    title: "Uyarı Sistemi",
    color: "#ef4444",
    sections: [
      {
        title: "1x Strike – Sözlü Uyarı",
        rules: [
          "Hatalı Me/Do: Gerçekçi olmayan veya role uygun şekilde kullanılmayan emote komutları.",
          "Fail RP: Karaktere, rol mantığına veya genel RP kurallarına aykırı davranışlar.",
          "Discord Kural İhlali: OOC sohbetlerde hakaret, küfür veya uygunsuz dil kullanımı.",
          "PM Chat Hatası: Özel mesaj yoluyla oyuncuları rahatsız etmek.",
        ],
      },
      {
        title: "2x Strike – Whitelist Cezası Sınırı",
        rules: [
          "Power Gaming: Gerçekçi olmayan güç avantajı sağlamak veya karşı tarafı zorlayıcı rol dayatmak.",
          "Meta Gaming: Oyun dışı bilgileri rol içerisinde kullanmak.",
          "IC/OOC Mixing: Rol içi ve rol dışı bilgileri karıştırmak.",
          "Revenge Kill: Ölüm sonrası doğrudan intikam rolüne girmek.",
          "Yetkiliye Hakaret: Yetkililere OOC şekilde hakaret etmek.",
          "Car Fight: Araçlarla kavga veya savaş rolüne girmek.",
          "Yetkiliye Yalan Beyan: Destek sürecini yanıltıcı bilgilerle uzatmak.",
        ],
      },
      {
        title: "3x Strike – 3 Gün Whitelist Cezası",
        rules: [
          "Fear RP İhlali: Korku rolüne girmemek.",
          "Value of Life İhlali: Karakterin canını önemsememek.",
          "Refuse RP: Rolü reddetmek (envanter silme uygulanabilir).",
          "Non-RP Driving: Gerçekçilik dışı araç kullanımı.",
          "Force RP: Rızasız rol dayatmak.",
          "Mic Spam: Mikrofon üzerinden OOC spam veya rahatsız edici sesler.",
          "Bug Abuse: Oyun açıklarını kötüye kullanmak.",
        ],
      },
      {
        title: "4x Strike – 7 Gün Whitelist Cezası",
        rules: [
          "Character Mixing: Eski karakter bilgilerini yeni karaktere taşımak.",
          "Combat Log: Aktif rol sırasında bilinçli şekilde oyundan çıkış yapmak (CK uygulanabilir).",
          "VDM: Araçla kasıtlı şekilde oyunculara zarar vermek.",
          "RDM: Sebepsiz şekilde oyuncu öldürmek.",
          "Exploit Kullanımı: Animasyon bugları veya sistem açıklarıyla avantaj sağlamak.",
        ],
      },
      {
        title: "5x Strike – Blacklist Ban",
        rules: [
          "Sunucuya Zarar Veren Davranışlar: Sunucu düzenini bozmak veya sabote etmek.",
          "OOC Şantaj: Oyun dışı bilgilerle tehdit etmek.",
          "Yetkili Taklidi / Yalan Beyan: Yetkili gibi davranmak veya kasıtlı yanlış bilgi vermek.",
          "Reklam: Başka sunucuların reklamını yapmak.",
          "Troll RP: Kasıtlı rol bozucu davranışlar sergilemek.",
          "Yasaklı Program Kullanımı: Hile, mod veya üçüncü parti yazılım kullanmak.",
        ],
      },
    ],
  },
];

function RuleSection({
  section,
}: {
  section: { title: string; rules: string[] };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 px-4 hover:bg-white/5 rounded-lg transition-colors text-left"
      >
        <span className="text-gray-200 text-sm font-medium">{section.title}</span>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-4 space-y-2">
              {section.rules.map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400">
                  <span className="text-[#0ea5e9] mt-0.5 flex-shrink-0">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RuleCategory({
  category,
}: {
  category: (typeof rulesData)[0];
}) {
  const [open, setOpen] = useState(!category.defaultCollapsed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1e293b]/60 border border-[#1e40af]/20 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <category.icon size={18} style={{ color: category.color }} />
          </div>
          <span className="text-white font-semibold">{category.title}</span>
          {category.defaultCollapsed && (
            <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
              İsteğe bağlı
            </span>
          )}
        </div>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 px-2 py-2 space-y-1">
              {category.sections.map((section) => (
                <RuleSection key={section.title} section={section} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function RulesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0f172a] to-transparent py-14 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#1e40af]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            Sunucu Kuralları
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Kural Kitabı
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            California Dreams sunucusuna katılmadan önce tüm kuralları dikkatlice
            okuyunuz.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            Son güncelleme: Haziran 2025
          </p>
        </motion.div>
      </div>

      {/* Rules */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-4">
        {rulesData.map((category) => (
          <RuleCategory key={category.id} category={category} />
        ))}

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1e40af]/10 border border-[#1e40af]/30 rounded-2xl p-5 text-center"
        >
          <p className="text-gray-300 text-sm">
            Sunucuya giriş yapan her oyuncu bu kuralları okumuş, anlamış ve
            kabul etmiş sayılır.{" "}
            <span className="text-[#0ea5e9]">
              Kuralları bilmemek ihlal durumunda mazeret olarak kabul edilmez.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
