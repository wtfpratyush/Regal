import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
    quickLinks: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Properties', href: '#properties' },
        { name: 'Contact', href: '#contact' },
    ],
    services: [
        { name: 'Residential Consulting', href: '#services' },
        { name: 'Commercial Advisory', href: '#services' },
        { name: 'Investment Guidance', href: '#services' },
        { name: 'Site Visits', href: '#services' },
    ],
};

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
];

export const Footer = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-primary text-primary-foreground">
            {/* Main Footer */}
            <div className="section-container py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                                <span className="text-accent-foreground font-bold text-lg">R</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg text-primary-foreground">Reegal</span>
                                <span className="text-xs text-primary-foreground/60 tracking-widest uppercase">Realtors</span>
                            </div>
                        </div>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                            Your trusted real estate consultants in Faridabad. We help you find the perfect property with transparency, expertise, and personalized service.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-primary-foreground/70 leading-relaxed">
                                    OMAXE World Street<br />
                                    20A, Royal Street<br />
                                    Sector 79, Faridabad,<br />
                                    Haryana – 121101
                                </span>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@reegalrealtors.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                                    info@reegalrealtors.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                                Mon - Sat: 9:00 AM - 7:00 PM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/10">
                <div className="section-container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-primary-foreground/60">
                            © {new Date().getFullYear()} Reegal Realtors. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
