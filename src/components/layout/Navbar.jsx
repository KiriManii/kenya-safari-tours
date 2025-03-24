import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navbar links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-earth-brown text-beige py-2 shadow-lg' 
        : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-safari flex items-center">
          <span className="hidden sm:inline">Eleanor's</span> Safari Tours
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-safari-gold transition-colors ${
                location.pathname === link.path 
                  ? 'text-safari-gold' 
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            to="/contact" 
            variant="gold" 
            size="small"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation - Animated slide-down */}
      <div 
        className={`md:hidden bg-earth-brown text-beige overflow-hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-60 opacity-100 shadow-lg' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-safari-gold transition-colors ${
                location.pathname === link.path 
                  ? 'text-safari-gold' 
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            to="/contact" 
            variant="gold" 
            size="small"
            fullWidth
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;