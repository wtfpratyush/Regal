import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight, Heart, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

const properties = [
    {
        id: 1,
        title: '3 BHK Luxury Apartment',
        location: 'Sector 79, Faridabad',
        price: '₹85 Lakh',
        type: 'Residential',
        image: 'https://images.pexels.com/photos/35508488/pexels-photo-35508488.jpeg',
        beds: 3,
        baths: 2,
        area: '1450 sq.ft',
        featured: true,
    },
    {
        id: 2,
        title: 'Commercial Office Space',
        location: 'OMAXE World Street',
        price: '₹1.2 Cr',
        type: 'Commercial',
        image: 'https://images.pexels.com/photos/273244/pexels-photo-273244.jpeg',
        beds: null,
        baths: 2,
        area: '2000 sq.ft',
        featured: true,
    },
    {
        id: 3,
        title: '4 BHK Independent Floor',
        location: 'Sector 81, Faridabad',
        price: '₹1.5 Cr',
        type: 'Residential',
        image: 'https://images.pexels.com/photos/35505627/pexels-photo-35505627.jpeg',
        beds: 4,
        baths: 3,
        area: '2200 sq.ft',
        featured: false,
    },
    {
        id: 4,
        title: 'Premium Retail Shop',
        location: 'Sector 84, Faridabad',
        price: '₹95 Lakh',
        type: 'Commercial',
        image: 'https://images.pexels.com/photos/35493603/pexels-photo-35493603.jpeg',
        beds: null,
        baths: 1,
        area: '800 sq.ft',
        featured: false,
    },
    {
        id: 5,
        title: '2 BHK Smart Apartment',
        location: 'Sector 86, Faridabad',
        price: '₹55 Lakh',
        type: 'Residential',
        image: 'https://images.pexels.com/photos/18341129/pexels-photo-18341129.jpeg',
        beds: 2,
        baths: 2,
        area: '1100 sq.ft',
        featured: true,
    },
    {
        id: 6,
        title: 'Builder - 3 BHK',
        location: 'Sector 77, Faridabad',
        price: '₹72 Lakh',
        type: 'Residential',
        image: 'https://images.pexels.com/photos/35554600/pexels-photo-35554600.jpeg',
        beds: 3,
        baths: 2,
        area: '1350 sq.ft',
        featured: false,
    },
];

const filters = ['All', 'Residential', 'Commercial', 'Investment'];

export const PropertiesSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);

    const filteredProperties = activeFilter === 'All' 
        ? properties 
        : properties.filter(p => p.type === activeFilter);

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="properties" className="py-20 lg:py-28 bg-background">
            <div className="section-container">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">Featured Properties</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                            Explore Premium{' '}
                            <span className="text-accent">Properties</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            Hand-picked properties in prime locations across Faridabad. Each listing is verified for authenticity and value.
                        </p>
                    </div>

                 
                    <div className="flex items-center gap-2 flex-wrap">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setActiveFilter(filter)}
                                className={activeFilter === filter 
                                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                                    : 'border-border hover:bg-secondary'
                                }
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Properties Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProperties.map((property) => (
                        <Card 
                            key={property.id}
                            className="group bg-card border-border overflow-hidden hover:shadow-strong transition-all duration-300"
                            onMouseEnter={() => setHoveredId(property.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                
                               
                                <div className={`absolute inset-0 bg-primary/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${hoveredId === property.id ? 'opacity-100' : 'opacity-0'}`}>
                                    <button className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-card transition-colors">
                                        <Heart className="w-4 h-4 text-foreground" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-card transition-colors">
                                        <Eye className="w-4 h-4 text-foreground" />
                                    </button>
                                </div>

                                {/* Type Badge */}
                                <Badge className={`absolute top-4 left-4 ${property.type === 'Residential' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
                                    {property.type}
                                </Badge>

                              
                                {property.featured && (
                                    <Badge className="absolute top-4 right-4 bg-amber-500 text-amber-950">
                                        Featured
                                    </Badge>
                                )}

                                {/* Price */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xl font-bold text-card bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-foreground">
                                        {property.price}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <CardContent className="p-5">
                                <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-1">
                                    {property.title}
                                </h3>
                                
                                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{property.location}</span>
                                </div>

                                {/* Property Details */}
                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div className="flex items-center gap-4">
                                        {property.beds && (
                                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                <Bed className="w-4 h-4" />
                                                <span>{property.beds}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <Bath className="w-4 h-4" />
                                            <span>{property.baths}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <Square className="w-4 h-4" />
                                            <span>{property.area}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Looking for something specific?</p>
                    <Button 
                        onClick={scrollToContact}
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent/10 group"
                    >
                        Tell Us Your Requirements
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PropertiesSection;
