import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Smartphone } from 'lucide-react'
import QRCode from 'qrcode'
import Section from './Section'

const AppSection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('')

  const appImages = [
    '/website_prototype/screens/app-1.png',
    '/website_prototype/screens/app-2.png',
    '/website_prototype/screens/app-3.png'
  ]

  const appUrl = 'https://tianluoboding.github.io/wattupapp-prototype/'

  useEffect(() => {
    // Generate QR code
    QRCode.toDataURL(appUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: '#10b981',
        light: '#ffffff'
      }
    }).then(setQrCodeDataUrl)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % appImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + appImages.length) % appImages.length)
  }

  return (
    <Section id="app" className="bg-gradient-to-b from-light-bg to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-8">
            The <span className="text-emerald-500">WattUp App</span>
          </h2>
          <p className="text-2xl text-light-text-secondary max-w-4xl mx-auto">
            Download our app to access all features and start your smarter riding journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-navy">
                  <img
                    src={appImages[currentImage]}
                    alt={`App screenshot ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image doesn't exist
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* QR Code and Install Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-light-text mb-6">
                Scan to open WattUp
              </h3>
              {qrCodeDataUrl && (
                <div className="inline-block p-4 bg-white rounded-lg">
                  <img src={qrCodeDataUrl} alt="QR Code" className="w-48 h-48" />
                </div>
              )}
              <p className="text-light-text-secondary mt-6 text-lg">
                Scan to open WattUp on your phone
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-light-text mb-6">
                Install Instructions
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-base font-bold text-white">
                    1
                  </div>
                  <div>
                    <p className="text-light-text font-medium text-lg">iPhone (Safari)</p>
                    <p className="text-light-text-secondary">Share → Add to Home Screen → Add</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-base font-bold text-white">
                    2
                  </div>
                  <div>
                    <p className="text-light-text font-medium text-lg">Android (Chrome)</p>
                    <p className="text-light-text-secondary">⋮ → Install app</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                <Download size={20} />
                App Store
              </button>
              <button className="btn-primary flex items-center justify-center gap-2">
                <Smartphone size={20} />
                Google Play
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default AppSection