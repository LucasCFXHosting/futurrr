'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  useEffect(() => {
    // Animation du titre
    gsap.from('.hero-title', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
      delay: 0.5
    });

    // Animation du sous-titre
    gsap.from('.hero-subtitle', {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power4.out',
      delay: 0.8
    });

    // Initialisation des particules
    if ((window as any).particlesJS) {
      (window as any).particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00a8ff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00a8ff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <div id="particles-js" className="absolute inset-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          Votre Vision, Notre Innovation
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Découvrez l'avenir du web design avec des sites web professionnels et innovants
        </p>
        <div className="mt-12 space-x-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg font-semibold text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Voir nos sites
          </button>
          <button className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-white hover:bg-blue-400/10 transition-all duration-300">
            En savoir plus
          </button>
        </div>
      </div>
      
      {/* Effet de lumière en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/50 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500 rounded-full filter blur-[100px] opacity-20" />
    </section>
  );
} 