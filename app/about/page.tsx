'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: "AZALA Lucas",
    role: "CEO & Directeur Technique",
    photo: "/images/team/thomas.png",
    description: "Expert en développement web avec plus de 10 ans d'expérience, Lucas supervise tous les aspects techniques de nos projets.",
    skills: ["Architecture Web", "Innovation", "Direction Technique"],
    linkedin: "https://www.linkedin.com/in/lucas-a-8916b22a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "BARBAT Loris",
    role: "CEO & Directeur Marketing",
    photo: "/images/team/marie.png",
    description: "Passionnée de design et d'expérience utilisateur, Loris apporte sa vision créative à chaque projet.",
    skills: ["Design UI/UX", "Marketing", "Stratégie"],
    linkedin: "https://www.linkedin.com/in/loris-barbat-611433347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  }
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* En-tête */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-screen bg-[#ffd700] rounded-l-[80px] transform -skew-x-12" />
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#333] mb-6">
                Notre Histoire
              </h1>
              <p className="text-xl text-[#555] max-w-3xl mx-auto">
                Depuis 2020, nous transformons des idées en expériences numériques exceptionnelles
              </p>
            </motion.div>
          </div>
        </section>

        {/* Notre Mission */}
        <section className="py-20 relative overflow-hidden bg-[#ffd700]/10">
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
                  Notre Mission
                </h2>
                <p className="text-lg text-[#555] mb-8">
                  Chez FuturLine, nous croyons que chaque entreprise mérite une présence en ligne exceptionnelle. 
                  Notre mission est de créer des sites web innovants qui non seulement attirent l'attention, 
                  mais génèrent aussi des résultats concrets pour nos clients.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "200+", label: "Projets Réalisés" },
                    { number: "98%", label: "Clients Satisfaits" },
                    { number: "15+", label: "Prix Remportés" },
                    { number: "24/7", label: "Support Client" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 bg-[#1a1a4e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-[#ffd700]">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/about/mission.svg"
                  alt="Notre mission"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Image avec fond jaune */}
                    <div className="relative h-[400px] bg-[#ffd700]">
                      <div className="absolute top-0 left-0 w-full h-32 bg-[#fff5d7] rounded-b-full transform translate-y-[-50%]" />
                      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#13133a] rounded-t-none" />
                      <div className="absolute inset-0">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className={`object-cover ${
                            member.name === "BARBAT Loris" 
                              ? "object-[50%_15%]"
                              : "object-[50%_10%]"
                          }`}
                          priority
                        />
                      </div>
                    </div>

                    {/* Contenu texte */}
                    <div className="bg-[#13133a] p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffd700] font-medium mb-4">{member.role}</p>
                      <p className="text-white mb-6">{member.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#1a1a4e] text-white rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#ffd700] hover:text-white transition-colors"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          Voir le profil LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
