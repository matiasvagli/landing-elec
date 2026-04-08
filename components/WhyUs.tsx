import Image from "next/image";
import { ShieldCheck, ClipboardList, Zap, BadgeCheck, Gem, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "Trabajo garantizado",
    desc: "Todos los trabajos tienen garantía. Si algo falla, vuelvo sin costo adicional.",
  },
  {
    icon: ClipboardList,
    title: "Presupuesto en el dia",
    desc: "Te doy el presupuesto detallado antes de empezar. Sin sorpresas ni costos ocultos.",
  },
  {
    icon: Zap,
    title: "Respuesta rápida",
    desc: "Urgencias eléctricas atendidas el mismo día. No te dejamos sin luz.",
  },
  {
    icon: BadgeCheck,
    title: "Cumplimiento de normas",
    desc: "Trabajo bajo las normas eléctricas vigentes. Cada instalación y reparación se ejecuta con los estándares de seguridad requeridos.",
  },
  {
    icon: Gem,
    title: "Materiales de calidad",
    desc: "Solo uso materiales certificados de primeras marcas. Durabilidad y seguridad garantizadas.",
  },
  {
    icon: Handshake,
    title: "Trato directo",
    desc: "Hablo yo con vos desde el presupuesto hasta la entrega. Sin intermediarios.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">

      {/* === IMAGEN DE FONDO === */}
      <div className="absolute inset-0">
        <Image
          src="/luminaria.jpg"
          alt="Luminaria eléctrica"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Overlay fuerte para que el contenido sea legible */}
        <div className="absolute inset-0 bg-gray-950/85" />
        {/* Fade superior e inferior para integrar con secciones vecinas */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900/60" />
      </div>

      {/* === CONTENIDO === */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <div className="text-center mb-8 md:mb-14">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Por qué elegirme
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            La diferencia está en los detalles
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            No solo resuelvo el problema eléctrico — me aseguro de que quedes tranquilo
            y satisfecho con el resultado.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-2 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 hover:border-yellow-400/40 rounded-2xl p-4 md:p-6 md:flex-row md:gap-4 transition-colors"
            >
              <div className="shrink-0 text-yellow-400">
                <r.icon size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios — scroll horizontal en mobile */}
        <div className="mt-8 md:mt-14 flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible snap-x snap-mandatory">
          {[
            {
              text: "Matías nos hizo la instalación completa del local en tiempo y forma. Muy prolijo y responsable.",
              name: "Carlos R.",
              sub: "Comercio, Lanús",
            },
            {
              text: "Detectó una fuga eléctrica que otros no pudieron encontrar. Rápido y confiable.",
              name: "Laura M.",
              sub: "Casa particular, José Marmol",
            },
            {
              text: "Puso las cámaras y los artefactos de jardín en un día. Excelente trabajo.",
              name: "Marcelo G.",
              sub: "Casa particular, Adrogué",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-6 min-w-[80vw] sm:min-w-[60vw] md:min-w-0 snap-start"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-sm italic leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <div className="text-white text-sm font-semibold">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
