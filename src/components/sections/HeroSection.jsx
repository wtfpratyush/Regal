import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const HeroSection = () => {
    const [isVisible] = useState(true);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.pexels.com/photos/998499/pexels-photo-998499.jpeg"
                    alt="Premium Real Estate"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
            </div>

            {/* Content Container */}
            <div className="relative section-container w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-primary-foreground/90">Faridabad's Trusted Real Estate Experts</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Trusted Real Estate{' '}
                            <span className="text-accent">Consultants</span>{' '}
                            in Faridabad
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
                            From finding your dream home to strategic investments, we provide end-to-end real estate consulting with transparency and local expertise.
                        </p>

                        {/* Trust Points */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            {['10+ Years Experience', 'Verified Properties', 'Personalized Service'].map((point) => (
                                <div key={point} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                onClick={() => scrollToSection('#contact')}
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-emerald group"
                            >
                                Get Consultation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button 
                                onClick={() => scrollToSection('#properties')}
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
                            >
                                View Properties
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Stats Card */}
                    <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative">
                            {/* Main Stats Card */}
                            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-strong">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-card-foreground">Property Overview</h3>
                                        <p className="text-sm text-muted-foreground">Faridabad & NCR Region</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                                        <p className="text-3xl font-bold text-card-foreground">500+</p>
                                        <p className="text-sm text-muted-foreground mt-1">Properties Sold</p>
                                    </div>
                                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                                        <p className="text-3xl font-bold text-card-foreground">₹200Cr+</p>
                                        <p className="text-sm text-muted-foreground mt-1">Total Value</p>
                                    </div>
                                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                                        <p className="text-3xl font-bold text-card-foreground">98%</p>
                                        <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
                                    </div>
                                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                                        <p className="text-3xl font-bold text-card-foreground">15+</p>
                                        <p className="text-sm text-muted-foreground mt-1">Years in Faridabad</p>
                                    </div>
                                </div>

                                {/* Location Badge */}
                                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                                    <MapPin className="w-4 h-4 text-accent" />
                                    <span className="text-sm text-card-foreground">OMAXE World Street, Sector 79, Faridabad</span>
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
