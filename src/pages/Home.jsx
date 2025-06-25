import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText'
import ServicesCarousel from '../components/ServicesCarousel'
import HeroSlideshow from '../components/HeroSlideshow'
import HeroParallax from '../components/HeroParallax'
import HeroKenBurns from '../components/HeroKenBurns'
import HeroMosaic from '../components/HeroMosaic'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen border-b-4 border-brand-cyan"
      >
        <HeroKenBurns>
          <div className="flex items-center justify-center h-full px-6">
            <div className="max-w-7xl mx-auto text-center text-white">
              <SplitText>
                <h1 className="text-5xl md:text-7xl font-jura font-semibold mb-6">
                  Nikel Services
                </h1>
              </SplitText>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-jura font-light"
              >
                Excellence en construction et rénovation à Neuchâtel. 
                Qualité, confiance et hygiène pour tous vos projets.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button 
                  onClick={() => {
                    navigate('/contact')
                    window.scrollTo(0, 0)
                  }}
                  className="border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange bg-white px-10 py-5 rounded-lg text-xl font-jura font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                >
                  Demander un devis
                </button>
              </motion.div>
            </div>
          </div>
        </HeroKenBurns>
      </motion.section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Values Section */}
      <section className="bg-white py-16 px-6 border-r-4 border-brand-cyan mr-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-12">Nos Valeurs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/images/icon-quality.png" 
                  alt="Qualité" 
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-jura font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600 font-jura font-light">
                Excellence dans chaque détail de nos réalisations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/images/icon-trust.png" 
                  alt="Confiance" 
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-jura font-semibold text-gray-900 mb-2">Confiance</h3>
              <p className="text-gray-600 font-jura font-light">
                Transparence et fiabilité dans nos relations clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/images/icon-cleanliness.png" 
                  alt="Hygiène" 
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-jura font-semibold text-gray-900 mb-2">Hygiène</h3>
              <p className="text-gray-600 font-jura font-light">
                Respect des normes et propreté sur tous nos chantiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-white border-t-4 border-brand-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8 font-jura font-light">
            Basés à Bevaix, nous intervenons dans toute la Suisse romande
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                navigate('/contact')
                window.scrollTo(0, 0)
              }}
              className="border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange px-8 py-3 rounded-lg font-jura font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </button>
            <button 
              onClick={() => {
                navigate('/services')
                window.scrollTo(0, 0)
              }}
              className="border-2 border-brand-cyan hover:bg-brand-cyan hover:text-white text-brand-cyan px-8 py-3 rounded-lg font-jura font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Voir nos réalisations
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home