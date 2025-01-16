'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: "Client 1", logo: "/images/clients/logo1.svg", delay: 0 },
  { name: "Client 2", logo: "/images/clients/logo2.svg", delay: 0.1 },
  { name: "Client 3", logo: "/images/clients/logo3.svg", delay: 0.2 },
  { name: "Client 4", logo: "/images/clients/logo4.svg", delay: 0.3 },
]

export default function TrustedBy() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-[#ffd700]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-[#00a8ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des entreprises de toutes tailles nous font confiance pour leur présence en ligne
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: client.delay }}
              className="group relative"
            >
              <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 to-[#00a8ff]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="aspect-[3/2] relative">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 