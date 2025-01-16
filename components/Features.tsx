'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Composant pour l'animation des particules
function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: any[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

const features = [
  {
    icon: "/icons/design.svg",
    title: "Design Moderne",
    description: "Des designs uniques et personnalisés qui reflètent votre identité",
    animation: "design"
  },
  {
    icon: "/icons/responsive.svg",
    title: "100% Responsive",
    description: "Une expérience optimale sur tous les appareils",
    animation: "responsive"
  },
  {
    icon: "/icons/performance.svg",
    title: "Performance",
    description: "Des sites rapides et optimisés pour une meilleure expérience utilisateur",
    animation: "performance"
  },
  {
    icon: "/icons/seo.svg",
    title: "SEO Optimisé",
    description: "Un référencement naturel performant pour plus de visibilité",
    animation: "seo"
  },
  {
    icon: "/icons/support.svg",
    title: "Support Technique",
    description: "Une équipe dédiée pour vous accompagner",
    animation: "support"
  },
  {
    icon: "/icons/security.svg",
    title: "Sécurité",
    description: "Protection avancée contre les menaces en ligne",
    animation: "security"
  }
]

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#ffd700] to-[#ffa500]">
      <ParticlesBackground />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6 relative inline-block">
            Pourquoi Nous Choisir
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
          </h2>
          <p className="text-xl text-white/90">
            Des solutions adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative w-16 h-16 mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse" />
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="relative w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/80 transform group-hover:-translate-y-1 transition-transform duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 