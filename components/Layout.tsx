
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Dna, Menu, X, Instagram, Facebook, Youtube, Linkedin, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './UI';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine nav styling based on state
  // If menu is open, force transparent background so the overlay provides the color
  const navBackgroundClass = mobileMenuOpen 
    ? 'bg-transparent border-transparent py-6' 
    : isScrolled 
      ? 'bg-white/80 backdrop-blur-lg border-primary-navy/5 py-3 shadow-sm' 
      : 'bg-transparent border-transparent py-6';

  // Determine text/logo colors
  // If menu is open, force white/light colors for contrast against navy overlay
  const logoBgClass = mobileMenuOpen 
    ? 'bg-white text-primary-navy' 
    : isScrolled 
      ? 'bg-primary-navy text-white' 
      : 'bg-primary-teal text-white';

  const logoTextClass = mobileMenuOpen 
    ? 'text-white' 
    : isScrolled 
      ? 'text-primary-navy' 
      : 'text-primary-navy';
      
  const hamburgerClass = mobileMenuOpen
    ? 'text-white bg-white/10'
    : 'text-primary-navy bg-primary-navy/5';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${navBackgroundClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo Area */}
        <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate('/')}
        >
          
          <img 
    src="/images/logo.png" 
    alt="Dr. BioReset Logo" 
    className="h-12 w-auto transition-all duration-500 group-hover:scale-110"
  />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-primary-navy/5 shadow-sm">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `font-sans text-sm font-semibold tracking-wide transition-all relative hover:text-primary-teal ${
                isActive ? 'text-primary-teal' : 'text-primary-navy'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
           <Button variant="elite" size="sm" onClick={() => navigate('/quiz')} className="shadow-none hover:shadow-lg">
             Get Started
           </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg backdrop-blur-sm transition-colors ${hamburgerClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary-navy z-40 transition-transform duration-300 md:hidden flex flex-col pt-32 px-6 gap-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl font-heading font-bold border-b border-white/10 pb-4"
            >
              {link.label}
            </NavLink>
          ))}
          <Button variant="elite" className="w-full mt-4 text-lg" onClick={() => {
              setMobileMenuOpen(false);
              navigate('/quiz');
          }}>
            Take Reversal Quiz
          </Button>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-primary-navy pt-20 pb-10 border-t border-gray-100 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <img 
    src="/images/logo.png" 
    alt="Dr. BioReset Logo" 
    className="h-12 w-auto transition-all duration-500 group-hover:scale-110"
  />  
              </div>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              India’s leading data-driven metabolic reversal clinic. We don't guess with your health; we biohack it back to perfection.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary-navy/5 flex items-center justify-center hover:bg-secondary-energy hover:text-white transition-all cursor-pointer text-gray-500">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-primary-navy text-lg">Programs</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Discovery Program</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Starter BioReset</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Premium BioReset</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Reversal Protocol</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors font-bold text-secondary-energy">Anti-Aging Elite</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-primary-navy text-lg">Resources</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">BioReset Journal</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">FAQs</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-secondary-energy cursor-pointer transition-colors">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-primary-navy text-lg">Contact</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-secondary-energy rounded-full"></div>
                support@drbioreset.com
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-secondary-energy rounded-full"></div>
                WhatsApp Support
              </li>
              <li>
                <Button variant="outline" size="sm" className="mt-6 w-full border-primary-navy/10 text-primary-navy hover:bg-primary-navy hover:text-white hover:border-primary-navy">
                  Book Discovery Call
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Dr. BioReset by Dr. Harshal Giri. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-secondary-energy text-sm font-semibold cursor-pointer group bg-secondary-energy/10 px-4 py-2 rounded-full border border-secondary-energy/20 hover:bg-secondary-energy/20 transition-colors">
            Join India's Reversal Revolution <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </footer>
  );
};
