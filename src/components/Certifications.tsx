
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Link, Star, Trophy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "May 2024",
      credentialLink: "#",
      logo: "/placeholder.svg"
    },
    {
      title: "TCS - iON Career Edge - Young Professionals",
      issuer: "TCS",
      date: "May 2024",
      credentialLink: "#",
      logo: "/placeholder.svg"
    }
  ];

  const achievements = [
    {
      title: "Mentor - GirlScript Summer of Code",
      description: "Mentored participants and contributed to open-source projects, fostering growth and learning within the community.",
      icon: <Trophy className="h-8 w-8 text-amber-500" />
    },
    {
      title: "Reskill Inspirer",
      description: "Inspired and guided learners by promoting continuous learning and development within the technology domain.",
      icon: <Star className="h-8 w-8 text-blue-500" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-3">
              Accomplishments
            </span>
          </div>
          <h2 className="text-4xl font-bold relative">
            Certifications & Achievements
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
          </h2>
        </div>
        
        <Tabs defaultValue="certifications" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="certifications" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
                  <div className="relative">
                    <div className="absolute top-0 right-0 bg-blue-500/10 w-32 h-32 rounded-full -mt-12 -mr-12"></div>
                    <CardHeader className="pb-2 relative">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500/10 p-3 rounded-lg">
                          <Award className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <CardDescription>{cert.issuer}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center pt-4">
                      <Badge variant="outline" className="bg-slate-50">Issued {cert.date}</Badge>
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                          <Link className="h-4 w-4" />
                          Verify
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500/10 p-3 rounded-full">
                        {achievement.icon}
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                    <div className="mt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-700">Demonstrated leadership and mentorship</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-700">Enhanced community engagement</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certifications;
