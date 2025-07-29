import { useState } from "react";
import { Button } from "@/components/ui/button";
import churchLogo from "@/assets/church-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={churchLogo} alt="Church Logo" className="h-10 w-10" />
            <h1 className="font-playfair text-xl md:text-2xl font-bold text-primary">
              Nabii Powerful CC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#ministry" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Ministry
            </a>
            <a 
              href="#community" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Community
            </a>
            <a 
              href="#sermons" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Sermons
            </a>
            <a 
              href="#videos" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Videos
            </a>
            <a 
              href="#events" 
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Events
            </a>
            <Button variant="divine" className="font-inter">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#ministry" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Ministry
              </a>
              <a 
                href="#community" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a 
                href="#sermons" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Sermons
              </a>
              <a 
                href="#videos" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </a>
              <a 
                href="#events" 
                className="font-inter text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <Button 
                variant="divine" 
                className="font-inter mt-4 mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;