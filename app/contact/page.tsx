'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

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
                Contactez-nous
              </h1>
              <p className="text-xl text-[#555] max-w-3xl mx-auto">
                Une question ? Un projet ? N'hésitez pas à nous contacter !
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-[#333] mb-6">
                    Nos coordonnées
                  </h2>
                  <p className="text-[#555] mb-8">
                    N'hésitez pas à nous contacter par téléphone, email ou via le formulaire.
                    Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Téléphone</h3>
                      <a href="tel:+33612345678" className="text-[#555] hover:text-[#ffd700]">
                        06 12 34 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Email</h3>
                      <a href="mailto:contact@futurline.fr" className="text-[#555] hover:text-[#ffd700]">
                        contact@futurline.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#333]">Adresse</h3>
                      <p className="text-[#555]">Bordeaux, France</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Formulaire */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#333] mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 outline-none transition-colors text-[#333]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 outline-none transition-colors text-[#333]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#333] mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 outline-none transition-colors text-[#333]"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#333] mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 outline-none transition-colors text-[#333]"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[#333] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 outline-none transition-colors resize-none text-[#333]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full py-4 rounded-lg font-semibold text-white
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#4CAF50] hover:bg-[#45a049] transition-colors'
                      }
                    `}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-green-600 text-center"
                    >
                      Message envoyé avec succès !
                    </motion.p>
                  )}

                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-red-600 text-center"
                    >
                      Une erreur est survenue. Veuillez réessayer.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 