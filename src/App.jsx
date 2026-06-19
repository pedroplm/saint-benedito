import { useState, useEffect } from "react";
import useCountdown from "./hooks/useCountdown";

const FOOD_ITEMS = [
  { name: "Pastel", emoji: "🥟" },
  { name: "Milho Verde", emoji: "🌽" },
  { name: "Cachorro-Quente", emoji: "🌭" },
  { name: "Pipoca", emoji: "🍿" },
  { name: "Maçã do Amor", emoji: "🍎" },
  { name: "Churros", emoji: "🥨" },
  { name: "Quentão", emoji: "☕" },
  { name: "Vinho Quente", emoji: "🍷" },
  { name: "Linguiça Caipira", emoji: "🌶️" },
  { name: "Lanche de Pernil", emoji: "🥪" },
  { name: "Espetinho", emoji: "🍢" },
  { name: "Doces Caseiros", emoji: "🍬" },
  { name: "Caldo", emoji: "🥣" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Fondue", emoji: "🫕" },
  { name: "Choconhaque", emoji: "🍫" },
  { name: "Chá do Padre", emoji: "🧉" },
  { name: "Canjica", emoji: "🥘" },
];

function WhatsappShare() {
  const text = encodeURIComponent(
    "🎉 Venha para a Festa Junina da Paróquia São Benedito! Sábados e domingos de junho, 18h às 22h. Entrada gratuita! Rua dos Iguás, 26 - Vila Costa e Silva, Campinas. Vem pro arraiá! 🎪"
  );
  return (
    <a
      href={`https://wa.me/?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Compartilhar no WhatsApp
    </a>
  );
}

function CountdownSection() {
  const cd = useCountdown();

  if (cd.status === "happening") {
    return (
      <div className="bg-red-600 text-white text-center py-5 sm:py-6 px-4">
        <p className="text-2xl sm:text-3xl font-bold animate-pulse">
          🎉 FESTA ROLANDO! VENHA ARRAIAR COM A GENTE! 🎉
        </p>
        <p className="text-sm sm:text-base mt-2 opacity-90">
          Quadrilha, música ao vivo e comidas típicas — 18h às 22h
        </p>
      </div>
    );
  }

  if (cd.status === "over") {
    return (
      <div className="bg-stone-700 text-white text-center py-5 sm:py-6 px-4">
        <p className="text-lg sm:text-xl font-bold">Festa Junina 2026 encerrada</p>
        <p className="text-sm sm:text-base mt-1 opacity-80">Voltamos ano que vem! 🎪</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-center py-5 sm:py-6 px-4">
      <p className="text-lg sm:text-xl font-bold mb-2">Faltam</p>
      <div className="flex justify-center gap-3 sm:gap-6">
        <TimeBlock value={cd.days} label="Dias" />
        <span className="text-3xl sm:text-5xl font-bold text-yellow-300 self-center">:</span>
        <TimeBlock value={cd.hours} label="Horas" />
        <span className="text-3xl sm:text-5xl font-bold text-yellow-300 self-center">:</span>
        <TimeBlock value={cd.minutes} label="Min" />
        <span className="text-3xl sm:text-5xl font-bold text-yellow-300 self-center">:</span>
        <TimeBlock value={cd.seconds} label="Seg" />
      </div>
      <p className="text-sm sm:text-base mt-3 opacity-90">para o próximo dia de festa!</p>
    </div>
  );
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl sm:text-5xl font-bold tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm mt-1 uppercase tracking-wider opacity-80">{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-700 via-red-600 to-red-500 text-white">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #fbbf24 1px, transparent 1px),
                          radial-gradient(circle at 80% 20%, #fbbf24 1px, transparent 1px),
                          radial-gradient(circle at 50% 80%, #fbbf24 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:py-20 text-center">
        <p className="text-yellow-300 font-semibold text-sm sm:text-base tracking-widest uppercase mb-3">
          Paróquia São Benedito — Campinas
        </p>
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight mb-4">
          Festa Junina
          <span className="block text-yellow-300">2026</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg mb-6">
          <span className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Sábados e Domingos de Junho
          </span>
          <span className="hidden sm:inline text-yellow-300/60">•</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            18h às 22h
          </span>
          <span className="hidden sm:inline text-yellow-300/60">•</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Vila Costa e Silva
          </span>
        </div>
        <p className="text-yellow-200 font-semibold text-lg sm:text-2xl mb-8">
          🎪 Entrada Gratuita 🎪
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://www.google.com/maps/@-22.8622962,-47.0654948,3a,75y,61.46h,103.55t/data=!3m7!1e1!3m5!1sJnb_2Q_7n0_Ogt50thtsBQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-13.552489407612839%26panoid%3DJnb_2Q_7n0_Ogt50thtsBQ%26yaw%3D61.45987123692244!7i16384!8i8192"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold px-5 py-3 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Entrada Estacionamento
          </a>
          <a
            href="https://www.google.com/maps/@-22.8620215,-47.064199,3a,75y,274.92h,85.82t/data=!3m7!1e1!3m5!1sEBglNaQWj_M2Y1S5DpgOhQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.181974687833204%26panoid%3DEBglNaQWj_M2Y1S5DpgOhQ%26yaw%3D274.9216499344763!7i16384!8i8192"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold px-5 py-3 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M.652 15.652a2.25 2.25 0 010 3.18l-3.18 3.18a2.25 2.25 0 01-3.18 0l-3.18-3.18a2.25 2.25 0 010-3.18l3.18-3.18a2.25 2.25 0 013.18 0l3.18 3.18z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z" />
            </svg>
            Entrada Direta ao Arraiá
          </a>
          <WhatsappShare />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <h2 className="font-bold text-3xl sm:text-4xl text-red-700 text-center mb-8">
        Sobre a Festa
      </h2>
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 text-stone-700 leading-relaxed">
        <p>
          A <strong>Festa Junina da Paróquia São Benedito</strong> é uma tradição que reúne a
          comunidade da <strong>Vila Costa e Silva</strong> e região de <strong>Campinas</strong>{" "}
          para celebrar os santos juninos com muita alegria, fé e cultura.
        </p>
        <p>
          Realizada todos os <strong>sábados e domingos de junho</strong>, a quermesse conta com{" "}
          <strong>música ao vivo, quadrilha, barracas de comidas típicas, brincadeiras para
          crianças e show de prêmios</strong>. É o lugar perfeito para reunir a família e os
          amigos em um ambiente acolhedor e festivo.
        </p>
        <p>
          A festa junina é uma das mais queridas tradições brasileiras, misturando elementos
          religiosos, culturais e populares. Venha viver essa experiência com a gente!
        </p>
        <div className="grid grid-cols-3 gap-4 pt-4 text-center text-sm">
          <div className="bg-red-50 rounded-xl p-3 sm:p-4">
            <div className="text-red-600 font-bold text-2xl sm:text-3xl mb-1">🎶</div>
            <div className="font-semibold text-stone-800">Música ao Vivo</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-3 sm:p-4">
            <div className="text-yellow-600 font-bold text-2xl sm:text-3xl mb-1">💃</div>
            <div className="font-semibold text-stone-800">Quadrilha</div>
          </div>
          <div className="bg-green-50 rounded-xl p-3 sm:p-4">
            <div className="text-green-600 font-bold text-2xl sm:text-3xl mb-1">🎪</div>
            <div className="font-semibold text-stone-800">Brincadeiras</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programacao() {
  const schedule = [
    {
      day: "Sábados",
      time: "18h",
      items: ["Abertura das barracas", "Show de prêmios"],
    },
    {
      day: "Sábados",
      time: "19h",
      items: ["Quadrilha Junina", "Brincadeiras para crianças"],
    },
    {
      day: "Sábados",
      time: "20h",
      items: ["Música ao vivo"],
    },
    {
      day: "Domingos",
      time: "18h",
      items: ["Abertura das barracas", "Show de prêmios"],
    },
    {
      day: "Domingos",
      time: "19h",
      items: ["Quadrilha Junina", "Brincadeiras para crianças"],
    },
    {
      day: "Domingos",
      time: "20h",
      items: ["Música ao vivo"],
    },
  ];

  return (
    <section id="programacao" className="bg-amber-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-bold text-3xl sm:text-4xl text-red-700 text-center mb-8">
          Programação
        </h2>
        <div className="grid gap-3 sm:gap-4">
          {[["Sábados", "border-red-200"], ["Domingos", "border-yellow-300"]].map(([day, border]) => (
            <div key={day} className={`bg-white rounded-2xl shadow-md border-l-4 ${border} overflow-hidden`}>
              <div className="bg-gradient-to-r from-red-50 to-transparent px-5 sm:px-6 py-3 border-b border-stone-100">
                <h3 className="font-bold text-xl text-red-700">{day}</h3>
              </div>
              <div className="divide-y divide-stone-100">
                {schedule.filter((s) => s.day === day).map((slot) => (
                  <div key={slot.time} className="flex items-start gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-4">
                    <div className="flex-shrink-0 bg-red-600 text-white text-sm font-bold rounded-lg px-3 py-1.5 min-w-[3.5rem] text-center">
                      {slot.time}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {slot.items.map((item) => (
                        <span key={item} className="inline-block bg-amber-50 text-stone-700 text-sm px-3 py-1 rounded-full border border-amber-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 text-sm text-stone-500">
          🎟️ Entrada gratuita • Das 18h às 22h
        </div>
      </div>
    </section>
  );
}

function Gastronomia() {
  return (
    <section id="comidas" className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <h2 className="font-bold text-3xl sm:text-4xl text-red-700 text-center mb-8">
        Gastronomia
      </h2>
      <p className="text-center text-stone-600 mb-8 max-w-xl mx-auto">
        Uma verdadeira experiência gastronômica junina! Temos opções para todos os gostos.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {FOOD_ITEMS.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-stone-100 p-4 text-center"
          >
            <div className="text-3xl sm:text-4xl mb-2">{item.emoji}</div>
            <div className="font-semibold text-stone-800 text-sm sm:text-base">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="bg-amber-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-bold text-3xl sm:text-4xl text-red-700 text-center mb-8">
          Localização
        </h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-5 sm:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-stone-800">Paróquia São Benedito</h3>
                <p className="text-stone-600">Rua dos Iguás, 26 — Vila Costa e Silva</p>
                <p className="text-stone-600">Campinas — SP</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-stone-600">(19) 3241-7555</p>
              </div>
            </div>
          </div>
          <div className="h-64 sm:h-80 bg-stone-200">
            <iframe
              title="Mapa da Paróquia São Benedito"
              src="https://www.google.com/maps?q=Rua+dos+Iguás+26+Campinas&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-5 sm:p-8 pt-0 sm:pt-0">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+dos+Iguás+26+Campinas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-red-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl text-yellow-300 mb-3">Festa Junina 2026</h3>
            <p className="text-red-200 text-sm leading-relaxed">
              Realizada pela Paróquia São Benedito.<br />
              Venha celebrar com a gente!
            </p>
            <p className="text-red-200 text-sm mt-3">
              📍 Rua dos Iguás, 26 — Vila Costa e Silva, Campinas
            </p>
            <p className="text-red-200 text-sm">
              📞 (19) 3241-7555
            </p>
            <p className="text-red-200 text-sm">
              🕐 Sábados e Domingos • 18h às 22h
            </p>
          </div>
          <div className="sm:text-right">
            <h3 className="font-bold text-xl text-yellow-300 mb-3">Compartilhe</h3>
            <p className="text-red-200 text-sm mb-4">
              Ajude a divulgar a festa!<br />
              Compartilhe com amigos e familiares.
            </p>
            <WhatsappShare />
          </div>
        </div>
        <div className="border-t border-red-700 mt-8 pt-6 text-center text-red-300 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Paróquia São Benedito — Campinas. Todos os direitos reservados.</p>
          <p className="mt-1 opacity-60">Site feito com ❤️ pela comunidade</p>
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-12 sm:h-14">
        <a href="#" className="font-bold text-red-700 text-lg sm:text-xl">
          🎪 Arraiá São Benedito
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-1.5 text-stone-600 hover:text-red-600"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="hidden sm:flex items-center gap-5">
          <NavLinks />
        </div>
      </div>
      {open && (
        <div className="sm:hidden bg-white border-t border-stone-100 px-4 py-3 space-y-2">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }) {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#programacao", label: "Programação" },
    { href: "#comidas", label: "Comidas" },
    { href: "#localizacao", label: "Localização" },
  ];
  return links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={onClick}
      className="block sm:inline text-stone-600 hover:text-red-600 font-medium text-sm transition-colors"
    >
      {link.label}
    </a>
  ));
}

function BotaoTopo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 bg-red-600 hover:bg-red-700 text-white w-11 h-11 rounded-full shadow-lg transition-all active:scale-90 flex items-center justify-center"
      aria-label="Voltar ao topo"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 text-stone-700">
      <Navbar />
      <Hero />
      <CountdownSection />
      <Sobre />
      <Programacao />
      <Gastronomia />
      <Localizacao />
      <Footer />
      <BotaoTopo />
    </div>
  );
}
