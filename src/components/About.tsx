import { ArrowRight, Briefcase, Calendar, GraduationCap, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const personalInfo = [
    { label: "Name", value: "Deva Saikiran" },
    { label: "Email", value: "devasaikiran@example.com", icon: <Mail className="h-4 w-4 text-primary" /> },
    { label: "Location", value: "Hyderabad, India", icon: <MapPin className="h-4 w-4 text-primary" /> },
    { label: "Study", value: "CMR Institute of Technology", icon: <GraduationCap className="h-4 w-4 text-primary" /> },
    { label: "Degree", value: "Bachelor of Technology (AIML)", icon: <Briefcase className="h-4 w-4 text-primary" /> },
    { label: "Started", value: "October 2023", icon: <Calendar className="h-4 w-4 text-primary" /> }
  ];

  const handleDownloadCV = () => {
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
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-primary/5 to-purple-400/5 rounded-3xl blur-3xl opacity-70 -top-10 -left-10"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="mb-8">
                  <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-3">
                    About Me
                  </span>
                  <h2 className="text-3xl font-bold mb-6 relative">
                    Personal Details
                    <span className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I am a passionate Computer Science Engineering student specializing in Artificial Intelligence 
                    and Machine Learning. My journey in technology is driven by a desire to create innovative solutions 
                    that make a positive impact.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With a strong foundation in programming languages like Python, Java, and JavaScript, 
                    I enjoy tackling complex problems and turning ideas into functional applications.
                    My experience includes developing AI-powered tools and web applications.
                  </p>
                </div>
                
                <Table className="w-full">
                  <TableBody>
                    {personalInfo.map((info, index) => (
                      <TableRow key={index} className="border-b border-gray-100">
                        <TableCell className="py-3 pl-0 font-medium text-gray-700">{info.label}</TableCell>
                        <TableCell className="py-3 pr-0">
                          <div className="flex items-center gap-2 justify-end">
                            {info.icon}
                            <span>{info.value}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-8">
                  <Button 
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className={`group transition-all duration-300 ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''} hover:shadow-md hover:shadow-primary/20`}
                  >
                    {isDownloading ? (
                      <>
                        Downloading... <ArrowRight className="ml-2 h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Download CV <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -z-10 bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl max-w-md mx-auto aspect-[3/4]">
                <Avatar className="h-full w-full rounded-none">
                  <AvatarImage 
                    src="Screenshot 2025-05-01 at 12.47.23 AM.png" 
                    alt="Deva Saikiran" 
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600">
                    <div className="text-7xl font-bold text-white">DS</div>
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                  <span className="font-medium text-gray-900">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
