const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-jura font-semibold mb-4">Nikel Services</h3>
            <p className="text-gray-300 mb-4 font-jura font-light">
              Excellence en construction et rénovation à Neuchâtel. 
              Qualité, confiance et hygiène pour tous vos projets.
            </p>
            <p className="text-gray-300 font-jura font-light">
              Basés à Bevaix, nous intervenons dans toute la Suisse romande.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-jura font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 font-jura font-light">
              <li>Conseil & Gestion</li>
              <li>Carrelage & Rénovation</li>
              <li>Peinture & Plâtrerie</li>
              <li>Agencement sur Mesure</li>
              <li>Nettoyage Professionnel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-jura font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300 font-jura font-light">
              <p>Bevaix, Neuchâtel</p>
              <p>Suisse</p>
              <p>Tél: [À compléter]</p>
              <p>Email: [À compléter]</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="font-jura font-light">&copy; 2024 Nikel Services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer