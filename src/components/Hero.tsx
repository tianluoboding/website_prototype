import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    const scrollToApp = () => {
        const element = document.getElementById('app')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-light-bg to-emerald-50">
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-text leading-tight">
                        Ride smarter.<br />
                        <span className="text-emerald-500">Worry less.</span>
                    </h1>

                    <p className="text-2xl sm:text-3xl text-light-text-secondary max-w-4xl mx-auto leading-relaxed">
                        Smarter routes, proactive safety, and peace of mind—on every ride.
                    </p>

                    <div className="flex flex-col gap-8 justify-center items-center pt-8">
                        <button
                            onClick={scrollToApp}
                            className="btn-secondary flex items-center gap-3 text-xl px-10 py-5"
                        >
                            Get the App
                            <ArrowDown size={24} />
                        </button>

                        {/* Video Player Window */}
                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                                <video
                                    className="w-full h-80 object-cover"
                                    poster="/video/robot-demo-poster.jpg"
                                    controls
                                    preload="metadata"
                                >
                                    <source src="/video/robot-demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="p-6 bg-white">
                                    <h3 className="text-xl font-semibold text-light-text mb-3">
                                        Meet MISSA-RA
                                    </h3>
                                    <p className="text-base text-light-text-secondary">
                                        Revolutionary robotic roadside assistance for all your mobility needs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <button
                    onClick={scrollToApp}
                    className="text-light-text hover:text-emerald-500 transition-colors"
                    aria-label="Scroll to app section"
                >
                    <ArrowDown size={24} className="animate-bounce" />
                </button>
            </motion.div>
        </section>
    )
}

export default Hero