import React from 'react';
import { MapPin, Shield, Award, Users } from 'lucide-react';

const trustPoints = [
    {
        icon: MapPin,
        title: 'Local Presence',
        description: 'Strategically located at OMAXE World Street, Sector 79, Faridabad'
    },
    {
        icon: Shield,
        title: 'RERA Compliant',
        description: 'All properties verified and legally compliant'
    },
    {
        icon: Award,
        title: '15+ Years',
        description: 'Serving Faridabad with dedication and expertise'
    },
    {
        icon: Users,
        title: '1000+ Clients',
        description: 'Trusted by families across the NCR region'
    },
];

export const TrustSection = () => {
    return (
        <section className="py-12 lg:py-16 bg-secondary/30 border-y border-border">
            <div className="section-container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {trustPoints.map((point, index) => (
                        <div 
                            key={point.title}
                            className="flex flex-col items-center text-center p-4 lg:p-6"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                <point.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                            </div>
                            <h3 className="font-semibold text-foreground text-sm lg:text-base mb-1">
                                {point.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
