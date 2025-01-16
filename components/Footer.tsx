export default function Footer() {
  return (
    <footer className="bg-[#333] text-white">
      {/* Section principale */}
      <div className="py-16 bg-gradient-to-b from-[#333] to-[#222]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo et Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#ffa500]">FuturLine</h3>
              <p className="text-gray-400">
                Créons ensemble l'avenir du web avec des solutions innovantes et performantes.
              </p>
              <div className="flex space-x-4">
                {/* Réseaux sociaux */}
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="text-gray-400 hover:text-[#ffa500] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <img
                      src={`/icons/social/${social}.svg`}
                      alt={social}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
              <ul className="space-y-2">
                {[
                  "Création de site web",
                  "Référencement SEO",
                  "Maintenance",
                  "Support technique"
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-[#ffa500] transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Bordeaux, France</li>
                <li>📞 06 78 53 98 98</li>
                <li>✉️ contact@futurline.fr</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Restez informé de nos dernières actualités
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#ffa500]"
                />
                <button className="w-full px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors">
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 bg-[#222] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 FuturLine. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-[#ffa500] transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-[#ffa500] transition-colors">CGV</a>
              <a href="#" className="hover:text-[#ffa500] transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 