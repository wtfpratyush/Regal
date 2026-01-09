import React from 'react';
import { MapPin, Handshake, Users, HeadphonesIcon, Shield, Award } from 'lucide-react';

const reasons = [
    {
        icon: MapPin,
        title: 'Local Expertise',
        description: 'Deep understanding of Faridabad real estate landscape, market trends, and neighborhood dynamics.',
    },
    {
        icon: Handshake,
        title: 'Transparent Dealings',
        description: 'No hidden charges, no surprises. We believe in honest communication and straightforward transactions.',
    },
    {
        icon: Users,
        title: 'Personalized Service',
        description: 'Every client is unique. We take time to understand your needs and provide tailored property solutions.',
    },
    {
        icon: HeadphonesIcon,
        title: 'End-to-End Support',
        description: 'From property search to registration, we are with you at every step of your real estate journey.',
    },
    {
        icon: Shield,
        title: 'Verified Properties',
        description: 'All our listings undergo thorough verification for legal compliance and authenticity.',
    },
    {
        icon: Award,
        title: 'Proven Track Record',
        description: '500+ successful transactions and countless satisfied clients across Faridabad & NCR.',
    },
];

export const WhyUsSection = () => {
    return (
        <section id="why-us" className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="section-container relative">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full mb-6">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">Why Choose Us</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-4">
                        Why Clients Trust{' '}
                        <span className="text-accent">Reegal Realtors</span>
                    </h2>
                    <p className="text-primary-foreground/70 leading-relaxed">
                        We are not just another real estate agency. Here is what sets us apart in Faridabad property market.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <div 
                            key={reason.title}
                            className="group p-6 lg:p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                                <reason.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="font-semibold text-lg text-primary-foreground mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-sm text-primary-foreground/70 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 pt-16 border-t border-primary-foreground/10">
                    {[
                        { value: '1500+', label: 'Years Experience' },
                        { value: '50+', label: 'Properties Sold' },
                        { value: '₹20Cr+', label: 'Transaction Value' },
                        { value: '98%', label: 'Client Satisfaction' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                            <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
