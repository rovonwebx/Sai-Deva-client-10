import { Github, Linkedin, Mail, Heart, ExternalLink, Code, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-4 w-4" />, href: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/yourusername" },
    { name: "Email", icon: <Mail className="h-4 w-4" />, href: "mailto:your.email@example.com" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Profile Column */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <h2 className="text-2xl font-bold">Deva Saikiran</h2>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Computer Science Engineering student passionate about creating innovative solutions.
            </p>
            <div className="flex items-center space-x-2">
              <Coffee className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300">Open to work and collaboration opportunities</span>
            </div>
            <div className="pt-4 flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  aria-label={link.name}
                  className="bg-gray-800 hover:bg-purple-600 transition-colors p-2 rounded-full hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <h3 className="text-xl font-bold">Contact Me</h3>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </div>
            <p className="text-gray-300">
              Feel free to reach out for opportunities or to discuss technology and projects.
            </p>
            <Button 
              variant="outline" 
              className="mt-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <p>&copy; {currentYear} Deva Saikiran. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <span className="flex items-center">
              <p className="mr-2">Developed with</p>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <p className="ml-2">by <a href="https://rovonwebx.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Rovonwebx</a></p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
