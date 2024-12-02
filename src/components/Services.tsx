import { Syringe, Stethoscope, Scissors, Heart, Bath, TestTube } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
    title: 'Consultas',
    description: 'Atendimento clínico completo com profissionais especializados'
  },
  {
    icon: <Syringe className="h-8 w-8 text-teal-600" />,
    title: 'Vacinação',
    description: 'Programa completo de vacinação para cães e gatos'
  },
  {
    icon: <Scissors className="h-8 w-8 text-teal-600" />,
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos com equipamentos modernos'
  },
  {
    icon: <Heart className="h-8 w-8 text-teal-600" />,
    title: 'Emergência',
    description: 'Atendimento de emergência 24 horas'
  },
  {
    icon: <Bath className="h-8 w-8 text-teal-600" />,
    title: 'Banho e Tosa',
    description: 'Serviços de higiene e estética para seu pet'
  },
  {
    icon: <TestTube className="h-8 w-8 text-teal-600" />,
    title: 'Exames',
    description: 'Laboratório próprio para exames e diagnósticos'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600">Oferecemos uma ampla gama de serviços veterinários para seu pet</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}