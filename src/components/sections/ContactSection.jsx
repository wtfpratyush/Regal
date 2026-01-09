import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardContent } from '../ui/card';
import { toast } from 'sonner';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Visit Our Office',
        content: 'OMAXE World Street, 20A, Royal Street, Sector 79, Faridabad, Haryana – 121101',
    },
    {
        icon: Phone,
        title: 'Call Us',
        content: '+91 98765 43210',
        href: 'tel:+919876543210',
    },
    {
        icon: Mail,
        title: 'Email Us',
        content: 'info@reegalrealtors.com',
        href: 'mailto:info@reegalrealtors.com',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        content: 'Mon - Sat: 9:00 AM - 7:00 PM',
    },
];

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        requirement: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.phone) {
            toast.error('Please fill in your name and phone number');
            return;
        }

        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast.success('Thank you! We will contact you shortly.');
        setFormData({ name: '', phone: '', email: '', requirement: '' });
        setIsSubmitting(false);
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hi, I am interested in your real estate services.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">Get In Touch</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                        Ready to Find Your{' '}
                        <span className="text-accent">Dream Property?</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Connect with our expert consultants today. Share your requirements and let us find the perfect property for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Contact Form */}
                    <Card className="bg-card border-border shadow-soft">
                        <CardContent className="p-6 lg:p-8">
                            <h3 className="font-semibold text-xl text-card-foreground mb-6">
                                Send Us Your Requirement
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Your Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-background border-input focus:ring-accent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="bg-background border-input focus:ring-accent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-background border-input focus:ring-accent"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="requirement">Your Requirement</Label>
                                    <Textarea
                                        id="requirement"
                                        name="requirement"
                                        placeholder="Tell us what you're looking for (e.g., 3 BHK apartment in Sector 79, budget ₹80 Lakh...)"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        rows={4}
                                        className="bg-background border-input focus:ring-accent resize-none"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <Button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 shadow-emerald"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                                        <Send className="w-4 h-4 ml-2" />
                                    </Button>
                                    <Button 
                                        type="button"
                                        variant="outline"
                                        onClick={handleWhatsApp}
                                        className="flex-1 border-emerald text-accent hover:bg-accent/10"
                                    >
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        WhatsApp
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <div className="flex flex-col">
                        <div className="space-y-5 mb-8">
                            {contactInfo.map((info) => (
                                <div 
                                    key={info.title}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                                        {info.href ? (
                                            <a 
                                                href={info.href}
                                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">{info.content}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Embed Placeholder */}
                        <div className="flex-1 min-h-[250px] rounded-xl overflow-hidden border border-border bg-secondary/50 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.123456789!2d77.3567!3d28.3845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector%2079%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '250px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Reegal Realtors Location"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Location Tag */}
                            <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4 text-accent" />
                                    <span className="font-medium text-card-foreground">OMAXE World Street, Sector 79</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
