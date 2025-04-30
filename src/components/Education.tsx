import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Building, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institution: "CMR Institute of Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering (AIML)",
      location: "Hyderabad, India",
      period: "10/2023 – Present",
      gpa: "CGPA: 8.21",
      icon: <Building className="h-10 w-10 text-blue-500" />,
      color: "blue"
    },
    {
      institution: "Govt. polytechnic college-KTDM",
      degree: "Diploma",
      location: "Mancherial, India",
      period: "07/2020 – 07/2022",
      gpa: "Percentage: 8.1",
      icon: <BookOpen className="h-10 w-10 text-purple-500" />,
      color: "purple"
    },
    {
      institution: "Montessori High School",
      degree: "Secondary Education",
      location: "Mandemarri, India",
      period: "06/2019",
      gpa: "CGPA: 8.0",
      icon: <Award className="h-10 w-10 text-green-500" />,
      color: "green"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent transform -translate-x-1/2"></div>
            <div className="inline-block relative z-10">
              <span className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full px-4 py-2 text-sm font-medium mb-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                Academic Journey
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold relative inline-block pb-3">
            Education
            <span className="absolute bottom-0 left-0 right-0 mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`
                relative overflow-hidden group
                border-2 border-transparent
                hover:border-${edu.color}-500/50
                hover:shadow-lg
                transition-all duration-300
              `}>
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none"></div>
                
                <div className="absolute -inset-2 bg-gradient-to-br from-transparent via-${edu.color}-500/10 to-transparent pointer-events-none"></div>
                
                <div className="absolute -top-16 -right-16 rounded-full bg-gradient-to-br from-${edu.color}-100 to-${edu.color}-50 w-64 h-64 transition-transform group-hover:scale-150"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {edu.icon}
                    </div>
                    <div>
                      <CardTitle className="font-bold text-xl">{edu.institution}</CardTitle>
                      <CardDescription className="text-md font-medium">{edu.degree}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="mr-2 h-4 w-4 text-${edu.color}-500" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-2 h-4 w-4 text-${edu.color}-500" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold inline-block bg-${edu.color}-50 text-${edu.color}-600 px-3 py-1 rounded-full">
                      {edu.gpa}
                    </p>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-500 hover:text-${edu.color}-500 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute left-1/2 top-full mt-4 w-0.5 h-24 bg-gradient-to-b from-${edu.color}-500 to-transparent transform -translate-x-1/2"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
