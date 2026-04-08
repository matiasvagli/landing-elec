import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      {/* === BACKGROUND PHOTO === */}
      <div className="absolute inset-0">
        <Image
          src="/tablero.webp"
          alt="Electricista trabajando en tablero"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay — left side heavier for text, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/40" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/60" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-7">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-medium tracking-wide">
              Disponible en Zona Sur, Provincia de Bs. As.
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-5">
            Electricista{" "}
            <span className="relative inline-block text-yellow-400">
              Matías
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-400/50 rounded-full blur-sm" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl font-light mb-3 leading-relaxed">
            Instalaciones · Reparaciones · Seguridad Eléctrica
          </p>
          <p className="text-gray-400 text-base mb-10 leading-relaxed">
            Más de 10 años de experiencia. Presupuesto en el dia,
            trabajo garantizado y atención personalizada en cada obra.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="https://wa.me/5491100000000?text=Hola%20Mat%C3%ADas%2C%20necesito%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-yellow-400/25 hover:shadow-yellow-400/45 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir presupuesto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 bg-white/5 backdrop-blur-sm text-gray-200 hover:text-yellow-400 font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Ver servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-8 border-t border-white/10">
            {[
              { value: "+10", label: "Años de experiencia" },
              { value: "+200", label: "Trabajos realizados" },
              { value: "100%", label: "Garantizado" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-yellow-400">{s.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
