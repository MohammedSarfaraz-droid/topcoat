import type { ServiceHighlight, ServiceNavItem } from "@/types/service";

export const siteConfig = {
  name: "TopCoat Artistry LLC",
  description:
    "Work experience & Professional Contracting Services And started our business by doing decorative painting and stenciled wood floors. The company then expanded into decorative stamped concrete floors. Topcoat artisans experimented with polymered concrete and modified concrete to apply to vertical surfaces and ceilings; they used a variety of techniques including spraying, troweling, and brushing , we are also professionals in all types of floors such as epoxy and terrazzo works.",
  url: "https://topcoat-llc.com",
  phone: "201 315 2633",
  email: "Almahairi@gmail.com",
  address: "108 Fairfield Rd, Wayne NJ 07470",
  services: [
    { name: "Epoxy Flooring", slug: "epoxy-flooring" },
    { name: "Terrazzo", slug: "terrazzo" },
    { name: "Building Facades", slug: "building-facades" },
    { name: "Garage Floors", slug: "garage-floors" },
    { name: "Stamped Concrete", slug: "stamped-concrete" },
    { name: "Custom Decorative Concrete", slug: "custom-decorative-concrete" },
  ] as ServiceNavItem[],
  serviceHighlights: [
    {
      title: "Epoxy Flooring",
      description: "Industrial-grade epoxy systems with mirror-finish quality for commercial and industrial spaces.",
      image: "/Images/Service-Epoxy-Flooring.jpeg",
      slug: "epoxy-flooring",
    },
    {
      title: "Terrazzo",
      description: "Elegant, timeless terrazzo flooring for luxury interiors — from corporate lobbies to hospitality venues.",
      image: "/Images/terrazzo.jpeg",
      slug: "terrazzo",
    },
    {
      title: "Building Facades",
      description: "Innovative vertical concrete finishes that redefine modern architectural aesthetics.",
      image: "/Images/building-facade2.jpeg",
      slug: "building-facades",
    },
    {
      title: "Garage Floors",
      description: "Premium anti-slip coatings that transform residential and commercial garages into showrooms.",
      image: "/Images/garage-floor.jpg",
      slug: "garage-floors",
    },
    {
      title: "Stamped Concrete",
      description: "Decorative patterns and textures that bring artistry to outdoor patios and walkways.",
      image: "/Images/stampedconcrete.jpeg",
      slug: "stamped-concrete",
    },
    {
      title: "Custom Decorative Concrete",
      description: "Bespoke polymer-modified surfaces tailored to your unique design vision.",
      image: "/Images/custom-concrete2.jpeg",
      slug: "custom-decorative-concrete",
    },
  ] as ServiceHighlight[],
  social: {
    facebook: "https://www.facebook.com/top.coat.artistry?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/top.coat.artistry",
  },
};