import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-navy border border-white/20 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white hover:text-emerald-500 transition-colors bg-black/50 rounded-full p-2"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                poster="/video/promo-poster.jpg"
              >
                <source src="/video/promo.mp4" type="video/mp4" />
                <source src="/video/promo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                WattUp: The Future of Smart Cycling
              </h3>
              <p className="text-gray-300">
                Discover how WattUp is revolutionizing the way we ride.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default VideoModal
