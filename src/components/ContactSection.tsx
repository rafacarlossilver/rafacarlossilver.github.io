import Link from "next/link";

interface ContactSectionProps {
  email: string;
  linkedin: string;
  github?: string;
}

export function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-8 sm:p-12 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vamos Conectar!</h2>
      <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
        Estou aberto a novas oportunidades, colaborações e conversas sobre tecnologia. 
        Sinta-se livre para entrar em contato comigo através de qualquer um dos canais abaixo.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <Link
          href={`mailto:${email}`}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block hover:shadow-lg"
        >
          ✉️ Enviar Email
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-block hover:shadow-lg"
        >
          💼 LinkedIn
        </Link>
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors inline-block hover:shadow-lg"
          >
            🐙 GitHub
          </Link>
        )}
      </div>

      <p className="text-sm text-blue-200">
        Ou conecte-se comigo no LinkedIn para atualizações sobre novos projetos e insights técnicos.
      </p>
    </section>
  );
}
