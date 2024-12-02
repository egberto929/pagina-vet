import { Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cuidado Veterinário de Excelência para seu Pet
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Oferecemos atendimento especializado e carinhoso para garantir a saúde e bem-estar do seu melhor amigo. Nossa clínica conta com equipamentos modernos e profissionais dedicados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                <Calendar className="mr-2" />
                Agendar Consulta
              </button>
              <button className="flex items-center justify-center border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                <Phone className="mr-2" />
                Emergência 24h
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-bold text-teal-600">+1000</span> tutores confiam em nosso trabalho
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80"
              alt="Veterinário examinando um cachorro"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Atendimento Humanizado</p>
                  <p className="text-sm text-gray-500">Certificado de Excelência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}