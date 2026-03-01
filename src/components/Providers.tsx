'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language } from '@/lib/translations';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [language, setLanguage] = useState<Language>('pt');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const savedLanguage = localStorage.getItem('language') as Language | null;
        const initialTheme = savedTheme || 'dark';
        const initialLanguage = savedLanguage || 'pt';

        setTheme(initialTheme);
        setLanguage(initialLanguage);

        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        document.documentElement.classList.toggle('light', initialTheme === 'light');
        document.documentElement.lang = initialLanguage === 'en' ? 'en' : 'pt-BR';

        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        document.documentElement.classList.toggle('light', newTheme === 'light');
    };

    const toggleLanguage = () => {
        const newLang: Language = language === 'pt' ? 'en' : 'pt';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
        document.documentElement.lang = newLang === 'en' ? 'en' : 'pt-BR';
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <LanguageContext.Provider value={{ language, toggleLanguage }}>
                {!mounted ? (
                    <div style={{ visibility: 'hidden' }}>{children}</div>
                ) : (
                    children
                )}
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
