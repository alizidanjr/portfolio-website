"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
    {
        title: "Flappy Bird Clone",
        description: "Developed two versions (Unity/C# and OpenGL), implementing mechanics, collision detection, and scoring.",
        tags: ["Unity", "C#", "OpenGL", "Game Dev"],
        github: "#",
        demo: "#",
    },
    {
        title: "Book Inventory System",
        description: "Java/JavaFX project with user interface design and core functionality implementation.",
        tags: ["Java", "JavaFX", "OOP", "UI/UX"],
        github: "#",
        demo: "#",
    },
    {
        title: "SWVL Database System",
        description: "Designed and implemented a MySQL database system from concept to deployment.",
        tags: ["MySQL", "Database Design", "SQL"],
        github: "#",
        demo: "#",
    },
    {
        title: "Plane Reservation System",
        description: "Developed in C, focusing on system design and functionality.",
        tags: ["C", "System Design"],
        github: "#",
        demo: "#",
    },
    {
        title: "AI Agent Experiments",
        description: "Built various AI agents using modern frameworks for experience and learning.",
        tags: ["AI", "Agents", "Python", "LLMs"],
        github: "#",
        demo: "#",
    },
    {
        title: "Portfolio Websites",
        description: "Built functional portfolios in ~1 week using HTML, CSS, JS and Firebase backend.",
        tags: ["HTML/CSS", "JavaScript", "Firebase"],
        github: "#",
        demo: "#",
    },
]

export function Projects() {
    return (
        <section id="projects" className="w-full py-20">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={project.github} target="_blank">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </Button>
                                <Button size="sm" asChild>
                                    <Link href={project.demo} target="_blank">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
