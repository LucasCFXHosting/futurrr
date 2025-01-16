'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

const catalogueItems = [
  {
    title: "Site Web Premium",
    description: "Une solution complète pour votre entreprise",
    price: "1499€",
    features: [
      "Design sur mesure",
      "Responsive design",
      "SEO optimisé",
      "Panel d'administration",
      "Support premium"
    ],
    image: "/images/premium-site.svg",
    popular: false,
    delay: 0
  },
  {
    title: "Site Vitrine Pro",
    description: "Idéal pour présenter votre activité",
    price: "999€",
    features: [
      "Design moderne",
      "Responsive design",
      "SEO de base",
      "Formulaire de contact",
      "Support standard"
    ],
    image: "/images/showcase-site.svg",
    popular: true,
    delay: 0.2
  },
  {
    title: "E-commerce Starter",
    description: "Lancez votre boutique en ligne",
    price: "1999€",
    features: [
      "Boutique personnalisée",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Dashboard admin",
      "Support e-commerce"
    ],
    image: "/images/ecommerce-site.svg",
    popular: false,
    delay: 0.4
  }
]

export default function Catalogue() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState('')

  const handleOfferClick = (offerTitle: string) => {
    setSelectedOffer(offerTitle)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
        {/* Effet de fond */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des offres adaptées à vos besoins et à votre budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogueItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className={`relative group ${
                  item.popular ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                <div className={`
                  relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300 transform hover:-translate-y-1
                  ${item.popular ? 'border-2 border-[#00a8ff]' : ''}
                `}>
                  {item.popular && (
                    <div className="absolute top-0 right-0 bg-[#00a8ff] text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                      Populaire
                    </div>
                  )}

                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="text-3xl font-bold text-[#00a8ff] mb-6">
                      {item.price}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg
                            className="w-5 h-5 text-[#00a8ff] mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleOfferClick(item.title)}
                      className={`
                        w-full py-4 rounded-xl font-semibold transition-all duration-300
                        ${item.popular 
                          ? 'bg-[#00a8ff] text-white hover:bg-[#0096e6] shadow-lg hover:shadow-[#00a8ff]/25'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }
                      `}
                    >
                      Choisir cette offre
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerTitle={selectedOffer}
      />
    </>
  )
} 