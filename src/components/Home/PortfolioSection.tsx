"use client";

import Image from "next/image";
import { useState } from "react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type PortfolioFilter = "All" | "Commercial" | "Residential" | "Industrial" | "Decorative";

type Project = {
  id: string;
  name: string;
  type: Exclude<PortfolioFilter, "All">;
  image: string;
  description: string;
  animationDelayClass: string;
};

const filters: PortfolioFilter[] = ["All", "Commercial", "Residential", "Industrial", "Decorative"];

const projects: Project[] = [
  {
    id: "corporate-lobby-terrazzo",
    name: "Corporate Lobby Terrazzo",
    type: "Commercial",
    image: "/Images/terrazzo.jpeg",
    description: "Custom terrazzo design for a Fortune 500 headquarters",
    animationDelayClass: "delay-0",
  },
  {
    id: "industrial-warehouse-coating",
    name: "Industrial Warehouse Coating",
    type: "Industrial",
    image: "/Images/commercial-epoxy.jpg",
    description: "High-performance epoxy for 50,000 sq ft facility",
    animationDelayClass: "delay-75",
  },
  {
    id: "luxury-home-flooring",
    name: "Luxury Home Flooring",
    type: "Residential",
    image: "/Images/Lawn.jpeg",
    description: "Polished decorative concrete for modern living",
    animationDelayClass: "delay-100",
  },
  {
    id: "metallic-epoxy-showroom",
    name: "Metallic Epoxy Showroom",
    type: "Commercial",
    image: "/Images/epoxy-flooring2.jpeg",
    description: "Mirror-finish metallic epoxy for auto dealership",
    animationDelayClass: "delay-150",
  },
  {
    id: "building-facade-renovation",
    name: "Building Facade Renovation",
    type: "Commercial",
    image: "/Images/Building-Facade-Renovation.jpeg",
    description: "Textured concrete panels for modern office complex",
    animationDelayClass: "delay-200",
  },
  {
    id: "designer-patio",
    name: "Designer Patio",
    type: "Decorative",
    image: "/Images/Decorative.jpeg",
    description: "Stamped concrete with natural stone pattern",
    animationDelayClass: "delay-300",
  },
  {
    id: "premium-garage-coating",
    name: "Premium Garage Coating",
    type: "Residential",
    image: "/Images/Car-parking.jpeg",
    description: "Anti-slip epoxy with custom color flakes",
    animationDelayClass: "delay-500",
  },
  {
    id: "vertical-concrete-art",
    name: "Vertical Concrete Art",
    type: "Decorative",
    image: "/Images/concrete-home.jpeg",
    description: "Polymer-modified wall finish for gallery space",
    animationDelayClass: "delay-700",
  },
  {
    id: "custom-surface-texture",
    name: "Custom Surface Texture",
    type: "Decorative",
    image: "/Images/custom-home.jpeg",
    description: "Artisan copper-infused decorative finish",
    animationDelayClass: "delay-800",
  },
  {
    id: "church-sanctuary-flooring-1",
    name: "Church Sanctuary Flooring",
    type: "Decorative",
    image: "/Images/church1.jpeg",
      description: "Eco-friendly epoxy flooring featuring recycled glass for a vibrant sanctuary finish",
    animationDelayClass: "delay-900",
  },
  {
    id: "church-sanctuary-flooring-2",
    name: "Church Sanctuary Flooring",
    type: "Decorative",
    image: "/Images/church2.jpeg",
      description: "Sustainable epoxy installation with glass aggregate, enhancing church aesthetics and durability",
    animationDelayClass: "delay-950",
  }
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
              className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all cursor-pointer ${
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
              key={project.id}
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
