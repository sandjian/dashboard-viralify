import { AccordionFaqs } from "./components/AccordionFaqs";

export default function PageFaqs() {
  return (
    <div className="max-w-4xl p-6 mx-auto bg-background rounded-lg shadow-md">
        <h2 className="mb-8 text-3xl">FAQS</h2>
        <div className="mb-5">
        <p>Bienvenido a nuestra sección de preguntas frecuentes, diseñada especialmente para brindarte respuestas rápidas y claras sobre la utilización del dashboard.</p>
        
        <p>Aquí encontrarás una recopilación de las preguntas más frecuentes que nuestros usuarios suelen hacer sobre el funcionamiento, características y uso del dashboard. Desde cómo registrarte hasta cómo aprovechar al máximo sus funciones.</p>
        
        <p>Explora nuestras FAQs y sácale el máximo provecho al dashboard.</p>
        </div>
        <AccordionFaqs />
    </div>
  )
}
