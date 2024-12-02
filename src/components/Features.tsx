import { Shield, Clock, Award, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-12 w-12 text-teal-600" />,
    title: 'Tecnologia Avançada',
    description: 'Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes.'
  },
  {
    icon: <Clock className="h-12 w-12 text-teal-600" />,
    title: 'Atendimento 24/7',
    description: 'Emergência veterinária disponível 24 horas por dia, 7 dias por semana.'
  },
  {
    icon: <Award className="h-12 w-12 text-teal-600" />,
    title: 'Profissionais Certificados',
    description: 'Equipe altamente qualificada com especialização em diversas áreas.'
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-teal-600" />,
    title: 'Ambiente Acolhedor',
    description: 'Instalações modernas e confortáveis para seu pet se sentir em casa.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Que Nos Escolher?</h2>
          <p className="text-gray-600">Compromisso com a excelência no cuidado com seu pet</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}