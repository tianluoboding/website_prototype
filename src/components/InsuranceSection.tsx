import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, Phone, X } from 'lucide-react'
import Section from './Section'

const InsuranceSection = () => {
  const [isClaimFlowModalOpen, setIsClaimFlowModalOpen] = useState(false)

  const claimSteps = [
    {
      step: 1,
      title: 'Report Incident',
      description: 'Open the app and tap "Report Claim" to start the process',
      icon: <Phone size={24} />
    },
    {
      step: 2,
      title: 'Upload Evidence',
      description: 'Take photos and provide details about the incident',
      icon: <CheckCircle size={24} />
    },
    {
      step: 3,
      title: 'Instant Processing',
      description: 'Get approval within minutes and receive your payout',
      icon: <Clock size={24} />
    }
  ]

  return (
    <>
      <Section id="insurance" className="bg-gradient-to-b from-light-bg to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-8">
              <span className="text-emerald-500">Premium Insurance</span> Coverage
            </h2>
            <p className="text-2xl text-light-text-secondary max-w-4xl mx-auto">
              Comprehensive protection for you and your bike with instant claims processing.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-light p-10 lg:p-16"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-3xl font-semibold text-light-text mb-6">
                  Premium covers you & your bike
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-light-text mb-3">Theft Protection</h4>
                  <p className="text-light-text-secondary">Full replacement value coverage</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-light-text mb-3">Damage Coverage</h4>
                  <p className="text-light-text-secondary">Accidental damage and repairs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-light-text mb-3">Liability Insurance</h4>
                  <p className="text-light-text-secondary">Protection against third-party claims</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setIsClaimFlowModalOpen(true)}
                  className="btn-primary"
                >
                  See Claim Flow
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Claim Flow Modal */}
      {isClaimFlowModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsClaimFlowModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-navy border border-white/20 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsClaimFlowModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-emerald-500 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-semibold text-white mb-6 pr-8">
              Claim Process
            </h3>
            
            <div className="space-y-6">
              {claimSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default InsuranceSection