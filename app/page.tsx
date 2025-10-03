import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, MapPin, Phone, ExternalLink, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="sticky top-12">
              <div className="mb-8">
                <div className="relative w-50 h-50 mx-auto lg:mx-0 mb-6">
                  <Image
                    src="/images/design-mode/channels4_profile.jpg"
                    alt="Hein Htet Zaw"
                    fill
                    className="rounded-full object-cover ring-2 ring-primary/20"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Hein Htet Zaw</h1>
              <p className="text-xl text-muted-foreground mb-6">Digital Innovation Developer</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Final-year Digital Innovative Technology student with strong skills in Python, cybersecurity, Data Science and
                project management. Passionate about AI, ethical hacking, coding and problem-solving.
              </p>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  ABOUT
                </a>
                <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                  EXPERIENCE
                </a>
                <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors">
                  EDUCATION
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  SKILLS
                </a>
              </nav>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+66 08-2526-6477</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>minehhz69@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangkok, Thailand</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/mine969" className="hover:text-primary transition-colors">
                    github.com/mine969
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://www.linkedin.com/in/mine969/" className="hover:text-primary transition-colors">
                    linkedin.com/in/mine969
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-16">
            {/* About Section */}
            <section id="about">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Currently pursuing my Bachelor's degree in Digital Innovative Technology at{" "}
                <span className="text-primary font-medium">Rangsit University</span> with a GPA of 3.83. I specialize in
                cybersecurity, Data Science, AI, Python development, and project management, with hands-on experience in data
                analysis and enterprise application development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My international experience spans across Thailand, Japan, and Myanmar, giving me a multicultural
                perspective and fluency in five languages. I've worked with diverse teams in tourism, mental health
                support, and healthcare technology sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently completing a 3-month internship at{" "}
                <span className="text-accent font-medium">Thonburi Bamrungmuang International Hospital</span>, where I'm developing
                enterprise Line Official applications with integrated dashboards for the Marketing Department.
              </p>
            </section>

            {/* Experience Section */}
            <section id="experience">
              <h2 className="text-2xl font-semibold text-foreground mb-8">Experience</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>2025</span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Marketing Intern • Thonburi Bamrungmuang Hospital
                    <ExternalLink className="w-4 h-4 inline ml-2" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Working with the Marketing Department team to develop enterprise Line Official applications with
                    integrated dashboards. Implementing modern web technologies to enhance patient engagement and
                    streamline marketing operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Line API</Badge>
                    <Badge variant="secondary">Dashboard Development</Badge>
                    <Badge variant="secondary">Enterprise Solutions</Badge>
                    <Badge variant="secondary">Healthcare Tech</Badge>
                  </div>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>2021</span>
                    <span>—</span>
                    <span>2023</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Shop Manager • Tokyo Soteria (NPO)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Collaborated with Japanese mental health support teams to manage shop operations. Led design
                    initiatives including shop layout, marketing campaigns, branding strategy, and logo design to
                    support the organization's mission.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Management</Badge>
                    <Badge variant="secondary">Branding</Badge>
                    <Badge variant="secondary">Marketing</Badge>
                    <Badge variant="secondary">Design</Badge>
                  </div>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>2016</span>
                    <span>—</span>
                    <span>2018</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Entry • Picturque Myanmar</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Worked closely with the tourism team to manage and organize travel data. Handled data entry
                    operations while gaining valuable experience in the tourism industry and data management practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Management</Badge>
                    <Badge variant="secondary">Tourism</Badge>
                    <Badge variant="secondary">Data Entry</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section id="education">
              <h2 className="text-2xl font-semibold text-foreground mb-8">Education</h2>
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Bachelor of Digital Innovative Technology
                        </h3>
                        <p className="text-primary font-medium">Rangsit University</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>2023 — 2026</div>
                        <div className="text-accent font-semibold">GPA: 3.83</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Specializing in digital innovation, cybersecurity fundamentals, and modern software development
                      practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Pearson HND IT Diploma</h3>
                        <p className="text-primary font-medium">Gusto International College</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>2016 — 2018</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Foundation in Information Technology with focus on programming, networking, and system
                      administration.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
              <h2 className="text-2xl font-semibold text-foreground mb-8">Skills & Expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground">Python Programming</span>
                        <span className="text-primary">Advanced</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground">Cybersecurity</span>
                        <span className="text-primary">Intermediate</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground">Data Science</span>
                        <span className="text-primary">Intermediate</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground">Networking</span>
                        <span className="text-primary">Intermediate</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-foreground">Myanmar</span>
                      <span className="text-accent">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">English</span>
                      <span className="text-accent">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Thai</span>
                      <span className="text-accent">Conversational</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Japanese</span>
                      <span className="text-accent">Conversational</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Chinese</span>
                      <span className="text-accent">Basic</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Leadership</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                    <Badge variant="outline">Critical Thinking</Badge>
                    <Badge variant="outline">Fast Learning</Badge>
                    <Badge variant="outline">Communication</Badge>
                    <Badge variant="outline">Teamwork</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center py-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4 text-balance">
                Let's build something amazing together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations in the
                tech space.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
