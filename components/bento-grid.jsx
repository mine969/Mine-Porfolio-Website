"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

function BentoCard({ className, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors overflow-hidden relative group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  )
}

function SkillBar({ name, level }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-primary h-2 rounded-full"
        />
      </div>
    </div>
  )
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
      {/* Education - Large Block */}
      <BentoCard className="md:col-span-2 md:row-span-2">
        <h3 className="text-2xl font-bold mb-2 text-primary">Education</h3>
        <div className="space-y-6 mt-4">
          <div>
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold">Bachelor of Digital Innovative Technology</h4>
              <span className="text-sm text-muted-foreground">2023 — 2026</span>
            </div>
            <p className="text-accent font-medium">Rangsit University</p>
            <p className="text-muted-foreground mt-2 text-sm">GPA: 3.83</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Specializing in digital innovation, cybersecurity, DevOps, and modern software development.
            </p>
          </div>
          <div className="border-t border-border/50 pt-4">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold">Pearson HND IT Diploma</h4>
              <span className="text-sm text-muted-foreground">2016 — 2018</span>
            </div>
            <p className="text-accent font-medium">Gusto International College</p>
          </div>
        </div>
      </BentoCard>

      {/* Languages */}
      <BentoCard delay={0.1} className="md:row-span-2">
        <h3 className="text-lg font-semibold mb-4">Languages</h3>
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <span>Myanmar</span>
                <Badge variant="outline">Native</Badge>
            </div>
            <div className="flex justify-between items-center">
                <span>English</span>
                <Badge variant="outline">Fluent</Badge>
            </div>
            <div className="flex justify-between items-center">
                <span>Thai</span>
                <Badge variant="outline">Conversational</Badge>
            </div>
            <div className="flex justify-between items-center">
                <span>Japanese</span>
                <Badge variant="outline">Conversational</Badge>
            </div>
             <div className="flex justify-between items-center">
                <span>Chinese</span>
                <Badge variant="outline">Basic</Badge>
            </div>
        </div>
      </BentoCard>

      {/* Technical Skills - Expanded */}
      <BentoCard delay={0.2} className="md:col-span-2">
        <h3 className="text-lg font-semibold mb-4 text-primary">Technical Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            <SkillBar name="Python Programming" level={90} />
            <SkillBar name="Cybersecurity" level={75} />
            <SkillBar name="Data Science" level={75} />
            <SkillBar name="Linux Admin" level={70} />
            <SkillBar name="Networking" level={70} />
            <SkillBar name="DevOps" level={40} />
            <SkillBar name="Cloud Computing" level={40} />
        </div>
      </BentoCard>

      {/* Soft Skills */}
      <BentoCard delay={0.3}>
        <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Leadership</Badge>
            <Badge variant="secondary">Project Management</Badge>
            <Badge variant="secondary">Problem Solving</Badge>
            <Badge variant="secondary">Critical Thinking</Badge>
            <Badge variant="secondary">Fast Learning</Badge>
            <Badge variant="secondary">Communication</Badge>
            <Badge variant="secondary">Teamwork</Badge>
        </div>
      </BentoCard>

      {/* Experience - Latest */}
      <BentoCard delay={0.4} className="md:col-span-3">
        <h3 className="text-lg font-semibold mb-2 text-primary">Latest Experience</h3>
        <div className="grid md:grid-cols-3 gap-6">
            <div>
                <h4 className="text-xl font-bold">Marketing LINE OA Intern</h4>
                <p className="text-muted-foreground text-sm">Thonburi Bamrungmuang Hospital • 2025</p>
                <p className="mt-2 text-sm text-muted-foreground">
                    Developing enterprise Line Official applications with integrated dashboards.
                </p>
            </div>
            <div>
                <h4 className="text-xl font-bold">Shop Manager</h4>
                <p className="text-muted-foreground text-sm">Tokyo Soteria (NPO) • 2021-2023</p>
                <p className="mt-2 text-sm text-muted-foreground">
                    Managed shop operations, marketing campaigns, and branding strategy in Tokyo.
                </p>
            </div>
            <div>
                <h4 className="text-xl font-bold">Data Entry</h4>
                <p className="text-muted-foreground text-sm">Picturque Myanmar • 2016-2018</p>
                <p className="mt-2 text-sm text-muted-foreground">
                    Managed and organized travel data for tourism operations.
                </p>
            </div>
        </div>
      </BentoCard>
    </div>
  )
}
