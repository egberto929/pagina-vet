import { Stethoscope, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">PetCare Plus</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-teal-600">Início</a>
            <a href="#services" className="text-gray-600 hover:text-teal-600">Serviços</a>
            <a href="#team" className="text-gray-600 hover:text-teal-600">Equipe</a>
            <a href="#testimonials" className="text-gray-600 hover:text-teal-600">Depoimentos</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600">Contato</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Início</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Serviços</a>
            <a href="#team" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Equipe</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Depoimentos</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-teal-600">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
}