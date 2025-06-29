import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary text-glow">EliteStore</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your premium destination for quality products. We offer the finest selection with exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors hover:text-glow">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors text-primary-foreground font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EliteStore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:text-glow">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:text-glow">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:text-glow">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
