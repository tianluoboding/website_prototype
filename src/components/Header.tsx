import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    const navItems = [
        { label: 'Features', id: 'features' },
        { label: 'App', id: 'app' },
        { label: 'Robot', id: 'robot' },
        { label: 'Insurance', id: 'insurance' },
        { label: 'Support', id: 'support' },
    ]

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                        >
                            <img
                                src="/website_prototype/logo.jpg"
                                alt="WattUp Logo"
                                className="h-8 w-8 rounded-lg object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                }}
                            />
                            <span className="hidden text-2xl font-bold text-light-text">WattUp</span>
                            <span className="text-2xl font-bold text-light-text">WattUp</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-light-text hover:text-emerald-500 transition-colors font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('app')}
                                className="btn-nav"
                            >
                                Get the App
                            </button>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-light-text hover:text-emerald-500 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left px-3 py-2 text-light-text hover:text-emerald-500 transition-colors font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('app')}
                                className="block w-full text-left px-3 py-2 btn-primary mt-4"
                            >
                                Get the App
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

