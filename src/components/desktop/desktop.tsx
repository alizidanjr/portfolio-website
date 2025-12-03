"use client"

import React from 'react'
import { DesktopProvider } from './desktop-context'
import { Taskbar } from './taskbar'
import { DesktopIcon } from './desktop-icon'
import { WindowFrame } from './window-frame'
import { TerminalApp } from './apps/terminal-app'
import { ProjectsApp, AboutApp, ContactApp } from './apps/wrappers'

export function Desktop() {
    return (
        <DesktopProvider>
            <div className="fixed inset-0 overflow-hidden bg-zinc-950 text-zinc-50 selection:bg-teal-500/30">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f615,transparent)]" />

                {/* Desktop Icons Area */}
                <div className="relative z-10 p-4 grid grid-cols-3 md:grid-flow-col md:grid-rows-[repeat(auto-fill,100px)] gap-4 w-full md:w-fit h-fit md:h-[calc(100vh-48px)] justify-items-center md:justify-items-start">
                    <DesktopIcon id="terminal" label="Terminal" />
                    <DesktopIcon id="projects" label="Projects" />
                    <DesktopIcon id="about" label="About Me" />
                    <DesktopIcon id="contact" label="Contact" />
                    <DesktopIcon id="settings" label="Settings" />
                </div>

                {/* Windows */}
                <WindowFrame id="terminal" initialPosition={{ x: 100, y: 50 }}>
                    <TerminalApp />
                </WindowFrame>
                <WindowFrame id="projects" initialPosition={{ x: 150, y: 80 }}>
                    <ProjectsApp />
                </WindowFrame>
                <WindowFrame id="about" initialPosition={{ x: 200, y: 110 }}>
                    <AboutApp />
                </WindowFrame>
                <WindowFrame id="contact" initialPosition={{ x: 250, y: 140 }}>
                    <ContactApp />
                </WindowFrame>
                <WindowFrame id="settings" initialPosition={{ x: 300, y: 170 }}>
                    <div className="p-4 flex items-center justify-center h-full text-muted-foreground">
                        Settings coming soon...
                    </div>
                </WindowFrame>

                <Taskbar />
            </div>
        </DesktopProvider>
    )
}
