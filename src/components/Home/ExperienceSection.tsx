"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
    { label: "Years Experience", value: 20, suffix: "+" },
    { label: "Projects Completed", value: 500, suffix: "+" },
    { label: "Client Satisfaction", value: 99, suffix: "%" },
];

const delayClasses = ["delay-0", "delay-200", "delay-300"];

function AnimatedCounter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [active, value]);

    return (
        <span className="text-5xl md:text-6xl font-serif font-bold text-gradient-copper">
            {count}{suffix}
        </span>
    );
}

const ExperienceSection = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

    return (
        <section className="relative overflow-hidden bg-[#14161A] py-16" ref={ref}>
            {/* Gold accent lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Our Track Record</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90 mb-6">
                        Over Two Decades of{" "}
                        <span className="text-gradient-copper">Surface Mastery</span>
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto font-sans leading-relaxed">
                        From polymer-modified concrete to vertical surface applications, we&apos;ve perfected the art
                        of spraying, troweling, and brushing — delivering flawless finishes across commercial,
                        industrial, and artistic projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`bg-[#14161A] backdrop-blur-xl border border-white/10 text-center p-8 rounded-lg transition-all duration-700
  ${delayClasses[i] ?? "delay-0"}
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
`}
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} active={isVisible} />
                            <p className="text-muted-foreground font-sans text-sm mt-3 uppercase tracking-widest ">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
