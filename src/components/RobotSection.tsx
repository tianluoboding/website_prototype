import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Battery, Shield, Zap, Wifi } from 'lucide-react'
import Section from './Section'

const RobotSection = () => {
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false)

  const specs = [
    { label: 'Response Time', value: '< 15 minutes' },
    { label: 'Service Range', value: 'Urban & Suburban' },
    { label: 'Vehicle Support', value: 'Bikes, Scooters, PEVs' },
    { label: 'Parts Inventory', value: '500+ items' },
    { label: 'Weather Rating', value: 'IP65 All-Weather' },
    { label: 'AI Navigation', value: 'GPS + Computer Vision' },
    { label: 'Power Supply', value: 'Emergency Charging Station' },
    { label: 'Connectivity', value: '4G, WiFi, Bluetooth' },
  ]

  const features = [
    {
      icon: <Shield size={32} />,
      title: '24/7 Roadside Assist',
      description: 'Robotic assistance for bikes, scooters, skaters & PEVs'
    },
    {
      icon: <Battery size={32} />,
      title: 'Emergency Charging',
      description: 'On-demand emergency charging when you need it most'
    },
    {
      icon: <Zap size={32} />,
      title: 'Parts & Equipment',
      description: 'Purchase & rent replacement parts and specialized repair equipment'
    },
    {
      icon: <Wifi size={32} />,
      title: 'Smart Delivery',
      description: 'Inner tubes, flat repair kits, spare chains delivered instantly'
    }
  ]

  return (
    <>
      <Section id="robot" className="bg-gradient-to-b from-emerald-50 to-light-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-8">
            Meet <span className="text-emerald-500">MISSA-RA</span>
          </h2>
          <p className="text-2xl text-light-text-secondary max-w-4xl mx-auto">
            Revolutionary robotic roadside assistance for bikes, scooters, skaters & PEVs
          </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Robot Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <video
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  controls
                  poster="/website_prototype/robot-hero.jpg"
                  onError={(e) => {
                    // Fallback to gradient if video doesn't exist
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                >
                  <source src="/website_prototype/video/robot-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="hidden w-full h-96 bg-gradient-to-br from-emerald-500/20 to-emerald-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-emerald-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap size={48} className="text-emerald-500" />
                    </div>
                    <p className="text-light-text text-lg">WattUp Robot</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-light-text mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-light-text-secondary text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setIsSpecsModalOpen(true)}
                className="btn-secondary w-full sm:w-auto"
              >
                View Specs
              </button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Specs Modal */}
      {isSpecsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSpecsModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-navy border border-white/20 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsSpecsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-emerald-500 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-semibold text-white mb-6 pr-8">
              MISSA-RA Specifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-white/5 rounded-lg p-4">
                  <dt className="text-sm font-medium text-gray-300 mb-1">
                    {spec.label}
                  </dt>
                  <dd className="text-lg font-semibold text-white">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default RobotSection