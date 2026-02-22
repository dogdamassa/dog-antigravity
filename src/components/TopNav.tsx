'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './Providers';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Comunidade', href: '/comunidade' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Educação', href: '/educacao' },
    { name: 'Apps', href: '/apps' },
    { name: 'DOG NEWS', href: '/news' },
];

export function TopNav() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 2);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Top Navigation Bar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 h-[44px] transition-all duration-200 ${
                    scrolled || isOpen ? 'apple-nav' : 'bg-transparent'
                }`}
            >
                <div className="h-full max-w-[980px] mx-auto px-4 md:px-6 flex items-center justify-between gap-8">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="shrink-0 text-[17px] font-semibold tracking-[-0.022em] leading-none"
                    >
                        <span className="text-dog-orange">$</span>
                        <span className="text-foreground">DOG</span>
                    </Link>

                    {/* Desktop Nav Links — center */}
                    <div className="hidden md:flex items-center gap-5 flex-1 justify-center">
                        {navItems.slice(1).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-[12px] font-medium leading-none transition-colors duration-150 ${
                                    pathname === item.href
                                        ? 'text-dog-orange'
                                        : 'text-foreground/60 hover:text-foreground'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-0.5 shrink-0">
                        <button
                            onClick={toggleTheme}
                            aria-label="Alternar tema"
                            className="w-8 h-8 flex items-center justify-center rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-150"
                        >
                            {theme === 'dark'
                                ? <Sun className="w-[17px] h-[17px] text-dog-gold" />
                                : <Moon className="w-[17px] h-[17px]" />
                            }
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-150"
                        >
                            {isOpen
                                ? <X className="w-[17px] h-[17px]" />
                                : <Menu className="w-[17px] h-[17px]" />
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-background transition-opacity duration-200 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="pt-[60px] px-6 pb-10">
                    <nav>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center py-4 text-[28px] font-semibold border-b transition-colors duration-150 ${
                                    pathname === item.href
                                        ? 'text-dog-orange border-dog-orange/20'
                                        : 'text-foreground border-foreground/10 hover:text-dog-orange'
                                }`}
                                style={{ letterSpacing: '-0.022em' }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-10">
                        <button
                            onClick={() => { toggleTheme(); setIsOpen(false); }}
                            className="flex items-center gap-3 text-[17px] text-foreground/50 font-medium"
                        >
                            {theme === 'dark'
                                ? <Sun className="w-5 h-5 text-dog-gold" />
                                : <Moon className="w-5 h-5" />
                            }
                            {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
