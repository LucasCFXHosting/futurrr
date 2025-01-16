'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    gsap.from('.contact-form', {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center+=100',
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simuler un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      // Réinitialiser le statut après 3 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Contactez-nous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="contact-info space-y-8">
            <div className="bg-secondary/10 backdrop-blur-lg rounded-xl p-6 hover-effect">
              <h3 className="text-2xl font-semibold mb-4">Parlons de votre projet</h3>
              <p className="text-gray-300 mb-6">
                Vous souhaitez donner vie à votre projet web ? Notre équipe est là pour vous accompagner 
                dans le choix de la meilleure solution adaptée à vos besoins.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@futurline.com" className="hover:text-accent transition-colors">
                    contact@futurline.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+33123456789" className="hover:text-accent transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Entreprise
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                placeholder="Votre entreprise"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-secondary/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all resize-none"
                placeholder="Décrivez votre projet..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 
                ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-primary hover:shadow-lg transform hover:-translate-y-1'}`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {submitStatus === 'success' && (
              <div className="text-green-500 text-center">
                Message envoyé avec succès !
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-red-500 text-center">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 