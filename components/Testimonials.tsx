'use client'

import Image from 'next/image'

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Artisan",
    company: "Les Wooders Bordelais",
    image: "/images/clients/client1.svg",
    content: "Grâce à FuturLine, mon entreprise est maintenant visible sur Google. Le design est moderne et professionnel, exactement ce que je recherchais !"
  },
  {
    name: "Marie Martin",
    role: "Directrice",
    company: "ATDG Construction",
    image: "/images/clients/client2.svg",
    content: "Une équipe à l'écoute et professionnelle. Le site web a dépassé mes attentes et les résultats sont au rendez-vous."
  },
  {
    name: "Pierre Dubois",
    role: "Gérant",
    company: "Art Toit 33",
    image: "/images/clients/client3.svg",
    content: "Je recommande vivement FuturLine. Leur expertise en référencement nous a permis d'augmenter significativement notre visibilité en ligne."
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f8f8] to-[#ffffff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-[#333]">Ce que disent nos clients</span>
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Des retours d'expérience qui parlent d'eux-mêmes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#333]">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-[#ffa500]">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              
              {/* Étoiles */}
              <div className="flex mt-4 text-[#ffd700]">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 