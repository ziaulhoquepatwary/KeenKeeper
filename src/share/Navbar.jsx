"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import { BarChart3, Clock, Home, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', icon: <Home size={20} />, href: '/' },
        { name: 'Timeline', icon: <Clock size={20} />, href: '/timeline' },
        { name: 'Stats', icon: <BarChart3 size={20} />, href: '/stats' },
    ];


    return (
        <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link href="/" className="flex-shrink-0 flex items-center group">
                        <h1 className="text-2xl font-bold tracking-tight">
                            <span className="text-white">Keen</span>
                            <span className="text-[#4ade80]">Keeper</span>
                        </h1>
                    </Link>

                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${isActive
                                        ? 'bg-[#2d4f40] text-white border border-[#3e6b57]'
                                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black ${isOpen ? 'max-h-64 border-t border-gray-800' : 'max-h-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                                    ? 'bg-[#2d4f40] text-white'
                                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar