import React from 'react';
import { Home, Building2, TrendingUp, MapPinned, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const services = [
    {
        icon: Home,
        title: 'Residential Property Consulting',
        description: 'Find your perfect home in Faridabad. From apartments to villas, we guide you through every step of the buying process.',
        features: ['Apartments & Flats', 'Independent Houses', 'Builder Floors', 'Villas & Row Houses'],
    },
    {
        icon: Building2,
        title: 'Commercial Property Advisory',
        description: 'Strategic locations for your business. We help you find commercial spaces that align with your business goals.',
        features: ['Office Spaces', 'Retail Shops', 'Showrooms', 'Warehouses'],
    },
    {
        icon: TrendingUp,
        title: 'Investment Guidance',
        description: 'Maximize your returns with informed real estate investments. Expert analysis of market trends and growth potential.',
        features: ['Market Analysis', 'ROI Projections', 'Portfolio Strategy', 'Risk Assessment'],
    },
    {
        icon: MapPinned,
        title: 'Site Visits & Deal Closure',
        description: 'From your first visit to handing over the keys. Complete support through documentation and legal verification.',
        features: ['Property Tours', 'Legal Verification', 'Documentation', 'Registration Support'],
    },
];

export const ServicesSection = () => {
    return (
        <section id="services" className="py-20 lg:py-28 bg-secondary/30">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Services</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                        Comprehensive Real Estate{' '}
                        <span className="text-accent">Solutions</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        From residential dreams to commercial ventures, we offer end-to-end consulting services tailored to your unique needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <Card 
                            key={service.title}
                            className="group bg-card border-border hover:border-accent/30 transition-all duration-300 hover:shadow-medium overflow-hidden"
                        >
                            <CardContent className="p-6 lg:p-8">
                                <div className="flex flex-col h-full">
                                    {/* Icon & Title */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                            <service.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-card-foreground mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-border">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Need something specific? We&apos;re here to help.</p>
                    <a 
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 text-accent font-medium hover:underline group"
                    >
                        Discuss Your Requirements
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
