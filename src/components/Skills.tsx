
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Github, Briefcase, GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillsData = {
    languages: ["C/C++", "Java", "Python", "JavaScript", "HTML/CSS"],
    webDevelopment: ["React.js", "Node.js", "JUnit", "Material-UI", "Spring", "SpringBoot", "Hibernate"],
    databases: ["SQL - PostgreSQL", "MySQL", "NoSQL - MongoDB"],
    cloud: ["Azure"],
    tools: ["Git", "GitHub", "IntelliJ", "Eclipse", "VS Code", "Vercel", "UNIX based MacOS"],
    courses: ["OOPS", "Operating Systems", "Data Structures and Algorithms", "Database Management Systems"],
    soft: [
      "Problem Solving", "Analytical Thinking", "Teamwork", "Collaboration", "Time management", 
      "Leadership", "Flexibility", "Adaptability", "Cross-functional interaction", 
      "Communication skills", "Quick learning ability", "Attention to detail"
    ]
  };

  const categoryIcons = {
    languages: <Code className="h-10 w-10 text-blue-500" />,
    webDevelopment: <Briefcase className="h-10 w-10 text-purple-500" />,
    databases: <Database className="h-10 w-10 text-green-500" />,
    cloud: <Cloud className="h-10 w-10 text-sky-500" />,
    tools: <Github className="h-10 w-10 text-gray-600" />,
    courses: <GraduationCap className="h-10 w-10 text-amber-500" />,
    soft: <User className="h-10 w-10 text-rose-500" />
  };

  const categoryTitles = {
    languages: "Programming Languages",
    webDevelopment: "Web Development",
    databases: "Database Technologies",
    cloud: "Cloud Technologies",
    tools: "Development Tools",
    courses: "Academic Courses",
    soft: "Soft Skills"
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-3">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl font-bold relative">
            Skills
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
          </h2>
        </div>
        
        <Tabs defaultValue="languages" className="w-full">
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 h-[1px] bg-gray-200 top-1/2 -z-10"></div>
            <TabsList className="mx-auto bg-white p-1 rounded-full border shadow-sm">
              <TabsTrigger value="languages" className="rounded-full">Languages</TabsTrigger>
              <TabsTrigger value="webDevelopment" className="rounded-full">Web Dev</TabsTrigger>
              <TabsTrigger value="databases" className="rounded-full">Databases</TabsTrigger>
              <TabsTrigger value="cloud" className="rounded-full">Cloud</TabsTrigger>
              <TabsTrigger value="tools" className="rounded-full">Tools</TabsTrigger>
              <TabsTrigger value="courses" className="rounded-full">Courses</TabsTrigger>
              <TabsTrigger value="soft" className="rounded-full">Soft Skills</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{categoryTitles[category as keyof typeof categoryTitles]}</h3>
                      <p className="text-gray-600">
                        {category === 'languages' && 'Programming languages I have experience with'}
                        {category === 'webDevelopment' && 'Frameworks and libraries I use for web development'}
                        {category === 'databases' && 'Database systems I have worked with'}
                        {category === 'cloud' && 'Cloud platforms I am familiar with'}
                        {category === 'tools' && 'Tools I use in my development workflow'}
                        {category === 'courses' && 'Academic courses relevant to my skills'}
                        {category === 'soft' && 'Interpersonal and professional skills'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-2 text-sm bg-slate-50 hover:bg-slate-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
