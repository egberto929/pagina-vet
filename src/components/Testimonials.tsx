import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Santos',
    pet: 'Luna',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    petImage: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=300&q=80',
    text: 'Excelente atendimento! A equipe é muito atenciosa e profissional. Minha Luna sempre é tratada com muito carinho.',
    rating: 5
  },
  {
    name: 'João Silva',
    pet: 'Thor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    petImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=300&q=80',
    text: 'Ótima estrutura e atendimento emergencial eficiente. Salvaram a vida do meu Thor!',
    rating: 5
  },
  {
    name: 'Ana Oliveira',
    pet: 'Nina',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    petImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=300&q=80',
    text: 'Preços justos e atendimento de qualidade. Recomendo para todos os donos de pets!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-gray-600">Histórias reais de tutores e seus pets</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <img
                  src={testimonial.petImage}
                  alt={testimonial.pet}
                  className="w-12 h-12 rounded-full object-cover -ml-4 border-2 border-white"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">com {testimonial.pet}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <Quote className="h-8 w-8 text-teal-600 opacity-50" />
              </div>
              
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}