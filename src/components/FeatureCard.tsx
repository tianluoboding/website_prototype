import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  learnMoreContent: string
}

const FeatureCard = ({ icon, title, description, learnMoreContent }: FeatureCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="card-light p-8 hover:shadow-2xl transition-all duration-300 group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-3xl font-semibold text-light-text mb-6">
          {title}
        </h3>
        
        <p className="text-light-text-secondary mb-8 leading-relaxed text-xl">
          {description}
        </p>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-emerald-500 hover:text-emerald-400 flex items-center gap-3 transition-colors font-medium text-lg"
        >
          Learn more
          <ArrowRight size={20} />
        </button>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-navy border border-white/20 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-emerald-500 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-semibold text-white mb-4 pr-8">
              {title}
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              {learnMoreContent}
            </p>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default FeatureCard