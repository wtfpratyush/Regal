import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft' 
                    : 'bg-transparent'
            }`}
        >
            {/* Top Bar */}
            <div className={`hidden md:block border-b border-border/50 transition-all duration-300 ${
                isScrolled ? 'py-1' : 'py-2'
            }`}>
                <div className="section-container">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-6">
                            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                <span>+91 98765 43210</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>OMAXE World Street, Sector 79, Faridabad</span>
                            </div>
                        </div>
                        <div className="text-xs">
                            Mon - Sat: 9:00 AM - 7:00 PM
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Nav */}
            <nav className={`section-container transition-all duration-300 ${
                isScrolled ? 'py-3' : 'py-4'
            }`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a 
                        href="#home" 
                        onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                            <span className="text-accent-foreground font-bold text-lg">R</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg text-foreground tracking-tight leading-none">
                                Reegal
                            </span>
                            <span className="text-xs text-muted-foreground tracking-widest uppercase">
                                Realtors
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button 
                            onClick={() => scrollToSection('#contact')}
                            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-emerald"
                        >
                            Get Consultation
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 bg-background border-l border-border">
                            <div className="flex flex-col h-full pt-8">
                                {/* Mobile Logo */}
                                <div className="flex items-center gap-2 mb-8 px-2">
                                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                                        <span className="text-accent-foreground font-bold text-lg">R</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg text-foreground">Reegal</span>
                                        <span className="text-xs text-muted-foreground tracking-widest uppercase">Realtors</span>
                                    </div>
                                </div>

                                {/* Mobile Links */}
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                            className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <div className="mt-auto pb-8 space-y-4">
                                    <div className="px-4 py-3 bg-secondary rounded-lg">
                                        <p className="text-sm text-muted-foreground mb-1">Call us today</p>
                                        <a href="tel:+919876543210" className="text-lg font-semibold text-foreground">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                    <Button 
                                        onClick={() => scrollToSection('#contact')}
                                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                                    >
                                        Get Consultation
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
