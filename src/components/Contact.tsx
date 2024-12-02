import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-gray-600">Estamos aqui para ajudar você e seu pet</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                <p className="text-gray-600">(11) 4444-5555</p>
                <p className="text-gray-600">Emergência: (11) 4444-5556</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contato@petcareplus.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                <p className="text-gray-600">Av. dos Animais, 123</p>
                <p className="text-gray-600">São Paulo - SP</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                <p className="text-gray-600">Sábados: 8h às 18h</p>
                <p className="text-gray-600">Emergência: 24h</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}