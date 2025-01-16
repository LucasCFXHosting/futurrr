'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white shadow-lg' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative group">
            <Logo />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/about', label: 'Qui sommes-nous' },
              { href: '/contact', label: 'Nous Contacter' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group text-[#333] hover:text-[#ffd700] transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd700] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <button className="px-6 py-2.5 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-all duration-300 transform hover:-translate-y-0.5">
              Démarrer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative w-10 h-10 text-[#333] focus:outline-none bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors">
            <span className="sr-only">Menu</span>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="block w-5 h-0.5 bg-current mb-1"></span>
              <span className="block w-5 h-0.5 bg-current mb-1"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
} 