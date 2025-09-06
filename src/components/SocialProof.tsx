import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Section from './Section'

const SocialProof = () => {
  const testimonials = [
    {
      quote: "WattUp has completely transformed my daily commute. The smart routing saves me 15 minutes every day.",
      author: "Sarah Chen",
      role: "Product Manager",
      rating: 5
    },
    {
      quote: "The peace of mind knowing my bike is protected and I can get instant help is priceless.",
      author: "Mike Rodriguez",
      role: "Software Engineer",
      rating: 5
    },
    {
      quote: "Best investment I've made for my cycling experience. The AI features are incredibly smart.",
      author: "Emma Thompson",
      role: "Designer",
      rating: 5
    }
  ]

  return (
    <Section className="bg-gradient-to-b from-emerald-50 to-light-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-8">
            Loved by <span className="text-emerald-500">riders worldwide</span>
          </h2>
          <p className="text-2xl text-light-text-secondary max-w-4xl mx-auto">
            Join thousands of satisfied users who have transformed their riding experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-emerald-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-light-text-secondary mb-8 leading-relaxed text-xl">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-light-text text-xl">
                  {testimonial.author}
                </div>
                <div className="text-base text-light-text-secondary">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default SocialProof
