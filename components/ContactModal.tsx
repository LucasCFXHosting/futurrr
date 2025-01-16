'use client'

import { useState, useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  offerTitle: string
}

export default function ContactModal({ isOpen, onClose, offerTitle }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-[#333] mb-4">
          Contactez-nous pour {offerTitle}
        </h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contact@futurline.fr" className="hover:text-[#ffd700]">
              contact@futurline.fr
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+33612345678" className="hover:text-[#ffd700]">
              06 12 34 56 78
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Bordeaux, France</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={() => window.location.href = 'mailto:contact@futurline.fr'}
            className="w-full py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors"
          >
            Envoyer un email
          </button>
          <button
            onClick={() => window.location.href = 'tel:+33612345678'}
            className="w-full py-3 bg-[#ffd700] text-[#333] rounded-lg font-semibold hover:bg-[#ffc700] transition-colors"
          >
            Appeler maintenant
          </button>
        </div>
      </div>
    </div>
  )
} 