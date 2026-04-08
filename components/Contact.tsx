"use client";
import { useState } from "react";
import Image from "next/image";
import { WHATSAPP, EMAIL } from "@/lib/config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Matías! Soy ${form.name}.\n${form.message}\nTeléfono: ${form.phone}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="relative py-12 md:py-24 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/lumi2.png"
          alt="Instalación eléctrica"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gray-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-950/60" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            ¿Necesitás un electricista?
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Escribime por WhatsApp o email y te respondo a la brevedad con el presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Enviame un mensaje</h3>
            <form onSubmit={handleWhatsApp} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Tu nombre</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Juan García"
                  className="w-full bg-gray-900 border border-gray-600 focus:border-yellow-400 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Teléfono (opcional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="11 1234-5678"
                  className="w-full bg-gray-900 border border-gray-600 focus:border-yellow-400 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">¿Qué necesitás?</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Contame brevemente qué trabajo necesitás y en qué zona..."
                  className="w-full bg-gray-900 border border-gray-600 focus:border-yellow-400 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 hover:border-green-500/50 rounded-2xl p-6 transition-all group"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">WhatsApp</div>
                <div className="text-green-400 text-sm">+54 9 11 0000-0000</div>
                <div className="text-gray-500 text-xs mt-0.5">Respuesta rápida · Lun a Sáb</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-5 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 hover:border-yellow-400/50 rounded-2xl p-6 transition-all group"
            >
              <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">Email</div>
                <div className="text-yellow-400 text-sm">{EMAIL}</div>
                <div className="text-gray-500 text-xs mt-0.5">Respondemos en menos de 24 hs</div>
              </div>
            </a>

            {/* Zone */}
            <div className="flex items-center gap-5 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-6">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">Zona de cobertura</div>
                <div className="text-blue-400 text-sm">Zona Sur, Provincia de Bs. As.</div>
                <div className="text-gray-500 text-xs mt-0.5">Consultá disponibilidad para otras zonas</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-5 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-6">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">Horario de atención</div>
                <div className="text-purple-400 text-sm">Lunes a Sábado · 8:00 – 20:00</div>
                <div className="text-gray-500 text-xs mt-0.5">Urgencias fuera de horario: consultar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
