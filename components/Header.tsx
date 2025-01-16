'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] overflow-hidden">
      {/* Forme décorative */}
      <div className="absolute top-0 right-0 w-2/3 h-screen bg-[#ffd700] rounded-l-[80px] transform -skew-x-12" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Colonne de gauche - Texte */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/images/logo.svg"
                alt="FuturLine"
                width={300}
                height={80}
                className="w-auto h-20"
                priority
              />
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] leading-tight">
              Vous souhaitez être visible sur{' '}
              <span className="text-[#ffa500] hover:scale-110 transition-transform inline-block">Google</span> et mettre en avant votre travail de qualité ?
            </h1>

            {/* Sous-titre */}
            <h2 className="text-2xl text-[#ffa500] font-semibold">
              Pour un site internet sur mesure avec :
            </h2>

            {/* Liste des avantages */}
            <ul className="space-y-4">
              {[
                "Un design personnalisé et unique",
                "Un référencement en première page de Google",
                "Un accompagnement et un suivi régulier"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-lg text-[#555] animate-slide-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="text-[#4CAF50] text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Titre CTA */}
            <h3 className="text-2xl text-[#ffa500] font-semibold pt-8">
              Recevez votre devis gratuit aujourd'hui !
            </h3>

            {/* Boutons CTA */}
            <div className="flex flex-wrap gap-4">
              {[
                "Appeler maintenant",
                "Je veux un devis gratuit",
                "Je veux un audit gratuit"
              ].map((text, index) => (
                <button
                  key={index}
                  className="px-8 py-4 bg-[#4CAF50] text-white rounded-full font-semibold hover:bg-[#45a049] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          {/* Colonne de droite - Images */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mockup.png"
                alt="Mockups de sites web responsifs"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Formes décoratives */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ffd700] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#ffa500] rounded-full opacity-20 animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </header>
  )
} 