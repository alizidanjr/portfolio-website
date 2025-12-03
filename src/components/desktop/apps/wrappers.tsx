"use client"

import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export function ProjectsApp() {
    return (
        <div className="h-full bg-background p-4 overflow-auto">
            <Projects />
        </div>
    )
}

export function AboutApp() {
    return (
        <div className="h-full bg-background p-6 overflow-auto">
            <div className="prose dark:prose-invert max-w-none space-y-8">
                <section>
                    <h1 className="text-3xl font-bold mb-2">Ali Hassan</h1>
                    <p className="text-xl text-muted-foreground">Computer Science Graduate & Web Developer</p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Recent Computer Science graduate with strong experience in software and web development, data analysis, and AI-driven solutions.
                        Skilled in leveraging modern development tools such as Cursor IDE and AI agent frameworks to build innovative applications.
                        Proven ability to deliver high-quality projects independently and collaboratively.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Experience</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg">Founder</h3>
                            <p className="text-muted-foreground">"The Real You Is Offline" (Canada)</p>
                            <p className="text-sm">Platform for creators and artists to meet and showcase work.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Data Analyst Intern</h3>
                            <p className="text-muted-foreground">Khatib & Alami | 2 months</p>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Assisted in data collection, cleaning, and GIS analysis.</li>
                                <li>Developed data visualization dashboards and automation scripts improving efficiency by 15%.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Freelance Web Developer</h3>
                            <p className="text-sm mt-2">Built functional websites with backend integration using Firebase.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Creative Producer</h3>
                            <p className="text-muted-foreground">MSFTS & Maddi Town Records</p>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Collaborated with artists and producers on content creation.</li>
                                <li>Managed production timelines, delivering 3 albums under tight deadlines.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
                    <div>
                        <h3 className="font-bold text-lg">Bachelor of Computer Science</h3>
                        <p className="text-muted-foreground">Arab Academy for Science, Technology & Maritime Transport</p>
                        <p className="text-sm">Dual Degree with University of Northampton | Graduated 2025 | GPA 3.1</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
                    <Skills />
                </section>
            </div>
        </div>
    )
}

export function ContactApp() {
    return (
        <div className="h-full bg-background p-4 overflow-auto flex items-center justify-center">
            <Contact />
        </div>
    )
}
