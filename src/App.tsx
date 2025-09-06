import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturesSection from './components/FeaturesSection'
import AppSection from './components/AppSection'
import RobotSection from './components/RobotSection'
import InsuranceSection from './components/InsuranceSection'
import SocialProof from './components/SocialProof'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

function App() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-light-bg">
            <Header />
            <main>
                <Hero onWatchVideo={() => setIsVideoModalOpen(true)} />
                <FeaturesSection />
                <AppSection />
                <RobotSection />
                <InsuranceSection />
                <SocialProof />
                <CtaBand />
            </main>
            <Footer />

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
            />
        </div>
    )
}

export default App

