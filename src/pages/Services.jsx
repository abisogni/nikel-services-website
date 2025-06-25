import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      title: "Conseil & Gestion de Projet",
      description: "Expertise professionnelle en gestion de projet, coordination des corps de métier, et conseil technique pour mener à bien tous vos projets de construction et rénovation.",
      features: ["Analyse des besoins", "Planification détaillée", "Coordination des artisans", "Suivi de chantier"]
    },
    {
      title: "Carrelage & Plâtrerie", 
      description: "Installation de carrelage haute qualité, travaux de plâtrerie professionnels, étanchéité et finitions impeccables pour des espaces durables et esthétiques.",
      features: ["Pose de carrelage", "Travaux de plâtrerie", "Étanchéité", "Finitions sur mesure"]
    },
    {
      title: "Peinture",
      description: "Peinture extérieure et intérieure professionnelle, effets décoratifs, texturage et patine, finitions de haute qualité pour tous types de surfaces.",
      features: ["Peinture intérieure", "Peinture extérieure", "Effets décoratifs", "Finitions spéciales"]
    },
    {
      title: "Agencement sur Mesure & Rénovation",
      description: "Conception et réalisation d'agencements sur mesure, rénovations complètes, mobilier intégré, optimisation d'espaces pour allier fonctionnalité et esthétisme.",
      features: ["Agencements personnalisés", "Rénovations complètes", "Mobilier intégré", "Optimisation d'espaces"]
    },
    {
      title: "Nettoyage Professionnel",
      description: "Nettoyage post-chantier, entretien d'espaces professionnels et résidentiels, respect des normes d'hygiène les plus strictes.",
      features: ["Nettoyage post-chantier", "Entretien régulier", "Normes d'hygiène", "Espaces professionnels"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 border-b-4 border-brand-cyan">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-jura font-semibold text-gray-900 mb-6">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-jura font-light">
            Découvrez notre gamme complète de services en construction et rénovation à Neuchâtel
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 font-jura font-light text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                        <span className="text-gray-700 font-jura font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center border-l-4 border-brand-cyan">
                    <span className="text-gray-500 font-jura font-light">Image à venir</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white border-t-4 border-brand-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-4">
            Intéressé par nos services ?
          </h2>
          <p className="text-gray-600 mb-8 font-jura font-light">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => {
                navigate('/contact')
                window.scrollTo(0, 0)
              }}
              className="border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange px-8 py-3 rounded-lg font-jura font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services