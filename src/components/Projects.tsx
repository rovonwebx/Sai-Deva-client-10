
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder, Code, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projects = [
    {
      title: "Planner.AI - Personalized Timetable Generator",
      description: [
        "Developed an AI-powered chatbot with NLP capabilities for real-time data retrieval and user interaction.",
        "Implemented features like reminders and task management, enhancing user experience and engagement."
      ],
      technologies: ["AI", "NLP", "Python"],
      githubLink: "#",
      featuredProject: true,
      screenshot: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
    },
    {
      title: "Note APP",
      description: [
        "Built a networking platform enabling students to connect with industry professionals for mentorship and career guidance.",
        "Designed a responsive frontend interface, optimizing user experience across various devices."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      githubLink: "#",
      featuredProject: true,
      screenshot: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)"
    },
    {
      title: "Weather Dashboard",
      description: [
        "Created an interactive weather application that displays current conditions and forecasts.",
        "Integrated with weather APIs to fetch real-time data and display it in an intuitive interface."
      ],
      technologies: ["JavaScript", "React", "API Integration"],
      githubLink: "#",
      featuredProject: false,
      screenshot: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)"
    },
    {
      title: "E-commerce Product Page",
      description: [
        "Designed and implemented a responsive product display page with filtering capabilities.",
        "Added cart functionality with real-time updates and persistence using local storage."
      ],
      technologies: ["React", "CSS", "JavaScript"],
      githubLink: "#",
      featuredProject: false,
      screenshot: "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-3">
              My Work
            </span>
          </div>
          <h2 className="text-4xl font-bold relative">
            Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
          </h2>
        </div>
        
        <Tabs defaultValue="featured" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="all">All Projects</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.filter(p => p.featuredProject).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="group border-none bg-transparent overflow-hidden h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-2">
        <div style={{ background: project.screenshot }} className="p-4 relative h-40">
          <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-full">
            <Folder className="h-6 w-6 text-white" />
          </div>
          <div className="absolute bottom-4 left-4">
            <CardTitle className="text-white text-xl font-bold drop-shadow-md">{project.title}</CardTitle>
          </div>
        </div>
        <CardContent className="space-y-4 pt-6">
          <ul className="list-disc pl-5 space-y-3">
            {project.description.map((desc: string, i: number) => (
              <li key={i} className="text-gray-600">{desc}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-3">
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i} variant="secondary" className="bg-slate-100 hover:bg-slate-200 text-slate-800">
                <Code className="mr-1 h-3 w-3" />
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="gap-2 hover:bg-primary/10 hover:text-primary transition-colors" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default Projects;
