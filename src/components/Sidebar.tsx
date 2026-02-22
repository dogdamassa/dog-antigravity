'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './Providers';
import {
    Home,
    Users,
    Calendar,
    BookOpen,
    Grid,
    Newspaper,
    Sun,
    Moon,
    Menu,
    X,
    Dog
} from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Comunidade', href: '/comunidade', icon: Users },
    { name: 'Eventos', href: '/eventos', icon: Calendar },
    { name: 'Educação', href: '/educacao', icon: BookOpen },
    { name: 'Apps', href: '/apps', icon: Grid },
    { name: 'DOG NEWS', href: '/news', icon: Newspaper },
];

export function Sidebar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const Logo = () => (
        <div className="flex items-center gap-3 px-2 py-6 mb-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-dog-orange/20 relative bg-dog-dark">
                <img src="/dog-logo.jpg" alt="$DOG Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">$DOG</span>
                <span className="text-[10px] uppercase tracking-widest text-dog-orange font-bold">Aggregator</span>
            </div>
        </div>
    );

    const NavLinks = ({ onClick }: { onClick?: () => void }) => (
        <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClick}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                            ? 'bg-dog-orange text-dog-dark font-medium'
                            : 'text-foreground/60 hover:text-foreground hover:bg-dog-orange/10'
                            }`}
                    >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-dog-dark' : 'text-dog-orange group-hover:scale-110 transition-transform'}`} />
                        <span>{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass z-50 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg overflow-hidden relative bg-dog-dark">
                        <img src="/dog-logo.jpg" alt="$DOG Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-display font-bold">$DOG</span>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-dog-orange"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`lg:hidden fixed inset-0 z-[60] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-background border-r border-dog-dark/10 p-4">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg overflow-hidden relative bg-dog-dark">
                                <img src="/dog-logo.jpg" alt="$DOG Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-display font-bold">$DOG</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2 text-foreground/60"><X /></button>
                    </div>
                    <NavLinks onClick={() => setIsOpen(false)} />
                    <div className="mt-auto pt-4 border-t border-dog-dark/5">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-foreground/60 hover:text-foreground hover:bg-dog-orange/10"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5 text-dog-gold" /> : <Moon className="w-5 h-5 text-dog-orange" />}
                            <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[var(--sidebar-width)] flex-col border-r border-dog-dark/10 px-4 pb-6 glass z-40">
                <Logo />
                <NavLinks />
                <div className="mt-auto px-2">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl border border-dog-orange/20 text-foreground/60 hover:text-foreground hover:bg-dog-orange/10 transition-colors"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-dog-gold" /> : <Moon className="w-5 h-5 text-dog-orange" />}
                        <span>Tema</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
