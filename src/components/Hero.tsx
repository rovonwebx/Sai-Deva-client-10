import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "Sai Kiran Deva Resume.pdf"; // Make sure to place your resume.pdf in the public folder
    link.download = "Deva_Saikiran_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative">
              <div className="absolute -left-3 -top-3 w-20 h-20 rounded-lg bg-primary/10 -z-10"></div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Deva Saikiran</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Computer Science Engineering Student
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Passionate about coding and developing innovative software solutions. 
              Currently pursuing a Bachelor of Technology in Computer Science and Engineering
              with a focus on Artificial Intelligence and Machine Learning.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className={`group transition-all duration-300 ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''} hover:shadow-md hover:shadow-primary/20`}
              >
                {isDownloading ? (
                  <>
                    Downloading... <Download className="ml-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Download Resume <Download className="ml-2 h-4 w-4 group-hover:translate-y-[1px] transition-transform" />
                  </>
                )}
              </Button>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-primary group-hover:opacity-100 opacity-0 transition-opacity duration-200">
                    GitHub
                  </span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sai-kiran-deva-258b5b299/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-primary group-hover:opacity-100 opacity-0 transition-opacity duration-200">
                    LinkedIn
                  </span>
                </a>
                <a 
                  href="mailto:saideva701@gmail.com" 
                  className="group relative"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-primary group-hover:opacity-100 opacity-0 transition-opacity duration-200">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-tr from-primary/20 to-purple-400/20 rounded-full blur-3xl opacity-30"></div>
              <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                <Avatar className="h-full w-full">
                  <AvatarImage 
                    src="Screenshot 2025-05-01 at 12.45.38 AM.png" 
                    alt="Deva Saikiran" 
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-5xl font-bold text-white">
                    DS
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-70"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
