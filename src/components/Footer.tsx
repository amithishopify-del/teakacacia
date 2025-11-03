import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import logo from "@/assets/teakacacia-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "All Products", href: "#" },
      { label: "New Arrivals", href: "#" },
      { label: "Best Sellers", href: "#" },
      { label: "Sale", href: "#" },
    ],
    about: [
      { label: "Our Story", href: "#" },
      { label: "Craftsmanship", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
    support: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Care Guide", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Trade Program", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Teakacacia - Design Your Dreams" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting timeless furniture from premium teak and acacia wood. Where modern design meets natural elegance.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-medium mb-3">Stay Connected</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-smooth">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-medium mb-4 heading-font">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 heading-font">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 heading-font">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Teakacacia. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
