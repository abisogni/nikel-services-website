const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 border-b-4 border-brand-cyan">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-jura font-semibold text-gray-900 mb-6">Contact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-jura font-light">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-orange">
              <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-8">Demander un devis</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-jura font-medium text-gray-700 mb-2">
                    Nom et Prénom
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent font-jura font-light"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-jura font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent font-jura font-light"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-jura font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent font-jura font-light"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-jura font-medium text-gray-700 mb-2">
                    Type de projet
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent font-jura font-light">
                    <option>Sélectionnez un service</option>
                    <option>Conseil & Gestion de Projet</option>
                    <option>Carrelage & Plâtrerie</option>
                    <option>Peinture</option>
                    <option>Agencement sur Mesure & Rénovation</option>
                    <option>Nettoyage Professionnel</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-jura font-medium text-gray-700 mb-2">
                    Description du projet
                  </label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent font-jura font-light"
                    placeholder="Décrivez votre projet en quelques mots..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-brand-cyan hover:bg-cyan-600 text-white py-4 rounded-lg font-jura font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-r-4 border-brand-cyan">
              <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-8">Informations de contact</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                    <h3 className="font-jura font-semibold text-gray-900">Adresse</h3>
                  </div>
                  <p className="text-gray-600 font-jura font-light ml-6">
                    Bevaix, Neuchâtel<br />
                    Suisse
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-brand-cyan rounded-full mr-3"></div>
                    <h3 className="font-jura font-semibold text-gray-900">Zone d'intervention</h3>
                  </div>
                  <p className="text-gray-600 font-jura font-light ml-6">
                    Toute la Suisse romande
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                    <h3 className="font-jura font-semibold text-gray-900">Horaires</h3>
                  </div>
                  <p className="text-gray-600 font-jura font-light ml-6">
                    Lundi - Vendredi: 8h00 - 18h00<br />
                    Samedi: 8h00 - 12h00<br />
                    Dimanche: Fermé
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-brand-cyan rounded-full mr-3"></div>
                    <h3 className="font-jura font-semibold text-gray-900">Contact</h3>
                  </div>
                  <p className="text-gray-600 font-jura font-light ml-6">
                    Téléphone: [À compléter]<br />
                    Email: [À compléter]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 px-6 bg-white border-t-4 border-brand-orange">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-jura font-semibold text-gray-900 mb-4">Notre zone d'intervention</h2>
            <p className="text-gray-600 font-jura font-light">
              Basés à Bevaix dans le canton de Neuchâtel, nous intervenons dans toute la Suisse romande
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center border-4 border-gray-300 border-dashed">
            <span className="text-gray-500 font-jura font-light text-lg">Carte interactive à venir</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact