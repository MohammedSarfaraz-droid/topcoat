import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/Config/Site";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const Footer = () => (
  <footer className="bg-secondary border-t border-[#282c33]">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="inline-flex mb-4" aria-label={`${siteConfig.name} Home`}>
            <Image
              src="/Images/TopCoat-white-logo.png"
              alt={siteConfig.name}
              width={300}
              height={112}
              className="h-13 w-auto sm:h-14 lg:h-20"
            />
          </Link>
          <p className="text-[#818898] text-sm leading-relaxed mb-6">
            Over 20 years of craftsmanship in epoxy flooring, terrazzo, and decorative concrete.
            Luxury surfaces engineered to last.
          </p>
          <p className="text-primary italic font-serif text-sm">
            &quot;If You Can Imagine It, We Can Build It.&quot;
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-[#efece7] uppercase tracking-widest text-sm mb-4">
            Services
          </h4>
          <ul className="space-y-2">
            {siteConfig.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-[#818898] hover:text-primary transition-colors text-sm"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-[#efece7] uppercase tracking-widest text-sm mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#818898] hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-[#efece7] uppercase tracking-widest text-sm mb-4">
            Contact
          </h4>
          <div className="space-y-3">
            <a
              href={formatPhoneHref(siteConfig.phone)}
              className="flex items-center gap-3 text-[#818898] hover:text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-[#818898] hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              {siteConfig.email}
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[#818898] hover:text-primary transition-colors text-sm"
              aria-label="Open address in Google Maps"
            >
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>{siteConfig.address}</span>
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white shadow-[0_10px_24px_-18px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8"
              >
                <Instagram className="size-4 transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white shadow-[0_10px_24px_-18px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8"
              >
                <Facebook className="size-4 transition-transform duration-300 group-hover:scale-105" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#282c33] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#818898] text-xs">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-[#818898] text-xs">
          Premium flooring, terrazzo, and decorative concrete solutions.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
