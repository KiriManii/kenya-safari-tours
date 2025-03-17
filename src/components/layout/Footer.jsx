// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-brown text-beige">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Logo and About */}
          <div>
            <h3 className="text-xl font-safari mb-4">Eleanor's Safari Tours</h3>
            <p className="mb-4">Experience Kenya with a local expert. Unforgettable safari adventures in the heart of the Maasai Mara.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-safari mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-safari-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-safari-gold transition-colors">About Me</Link></li>
              <li><Link to="/tours" className="hover:text-safari-gold transition-colors">Safari Tours</Link></li>
              <li><Link to="/gallery" className="hover:text-safari-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-safari-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-safari mb-4">Get in Touch</h3>
            <p className="mb-2">Maasai Mara, Kenya</p>
            <p className="mb-2">Email: eleanor@safaritours.com</p>
            <p className="mb-4">Phone: +254 712 345 678</p>
            
            {/* Social Media Links (placeholder) */}
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-safari-gold" aria-label="Facebook">FB</a>
              <a href="#" className="text-xl hover:text-safari-gold" aria-label="Instagram">IG</a>
              <a href="#" className="text-xl hover:text-safari-gold" aria-label="Twitter">TW</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-beige border-opacity-20 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} Eleanor's Safari Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;