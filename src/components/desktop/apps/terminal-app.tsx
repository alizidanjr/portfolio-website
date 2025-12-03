"use client"

import React, { useState, useRef, useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

interface Command {
    input: string
    output: React.ReactNode
}

export function TerminalApp() {
    const [history, setHistory] = useState<Command[]>([
        { input: '', output: 'Welcome to AliOS v1.0.0\nType "help" to see available commands.' }
    ])
    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
        inputRef.current?.focus()
    }, [history])

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase()
        let output: React.ReactNode = ''

        switch (trimmed) {
            case 'help':
                output = (
                    <div className="space-y-1">
                        <p>Available commands:</p>
                        <p className="pl-4 text-green-400">about    - Display information about me</p>
                        <p className="pl-4 text-green-400">projects - List my projects</p>
                        <p className="pl-4 text-green-400">contact  - Show contact info</p>
                        <p className="pl-4 text-green-400">clear    - Clear the terminal</p>
                        <p className="pl-4 text-green-400">whoami   - Display current user</p>
                    </div>
                )
                break
            case 'about':
                output = "Ali Hassan | CS Graduate 2025\nPassionate about AI, Web Dev, and Data Analysis.\nFounder of 'The Real You Is Offline'."
                break
            case 'projects':
                output = "Check out the 'Projects Explorer' icon on the desktop!\nKey Projects: Flappy Bird Clone, Book Inventory, SWVL DB, AI Agents."
                break
            case 'contact':
                output = "Email: alihassancut@gmail.com\nPhone: +20 106 550 3400\nLinkedIn: linkedin.com/in/alizidanjr"
                break
            case 'whoami':
                output = "ali_hassan@portfolio:~$ admin"
                break
            case 'clear':
                setHistory([])
                return
            case '':
                output = ''
                break
            default:
                output = `Command not found: ${trimmed}`
        }

        setHistory(prev => [...prev, { input: cmd, output }])
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input)
            setInput('')
        }
    }

    return (
        <div className="h-full bg-black text-green-500 font-mono text-sm p-4" onClick={() => inputRef.current?.focus()}>
            <ScrollArea className="h-full w-full" viewportRef={scrollRef}>
                <div className="space-y-2">
                    {history.map((entry, i) => (
                        <div key={i} className="space-y-1">
                            {entry.input && (
                                <div className="flex items-center">
                                    <span className="text-blue-400 mr-2">➜</span>
                                    <span className="text-yellow-400 mr-2">~</span>
                                    <span>{entry.input}</span>
                                </div>
                            )}
                            <div className="whitespace-pre-wrap text-foreground/90">{entry.output}</div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center mt-2">
                    <span className="text-blue-400 mr-2">➜</span>
                    <span className="text-yellow-400 mr-2">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none border-none text-foreground"
                        autoFocus
                    />
                </div>
            </ScrollArea>
        </div>
    )
}
