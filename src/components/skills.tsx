"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = {
    Languages: ["C", "C++", "C#", "Python", "Java (OOP)", "JavaScript"],
    Web: ["HTML", "CSS", "React", "Next.js", "TailwindCSS", "SQL", "Firebase"],
    "AI & Tools": ["Cursor IDE", "AI Agents", "Automation", "Git", "Unity", "OpenGL"],
    "Soft Skills": ["Project Management", "Problem Solving", "Communication", "Adaptability"],
}

export function Skills() {
    return (
        <section id="skills" className="w-full py-20">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <h3 className="text-xl font-semibold">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {items.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
