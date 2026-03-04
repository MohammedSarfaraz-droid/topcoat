import type { ServiceHighlight, ServiceNavItem } from "@/types/service";

export const siteConfig = {
  name: "TopCoat Artistry LLC",
  description:
    "Work experience & Professional Contracting Services And started our business by doing decorative painting and stenciled wood floors. The company then expanded into decorative stamped concrete floors. Topcoat artisans experimented with polymered concrete and modified concrete to apply to vertical surfaces and ceilings; they used a variety of techniques including spraying, troweling, and brushing , we are also professionals in all types of floors such as epoxy and terrazzo works.",
  url: "https://topcoat-llc.net",
  phone: "+1 201 315 263 3",
  email: "sales@topcoat-llc.net",
  address: "312 Fair Lawn Ave, Fair Lawn, NJ 07410, United States",
  services: [
    { name: "Epoxy Flooring", slug: "epoxy-flooring" },
    { name: "Terrazzo", slug: "terrazzo" },
    { name: "Building's Facade", slug: "buildings-facade" },
    { name: "Garage Floors", slug: "garage-floors" },
    { name: "Stamped Concrete", slug: "stamped-concrete" },
    { name: "Other Services", slug: "other-services" },
  ] as ServiceNavItem[],
  serviceHighlights: [
    {
      title: "Epoxy Flooring",
      description: "Industrial-grade epoxy systems with mirror-finish quality for commercial and industrial spaces.",
      image: "/hero-epoxy.jpg",
      slug: "epoxy-flooring",
    },
    {
      title: "Terrazzo",
      description: "Elegant, timeless terrazzo flooring for luxury interiors — from corporate lobbies to hospitality venues.",
      image: "/terrazzo-interior.jpg",
      slug: "terrazzo",
    },
    {
      title: "Building Facades",
      description: "Innovative vertical concrete finishes that redefine modern architectural aesthetics.",
      image: "/building-facade.jpg",
      slug: "building-facades",
    },
    {
      title: "Garage Floors",
      description: "Premium anti-slip coatings that transform residential and commercial garages into showrooms.",
      image: "/garage-floor.jpg",
      slug: "garage-floors",
    },
    {
      title: "Stamped Concrete",
      description: "Decorative patterns and textures that bring artistry to outdoor patios and walkways.",
      image: "/stamped-concrete.jpg",
      slug: "stamped-concrete",
    },
    {
      title: "Custom Decorative Concrete",
      description: "Bespoke polymer-modified surfaces tailored to your unique design vision.",
      image: "/custom-concrete.jpg",
      slug: "custom-decorative-concrete",
    },
  ] as ServiceHighlight[],
  social: {
    facebook: "https://www.facebook.com/top.coat.artistry?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/top.coat.artistry",
  },
};