import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface NavbarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'STACK', href: '#skills' },
    { name: 'CAREER', href: '#experience' },
    { name: 'WORKS', href: '#projects' },
    { name: 'CONNECT', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-[padding,background-color,backdrop-filter] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled 
          ? 'py-4 glass-morphism border-b border-slate-200/50 dark:border-white/5 shadow-lg' 
          : 'py-10 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center">
             <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-full" />
          </div>
          <span className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-display`}>FIKRI.DEV</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
                isDarkMode ? 'text-slate-300 hover:text-primary-400' : 'text-slate-700 hover:text-primary-600'
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} className={isDarkMode ? 'text-white' : 'text-slate-900'}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} className={isDarkMode ? 'text-white' : 'text-slate-900'}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
