import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Por qué elegirnos | Electricista Matías",
  description:
    "Conocé por qué elegir a Electricista Matías: trabajo garantizado, presupuesto sin cargo, respuesta rápida y materiales de calidad en Zona Sur, Provincia de Buenos Aires.",
};

export default function NosotrosPage() {
  return (
    <>
      <WhyUs />
      <Portfolio />
    </>
  );
}
