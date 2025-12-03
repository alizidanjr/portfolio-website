"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type AppId = 'terminal' | 'projects' | 'about' | 'contact' | 'settings'

interface WindowState {
    id: AppId
    title: string
    isOpen: boolean
    isMinimized: boolean
    zIndex: number
}

interface DesktopContextType {
    windows: Record<AppId, WindowState>
    activeWindowId: AppId | null
    openWindow: (id: AppId) => void
    closeWindow: (id: AppId) => void
    minimizeWindow: (id: AppId) => void
    focusWindow: (id: AppId) => void
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined)

const initialWindows: Record<AppId, WindowState> = {
    terminal: { id: 'terminal', title: 'Terminal', isOpen: true, isMinimized: false, zIndex: 1 },
    projects: { id: 'projects', title: 'Projects Explorer', isOpen: false, isMinimized: false, zIndex: 0 },
    about: { id: 'about', title: 'about_me.txt - Notepad', isOpen: false, isMinimized: false, zIndex: 0 },
    contact: { id: 'contact', title: 'Mail', isOpen: false, isMinimized: false, zIndex: 0 },
    settings: { id: 'settings', title: 'Settings', isOpen: false, isMinimized: false, zIndex: 0 },
}

export function DesktopProvider({ children }: { children: ReactNode }) {
    const [windows, setWindows] = useState<Record<AppId, WindowState>>(initialWindows)
    const [activeWindowId, setActiveWindowId] = useState<AppId | null>('terminal')
    const [maxZIndex, setMaxZIndex] = useState(10)

    const focusWindow = (id: AppId) => {
        setActiveWindowId(id)
        setMaxZIndex(prev => prev + 1)
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], zIndex: maxZIndex + 1, isMinimized: false }
        }))
    }

    const openWindow = (id: AppId) => {
        // Atomic update to ensure isOpen and zIndex are set together
        setActiveWindowId(id)
        setMaxZIndex(prev => prev + 1)
        setWindows(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                isOpen: true,
                isMinimized: false,
                zIndex: maxZIndex + 1
            }
        }))
    }

    const closeWindow = (id: AppId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false }
        }))
        if (activeWindowId === id) {
            setActiveWindowId(null)
        }
    }

    const minimizeWindow = (id: AppId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isMinimized: true }
        }))
        if (activeWindowId === id) {
            setActiveWindowId(null)
        }
    }

    return (
        <DesktopContext.Provider value={{ windows, activeWindowId, openWindow, closeWindow, minimizeWindow, focusWindow }}>
            {children}
        </DesktopContext.Provider>
    )
}

export function useDesktop() {
    const context = useContext(DesktopContext)
    if (context === undefined) {
        throw new Error('useDesktop must be used within a DesktopProvider')
    }
    return context
}
