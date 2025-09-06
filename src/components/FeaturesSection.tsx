import React from 'react'
import { motion } from 'framer-motion'
import { 
  Route, 
  Shield, 
  Heart, 
  MapPin, 
  Battery, 
  Lock 
} from 'lucide-react'
import Section from './Section'
import FeatureCard from './FeatureCard'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Route size={40} />,
      title: 'Smart Route',
      description: 'AI-powered navigation that finds the safest, most efficient path to your destination.',
      learnMore: 'Our advanced algorithm analyzes real-time traffic, weather conditions, and road safety data to provide you with the optimal route. It considers factors like bike lanes, low-traffic areas, and accident-prone zones to ensure your journey is both safe and efficient.'
    },
    {
      icon: <Shield size={40} />,
      title: 'AI Support',
      description: '24/7 intelligent assistance that learns your riding patterns and provides proactive safety alerts.',
      learnMore: 'Our AI system continuously monitors your riding behavior and environmental conditions. It provides personalized safety recommendations, alerts you to potential hazards, and can even contact emergency services if needed.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Insurance',
      description: 'Comprehensive coverage with instant claims processing and roadside assistance.',
      learnMore: 'Our insurance covers theft, damage, and liability with zero-deductible options. Claims are processed instantly through our app, and we provide 24/7 roadside assistance with GPS tracking.'
    },
    {
      icon: <Lock size={40} />,
      title: 'Anti-theft',
      description: 'Advanced security features including GPS tracking, motion alerts, and remote locking.',
      learnMore: 'Your bike is protected with multi-layer security including GPS tracking, motion sensors, and remote locking capabilities. Receive instant alerts if your bike is moved without authorization.'
    },
    {
      icon: <Battery size={40} />,
      title: 'Battery Health',
      description: 'Smart battery monitoring with predictive maintenance and optimal charging recommendations.',
      learnMore: 'Our system continuously monitors your battery health and provides personalized charging recommendations. It predicts when maintenance is needed and optimizes charging cycles to extend battery life.'
    },
    {
      icon: <MapPin size={40} />,
      title: 'Charging Map',
      description: 'Find nearby charging stations with real-time availability and reservation options.',
      learnMore: 'Access our comprehensive network of charging stations with real-time availability updates. Reserve charging slots in advance and get turn-by-turn directions to the nearest available station.'
    }
  ]

  return (
    <Section id="features" className="bg-gradient-to-b from-emerald-50 to-light-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-8">
            Everything you need for a <span className="text-emerald-500">smarter ride</span>
          </h2>
          <p className="text-2xl text-light-text-secondary max-w-4xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with intuitive design to enhance every aspect of your cycling experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default FeaturesSection