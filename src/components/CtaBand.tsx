import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import QRCode from 'qrcode'

const CtaBand = () => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('')

  const appUrl = 'https://tianluoboding.github.io/wattupapp-prototype/'

  useEffect(() => {
    // Generate QR code
    QRCode.toDataURL(appUrl, {
      width: 150,
      margin: 2,
      color: {
        dark: '#10b981',
        light: '#ffffff'
      }
    }).then(setQrCodeDataUrl)
  }, [])

  const scrollToApp = () => {
    const element = document.getElementById('app')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-emerald-500 to-emerald-600">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to ride smarter?
          </h2>
          
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Download WattUp today and experience the future of cycling.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <button
              onClick={scrollToApp}
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center gap-2 text-lg"
            >
              Get the App
              <ArrowDown size={20} />
            </button>

            {qrCodeDataUrl && (
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-3 rounded-lg">
                  <img src={qrCodeDataUrl} alt="QR Code" className="w-32 h-32" />
                </div>
                <p className="text-emerald-100 text-sm">
                  Scan to open WattUp
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBand
