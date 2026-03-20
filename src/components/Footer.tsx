import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">Rafael Carlos</h3>
            <p className="text-sm text-gray-400">
              Desenvolvedor | Arquiteto de Dados | Cientista de Dados
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-blue-400 transition-colors">
                  Experiência
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.linkedin.com/in/rafael-carlos-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/rafacarlossilver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rafacarlossilver@yahoo.com.br"
                  className="hover:text-blue-400 transition-colors"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-400 text-center">
            <p>
              © {currentYear} Rafael Carlos Silverio. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-xs">
              Desenvolvido com Next.js, React e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
