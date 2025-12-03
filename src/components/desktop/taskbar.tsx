"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { useDesktop, AppId } from './desktop-context'
import { cn } from '@/lib/utils'
import { Monitor, Terminal, Folder, User, Mail, Settings } from 'lucide-react'

export function Taskbar() {
    const { windows, activeWindowId, openWindow, minimizeWindow, focusWindow } = useDesktop()
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const handleTabClick = (id: AppId) => {
        const window = windows[id]
        if (window.isOpen && !window.isMinimized && activeWindowId === id) {
            minimizeWindow(id)
        } else {
            if (!window.isOpen) {
                openWindow(id)
            } else {
                focusWindow(id)
            }
        }
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-zinc-900/80 backdrop-blur-md border-t border-white/10 flex items-center px-2 z-50 justify-between shadow-2xl">
            <div className="flex items-center space-x-2 shrink-0">
                <Button variant="ghost" size="sm" className="h-9 gap-2 font-bold text-base hover:bg-white/10 px-2 md:px-4">
                    <Monitor className="h-5 w-5 text-teal-400" />
                    <span className="hidden md:inline">Start</span>
                </Button>
                <div className="h-6 w-px bg-white/10 mx-2" />
            </div>

            {/* Window Tabs */}
            <div className="flex items-center space-x-1 flex-1 overflow-x-auto no-scrollbar mask-linear-fade">
                {Object.values(windows).filter(w => w.isOpen).map((window) => (
                    <Button
                        key={window.id}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleTabClick(window.id)}
                        className={cn(
                            "h-9 px-3 min-w-[100px] md:min-w-[120px] justify-start transition-all border border-transparent shrink-0",
                            activeWindowId === window.id && !window.isMinimized
                                ? "bg-white/10 border-white/10 shadow-inner"
                                : "hover:bg-white/5",
                            window.isMinimized && "opacity-60"
                        )}
                    >
                        {getIcon(window.id)}
                        <span className="ml-2 truncate max-w-[80px]">{window.title}</span>
                    </Button>
                ))}
            </div>

            {/* Clock */}
            <div className="px-4 text-sm font-medium tabular-nums">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
    )
}

function getIcon(id: AppId) {
    switch (id) {
        case 'terminal': return <Terminal className="h-4 w-4" />
        case 'projects': return <Folder className="h-4 w-4" />
        case 'about': return <User className="h-4 w-4" />
        case 'contact': return <Mail className="h-4 w-4" />
        case 'settings': return <Settings className="h-4 w-4" />
    }
}
