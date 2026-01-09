import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const highlights = [
    'Deep knowledge of Faridabad real estate market',
    'Transparent and honest dealings',
    'Personalized property recommendations',
    'End-to-end transaction support',
    'Strong network of verified properties',
    'Post-sale assistance and guidance',
];

export const AboutSection = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-20 lg:py-28 bg-background">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/18341121/pexels-photo-18341121.jpeg"
                                alt="Reegal Realtors Office"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </div>
                        
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-card rounded-xl p-6 shadow-strong border border-border">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-accent">15+</p>
                                <p className="text-sm text-muted-foreground mt-1">Years of<br/>Excellence</p>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-2xl -z-10" />
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">About Us</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                            Your Trusted Partner in{' '}
                            <span className="text-accent">Faridabad Real Estate</span>
                        </h2>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                            At Reegal Realtors, we understand that buying or investing in property is one of life&apos;s most significant decisions. Based in the heart of Faridabad at OMAXE World Street, we bring over 15 years of local market expertise to help you make informed choices.
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Our approach is simple: listen to your needs, provide honest guidance, and deliver results. We don&apos;t just sell properties—we build lasting relationships based on trust and transparency.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Button 
                            onClick={scrollToContact}
                            className="bg-accent text-accent-foreground hover:bg-accent/90 group"
                        >
                            Schedule a Meeting
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
