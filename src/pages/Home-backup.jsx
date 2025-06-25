import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <SplitText>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nikel Services
            </h1>
          </SplitText>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Excellence en construction et rénovation à Neuchâtel. 
            Qualité, confiance et hygiène pour tous vos projets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Demander un devis
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en construction et rénovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Conseil & Gestion de Projet
              </h3>
              <p className="text-gray-600">
                Accompagnement complet de votre projet de A à Z
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Carrelage & Rénovation
              </h3>
              <p className="text-gray-600">
                Spécialistes en carrelage et rénovation de salles de bain
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Peinture & Plâtrerie
              </h3>
              <p className="text-gray-600">
                Finitions impeccables pour vos intérieurs
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Agencement sur Mesure
              </h3>
              <p className="text-gray-600">
                Solutions personnalisées pour optimiser vos espaces
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nettoyage Professionnel
              </h3>
              <p className="text-gray-600">
                Services de nettoyage pour chantiers et espaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Nos Valeurs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600">
                Excellence dans chaque détail de nos réalisations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confiance</h3>
              <p className="text-gray-600">
                Transparence et fiabilité dans nos relations clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hygiène</h3>
              <p className="text-gray-600">
                Respect des normes et propreté sur tous nos chantiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8">
            Basés à Bevaix, nous intervenons dans toute la Suisse romande
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Nous contacter
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Voir nos réalisations
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home