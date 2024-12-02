import { Stethoscope, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">PetCare Plus</span>
            </div>
            <p className="text-gray-400">
              Cuidando com amor e dedicação do seu melhor amigo.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400">Serviços</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-teal-400">Equipe</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-400">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Consultas</li>
              <li className="text-gray-400">Vacinação</li>
              <li className="text-gray-400">Cirurgias</li>
              <li className="text-gray-400">Emergência 24h</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PetCare Plus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}