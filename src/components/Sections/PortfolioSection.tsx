"use client";

import Image from "next/image";
import { useState } from "react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type PortfolioFilter = "All" | "Commercial" | "Residential" | "Industrial" | "Decorative";

type Project = {
  name: string;
  type: Exclude<PortfolioFilter, "All">;
  image: string;
  description: string;
  animationDelayClass: string;
};

const filters: PortfolioFilter[] = ["All", "Commercial", "Residential", "Industrial", "Decorative"];

const projects: Project[] = [
  {
    name: "Corporate Lobby Terrazzo",
    type: "Commercial",
    image: "/terrazzo-interior.jpg",
    description: "Custom terrazzo design for a Fortune 500 headquarters",
    animationDelayClass: "delay-0",
  },
  {
    name: "Industrial Warehouse Coating",
    type: "Industrial",
    image: "/commercial-epoxy.jpg",
    description: "High-performance epoxy for 50,000 sq ft facility",
    animationDelayClass: "delay-75",
  },
  {
    name: "Luxury Home Flooring",
    type: "Residential",
    image: "/residential-floor.jpg",
    description: "Polished decorative concrete for modern living",
    animationDelayClass: "delay-100",
  },
  {
    name: "Metallic Epoxy Showroom",
    type: "Commercial",
    image: "/hero-epoxy.jpg",
    description: "Mirror-finish metallic epoxy for auto dealership",
    animationDelayClass: "delay-150",
  },
  {
    name: "Building Facade Renovation",
    type: "Commercial",
    image: "/building-facade.jpg",
    description: "Textured concrete panels for modern office complex",
    animationDelayClass: "delay-200",
  },
  {
    name: "Designer Patio",
    type: "Decorative",
    image: "/stamped-concrete.jpg",
    description: "Stamped concrete with natural stone pattern",
    animationDelayClass: "delay-300",
  },
  {
    name: "Premium Garage Coating",
    type: "Residential",
    image: "/garage-floor.jpg",
    description: "Anti-slip epoxy with custom color flakes",
    animationDelayClass: "delay-500",
  },
  {
    name: "Vertical Concrete Art",
    type: "Decorative",
    image: "/spraying-action.jpg",
    description: "Polymer-modified wall finish for gallery space",
    animationDelayClass: "delay-700",
  },
  {
    name: "Custom Surface Texture",
    type: "Decorative",
    image: "/custom-concrete.jpg",
    description: "Artisan copper-infused decorative finish",
    animationDelayClass: "delay-1000",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<PortfolioFilter>("All");
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="portfolio" className="bg-[#0D0F12] py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90">
            Featured <span className="text-gradient-copper">Portfolio</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-white/90 hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project) => (
            <div
              key={project.name}
              className={`group relative overflow-hidden rounded-lg break-inside-avoid transition-all duration-700 ${
                project.animationDelayClass
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={560}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#0D0F12]/95 via-[#0D0F12]/75 to-[#0D0F12]/20 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <span className="text-primary text-xs font-sans uppercase tracking-widest">{project.type}</span>
                  <h3 className="mt-1 text-lg font-serif font-bold text-white/90">{project.name}</h3>
                  <p className="mt-1 text-sm font-sans text-white/75">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
