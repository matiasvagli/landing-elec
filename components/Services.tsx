import Image from "next/image";
import { ScanSearch, HardHat, Wrench, Lightbulb, Cable, Camera, LayoutPanelTop, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ScanSearch,
    title: "Detección de fugas eléctricas",
    desc: "Localización precisa de fallas ocultas en instalaciones. Evitá accidentes y cortocircuitos antes de que ocurran.",
  },
  {
    icon: HardHat,
    title: "Instalaciones desde cero",
    desc: "Diseño y ejecución de instalaciones eléctricas completas para casas, locales y oficinas con materiales de primera calidad.",
  },
  {
    icon: Wrench,
    title: "Reparaciones eléctricas",
    desc: "Solución rápida para tableros, enchufes, llaves, disyuntores y cualquier falla eléctrica del hogar o negocio.",
  },
  {
    icon: Lightbulb,
    title: "Luminarias interior / exterior",
    desc: "Colocación de artefactos, apliques, lámparas, faroles y spots decorativos. Interior y exterior con terminación prolija.",
  },
  {
    icon: Cable,
    title: "Recableados",
    desc: "Renovación completa del cableado para edificios, casas o comercios. Adaptación a normas vigentes.",
  },
  {
    icon: Camera,
    title: "Cámaras de seguridad",
    desc: "Instalación de sistemas de vigilancia WEB. Cableado estructurado y configuración remota incluida.",
  },
  {
    icon: LayoutPanelTop,
    title: "Tableros eléctricos",
    desc: "Armado, ampliación y actualización de tableros con disyuntores y protecciones termo-magnéticas.",
  },
  {
    icon: Settings2,
    title: "Reparaciones en general",
    desc: "Cualquier trabajo eléctrico que necesites, lo resolvemos. Consultas sin cargo y presupuesto rápido.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden">

      {/* Imagen cubre toda la sección */}
      <div className="absolute inset-0">
        <Image
          src="/herramientas.webp"
          alt="Herramientas y trabajo eléctrico"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Overlay más liviano para que se vea la imagen */}
        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-14">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
            Lo que hago
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Servicios eléctricos
          </h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Soluciones completas para el hogar, comercios e industria.
            Trabajo garantizado en cada obra.
          </p>
        </div>

        {/* Cards — semi-transparentes para dejar ver la imagen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-gray-900/50 backdrop-blur-md border border-white/10 hover:border-yellow-400/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-yellow-400">
                <s.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5491100000000?text=Hola%20Mat%C3%ADas%2C%20quiero%20consultar%20sobre%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-yellow-400/20"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
