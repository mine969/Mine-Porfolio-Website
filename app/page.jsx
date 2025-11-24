import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise LINE OA Dashboard",
      description: "A comprehensive dashboard for managing Line Official Account interactions, patient data, and marketing analytics for Thonburi Bamrungmuang Hospital.",
      tags: ["Next.js", "Line API", "Tailwind CSS", "Recharts"],

      github: "#"
    },
    {
      title: "Tokyo Soteria Shop Management",
      description: "Digital solutions for shop operations, including inventory management and branding assets for a non-profit organization in Tokyo.",
      tags: ["Management", "Branding", "Design"],

      github: "#"
    },
     {
      title: "Travel Data Management System",
      description: "Internal tool for organizing and managing travel data, streamlining operations for a tourism company.",
      tags: ["Data Entry", "Management", "Optimization"],

      github: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="container mx-auto px-4 space-y-24 pb-24">
        <Hero />

        <section id="about" className="scroll-mt-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a final-year Digital Innovative Technology student at <span className="text-primary font-medium">Rangsit University</span> with a passion for building secure, scalable, and user-friendly applications. 
                    My journey spans across Thailand, Japan, and Myanmar, giving me a unique multicultural perspective that I bring to every project.
                </p>
            </div>
        </section>

        <section id="experience" className="scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Experience & Skills</h2>
            <BentoGrid />
        </section>

        <section id="projects" className="scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-12 bg-accent/5 rounded-3xl border border-border/50">
            <div className="text-center max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to collaborate?</h2>
                <p className="text-muted-foreground mb-8">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a 
                    href="mailto:minehhz69@gmail.com" 
                    className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                    Say Hello
                </a>
            </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Hein Htet Zaw. Built with Next.js, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  )
}
