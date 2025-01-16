'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: 999,
    description: "Parfait pour démarrer votre présence en ligne",
    features: [
      "Site One-Page",
      "Design Responsive",
      "Formulaire de Contact",
      "Optimisation SEO de base",
      "Support 30 jours"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: 1999,
    description: "La solution idéale pour les entreprises en croissance",
    features: [
      "Site Multi-Pages",
      "Design Premium",
      "Panel Administrateur",
      "Optimisation SEO avancée",
      "Support 1 an",
      "Intégration CMS",
      "Analyses et Statistiques"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: 3999,
    description: "Pour les entreprises qui veulent se démarquer",
    features: [
      "Site E-commerce Complet",
      "Design Sur-Mesure",
      "Fonctionnalités Avancées",
      "SEO Premium",
      "Support Prioritaire",
      "Formation Incluse",
      "Maintenance Mensuelle",
      "Hébergement Premium"
    ]
  }
];

export default function Pricing() {
  useEffect(() => {
    gsap.from('.pricing-card', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.pricing-section',
        start: 'top center+=100',
      }
    });
  }, []);

  return (
    <section id="pricing" className="pricing-section py-20 px-4 md:px-8 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Nos Offres
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card p-8 rounded-xl backdrop-blur-lg hover-effect ${
                plan.isPopular
                  ? 'bg-gradient-primary text-white transform scale-105'
                  : 'bg-secondary/10'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  {plan.price}€
                  <span className="text-sm font-normal">/site</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-gradient-primary hover:shadow-lg'
                }`}
              >
                Choisir cette offre
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 