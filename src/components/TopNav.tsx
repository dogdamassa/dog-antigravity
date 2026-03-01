'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme, useLanguage } from './Providers';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export function TopNav() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const t = getTranslations(language);

    const navItems = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.comunidade, href: '/comunidade' },
        { name: t.nav.eventos, href: '/eventos' },
        { name: t.nav.educacao, href: '/educacao' },
        { name: t.nav.apps, href: '/apps' },
        { name: t.nav.news, href: '/news' },
    ];

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
                        {/* Language toggle */}
                        <button
                            onClick={toggleLanguage}
                            aria-label={t.nav.toggleLanguage}
                            className="w-8 h-8 flex items-center justify-center rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-150"
                        >
                            <span className="text-[10px] font-bold tracking-wide uppercase">
                                {language === 'pt' ? 'EN' : 'PT'}
                            </span>
                        </button>

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label={t.nav.toggleTheme}
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
                            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
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

                    <div className="mt-10 flex flex-col gap-4">
                        <button
                            onClick={() => { toggleTheme(); setIsOpen(false); }}
                            className="flex items-center gap-3 text-[17px] text-foreground/50 font-medium"
                        >
                            {theme === 'dark'
                                ? <Sun className="w-5 h-5 text-dog-gold" />
                                : <Moon className="w-5 h-5" />
                            }
                            {theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
                        </button>

                        <button
                            onClick={() => { toggleLanguage(); setIsOpen(false); }}
                            className="flex items-center gap-3 text-[17px] text-foreground/50 font-medium"
                        >
                            <span className="text-[14px] font-bold w-5">
                                {language === 'pt' ? 'EN' : 'PT'}
                            </span>
                            {language === 'pt' ? 'English' : 'Português'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
