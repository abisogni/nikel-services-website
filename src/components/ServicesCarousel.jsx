import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ServicesCarousel = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: 1,
      title: "Conseil & Gestion de Projet",
      shortDesc: "Accompagnement complet de votre projet de A à Z",
      longDesc: "Expertise professionnelle en gestion de projet, coordination des corps de métier, et conseil technique pour mener à bien tous vos projets de construction et rénovation.",
      bgImage: "./images/svc-pm.png"
    },
    {
      id: 2,
      title: "Carrelage & Plâtrerie",
      shortDesc: "Spécialistes en carrelage et travaux de plâtrerie",
      longDesc: "Installation de carrelage haute qualité, travaux de plâtrerie professionnels, étanchéité et finitions impeccables pour des espaces durables et esthétiques.",
      bgImage: "./images/svc-tiling.png"
    },
    {
      id: 3,
      title: "Peinture",
      shortDesc: "Finitions impeccables pour vos intérieurs et extérieurs",
      longDesc: "Peinture extérieure et intérieure professionnelle, effets décoratifs, texturage et patine, finitions de haute qualité pour tous types de surfaces.",
      bgImage: "./images/svc-painting.png"
    },
    {
      id: 4,
      title: "Agencement sur Mesure & Rénovation",
      shortDesc: "Solutions personnalisées et rénovations complètes",
      longDesc: "Conception et réalisation d'agencements sur mesure, rénovations complètes, mobilier intégré, optimisation d'espaces pour allier fonctionnalité et esthétisme.",
      bgImage: "./images/svc-renovation.png"
    },
    {
      id: 5,
      title: "Nettoyage Professionnel",
      shortDesc: "Services de nettoyage pour chantiers et espaces",
      longDesc: "Nettoyage post-chantier, entretien d'espaces professionnels et résidentiels, respect des normes d'hygiène les plus strictes.",  
      bgImage: "./images/svc-cleaning.png"
    }
  ]

  // Create duplicated array for seamless infinite scroll
  const duplicatedServices = [...services, ...services]

  const handleCardHover = (cardId, isHovering) => {
    setIsHovered(isHovering)
    setHoveredCard(isHovering ? cardId : null)
  }

  return (
    <div className="py-16 overflow-hidden bg-white border-l-4 border-brand-orange ml-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-jura font-light">
            Des solutions complètes pour tous vos besoins en construction et rénovation
          </p>
        </div>

        {/* Desktop Continuous Scroll Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{
                x: isHovered ? 0 : [0, -1920] // Move left by width of 5 cards + gaps (320px + 24px) * 5
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear"
                }
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.id}-${index}`}
                  className={`
                    relative rounded-2xl overflow-hidden cursor-pointer
                    flex-shrink-0 w-80 h-96
                    ${hoveredCard === service.id ? 'scale-105' : ''}
                  `}
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onMouseEnter={() => handleCardHover(service.id, true)}
                  onMouseLeave={() => handleCardHover(service.id, false)}
                  onClick={() => {
                    navigate('/services')
                    window.scrollTo(0, 0)
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {/* Background overlay for text visibility */}
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                  
                  {/* Card content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <motion.h3 
                      className="text-xl font-jura font-semibold mb-2"
                      layout
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Short description always visible */}
                    <motion.p 
                      className="text-sm opacity-90 mb-2 font-jura font-light"
                      layout
                    >
                      {service.shortDesc}
                    </motion.p>
                    
                    {/* Long description only on hover */}
                    {hoveredCard === service.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm leading-relaxed font-jura font-light"
                      >
                        {service.longDesc}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden space-y-6 px-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative rounded-2xl overflow-hidden h-64 cursor-pointer"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={() => {
                navigate('/services')
                window.scrollTo(0, 0)
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background overlay for text visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              
              {/* Card content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-jura font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm opacity-90 mb-2 font-jura font-light">
                  {service.shortDesc}
                </p>
                <p className="text-sm leading-relaxed font-jura font-light">
                  {service.longDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesCarousel
