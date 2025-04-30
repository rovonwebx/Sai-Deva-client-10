import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">Deva Saikiran</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
          <a href="#education" className="text-sm font-medium hover:text-primary">Education</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary">Projects</a>
          <a href="#skills" className="text-sm font-medium hover:text-primary">Skills</a>
          <a 
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=saideva701@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
          >
            Contact Me
          </a>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden py-3 px-4">
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-sm font-medium py-2 hover:text-primary" onClick={toggleMenu}>About</a>
              <a href="#education" className="text-sm font-medium py-2 hover:text-primary" onClick={toggleMenu}>Education</a>
              <a href="#projects" className="text-sm font-medium py-2 hover:text-primary" onClick={toggleMenu}>Projects</a>
              <a href="#skills" className="text-sm font-medium py-2 hover:text-primary" onClick={toggleMenu}>Skills</a>
              <a 
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=saideva701@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 mt-2"
                onClick={toggleMenu}
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
