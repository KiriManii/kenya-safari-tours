// src/components/layout/Footer.jsx - Enhanced version
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-brown text-beige relative">
      {/* Safari silhouette decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-contain bg-repeat-x opacity-20" 
           style={{ backgroundImage: "url('/silhouette.png')" }} />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-safari mb-4">Eleanor's Safari Tours</h3>
            <p className="mb-4 text-beige/80">Experience Kenya with a local expert. Unforgettable safari adventures in the heart of the Maasai Mara.</p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="h-9 w-9 rounded-full bg-safari-gold/20 flex items-center justify-center text-safari-gold hover:bg-safari-gold hover:text-earth-brown transition-colors" aria-label="Facebook">FB</a>
              <a href="#" className="h-9 w-9 rounded-full bg-safari-gold/20 flex items-center justify-center text-safari-gold hover:bg-safari-gold hover:text-earth-brown transition-colors" aria-label="Instagram">IG</a>
              <a href="#" className="h-9 w-9 rounded-full bg-safari-gold/20 flex items-center justify-center text-safari-gold hover:bg-safari-gold hover:text-earth-brown transition-colors" aria-label="Twitter">TW</a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-safari mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-safari-gold transition-colors inline-block py-1">Home</Link></li>
              <li><Link to="/about" className="hover:text-safari-gold transition-colors inline-block py-1">About Me</Link></li>
              <li><Link to="/tours" className="hover:text-safari-gold transition-colors inline-block py-1">Safari Tours</Link></li>
              <li><Link to="/gallery" className="hover:text-safari-gold transition-colors inline-block py-1">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-safari-gold transition-colors inline-block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-safari mb-4">Get in Touch</h3>
            <address className="not-italic">
              <p className="mb-2 flex items-start">
                <span className="mr-2">📍</span>
                <span>Maasai Mara, Kenya</span>
              </p>
              <p className="mb-2 flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:eleanor@safaritours.com" className="hover:text-safari-gold transition-colors">eleanor@safaritours.com</a>
              </p>
              <p className="mb-4 flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+254712345678" className="hover:text-safari-gold transition-colors">+254 712 345 678</a>
              </p>
            </address>
            
            <Button to="/contact" variant="gold" size="small">
              Send a Message
            </Button>
          </div>
        </div>
        
        <div className="border-t border-beige/20 mt-8 pt-6 text-center">
          <p className="text-beige/70">
            &copy; {currentYear} Eleanor's Safari Tours. All rights reserved.
          </p>
          <p className="text-beige/50 text-sm mt-2">
            <a href="#" className="hover:text-safari-gold">Privacy Policy</a> | 
            <a href="#" className="hover:text-safari-gold ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;