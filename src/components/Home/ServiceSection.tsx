"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Service = {
    title: string;
    desc: string;
    image: string;
    path: string;
    animationDelayClass: string;
};

const services: Service[] = [
    {
        title: "Epoxy Flooring",
        desc: "Industrial-grade epoxy systems with mirror-finish quality for commercial and industrial spaces.",
        image: "/Images/Service-Epoxy-Flooring.jpeg",
        path: "/services/epoxy-flooring",
        animationDelayClass: "delay-0",
    },
    {
        title: "Terrazzo",
        desc: "Elegant, timeless terrazzo flooring for luxury interiors — from corporate lobbies to hospitality venues.",
        image: "/Images/terrazzo.jpeg",
        path: "/services/terrazzo",
        animationDelayClass: "delay-100",
    },
    {
        title: "Building Facades",
        desc: "Innovative vertical concrete finishes that redefine modern architectural aesthetics.",
        image: "/Images/Building-Facade-Renovation.jpeg",
        path: "/services/building-facades",
        animationDelayClass: "delay-200",
    },
    {
        title: "Garage Floors",
        desc: "Premium anti-slip coatings that transform residential and commercial garages into showrooms.",
        image: "/Images/garage-floor.jpg",
        path: "/services/garage-floors",
        animationDelayClass: "delay-300",
    },
    {
        title: "Stamped Concrete",
        desc: "Decorative patterns and textures that bring artistry to outdoor patios and walkways.",
        image: "/Images/Lawn.jpeg",
        path: "/services/stamped-concrete",
        animationDelayClass: "delay-500",
    },
    {
        title: "Custom Decorative Concrete",
        desc: "Bespoke polymer-modified surfaces tailored to your unique design vision.",
        image: "/Images/custom-concrete2.jpeg",
        path: "/services/custom-decorative-concrete",
        animationDelayClass: "delay-700",
    },
];

const ServicesSection = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

    return (
        <section id="services" className="py-24 bg-[#0D0F12]" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">What We Do</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90">
                        Our <span className="text-gradient-copper">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.path}
                            className={`group relative h-95 overflow-hidden rounded-lg transition-all duration-700 ${service.animationDelayClass
                                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0D0F12]/95 via-[#0D0F12]/75 to-transparent" />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 
                                bg-[#14161a99] backdrop-blur-[20px] border border-[hsl(0_72%_48%/.15)] rounded-lg" />

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-serif font-bold text-white/90 mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm font-sans mb-4 line-clamp-2">
                                    {service.desc}
                                </p>
                                <span className="inline-flex items-center text-primary text-sm font-sans font-medium group-hover:gap-3 gap-1 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
