import Image from "next/image";
import { WHATSAPP } from "@/lib/config";
import { ImageIcon } from "lucide-react";

// Agregá acá los nombres de tus fotos cuando las tengas
// Ejemplo: { src: "/trabajos/tablero1.jpg", title: "Tablero residencial", lugar: "Lomas de Zamora" }
const trabajos: { src: string; title: string; lugar: string }[] = [
  // { src: "/trabajos/foto1.jpg", title: "Instalación completa", lugar: "Quilmes" },
];

const placeholders = [
  { title: "Instalación completa", lugar: "Zona Sur" },
  { title: "Tablero eléctrico", lugar: "Zona Sur" },
  { title: "Luminarias exterior", lugar: "Zona Sur" },
  { title: "Recableado", lugar: "Zona Sur" },
  { title: "Cámaras de seguridad", lugar: "Zona Sur" },
  { title: "Reparación general", lugar: "Zona Sur" },
];

export default function Portfolio() {
  const items = trabajos.length > 0 ? trabajos : null;

  return (
    <section id="trabajos" className="relative py-12 md:py-24 bg-gray-950 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,#F59E0B 60px,#F59E0B 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#F59E0B 60px,#F59E0B 61px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            Mis trabajos
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Instalaciones, reparaciones y terminaciones realizadas en Zona Sur.
            Cada trabajo con dedicación y prolijidad.
          </p>
        </div>

        {items ? (
          /* Grid con fotos reales */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {items.map((t, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
                <Image
                  src={t.src}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white font-bold text-sm">{t.title}</div>
                  <div className="text-yellow-400 text-xs">{t.lugar}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholders — se reemplazan con fotos reales */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {placeholders.map((p, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-dashed border-gray-700 flex flex-col items-center justify-center gap-2 text-center p-4"
              >
                <ImageIcon size={28} className="text-gray-600" strokeWidth={1.5} />
                <span className="text-gray-600 text-xs font-medium">{p.title}</span>
                <span className="text-gray-700 text-xs">{p.lugar}</span>
              </div>
            ))}
          </div>
        )}

        {!items && (
          <p className="text-center text-gray-600 text-sm mt-6">
            Las fotos de trabajos realizados se irán agregando próximamente.
          </p>
        )}

        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hola%20Mat%C3%ADas%2C%20quiero%20pedir%20un%20presupuesto`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-yellow-400/20"
          >
            Quiero un trabajo así
          </a>
        </div>
      </div>
    </section>
  );
}
