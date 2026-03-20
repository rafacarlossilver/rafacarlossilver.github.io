import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">RC</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-gray-900">
              Rafael Carlos
            </span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              Sobre
            </Link>
            <Link
              href="#experience"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              Experiência
            </Link>
            <Link
              href="#skills"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
