'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TrustedBy from '@/components/TrustedBy'
import Features from '@/components/Features'
import Catalogue from '@/components/Catalogue'
import Testimonials from '@/components/Testimonials'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Bannière jaune inclinée - ajustement de la position et de la taille */}
          <div className="absolute top-0 right-0 w-1/2 h-screen bg-[#ffd700] rounded-l-[80px] transform -skew-x-6" />
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu texte */}
              <div className="z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-[#333] mb-6"
                >
                  Vous souhaitez être visible sur{' '}
                  <span className="relative z-10 text-[#333]">Google</span>{' '}
                  et mettre en avant votre travail de qualité ?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-[#555] mb-8"
                >
                  Pour un site internet sur mesure avec :
                </motion.p>
                
                {/* Liste des avantages */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-4 mb-8"
                >
                  {[
                    "Un design personnalisé et unique",
                    "Un référencement en première page de Google",
                    "Un accompagnement et un suivi régulier"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-[#555]">
                      <svg className="w-5 h-5 mr-2 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </motion.ul>

                {/* Boutons d'action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-all duration-300">
                    Appeler maintenant
                  </button>
                  <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-all duration-300">
                    Je veux un devis gratuit
                  </button>
                  <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-all duration-300">
                    Je veux un audit gratuit
                  </button>
                </motion.div>
              </div>

              {/* Image/Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative h-[600px]"
              >
                <Image
                  src="/images/mockup.png"
                  alt="Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Autres sections */}
        <TrustedBy />
        <Catalogue />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}