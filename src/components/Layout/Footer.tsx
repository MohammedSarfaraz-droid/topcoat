import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/Config/Site";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/#portfolio" },
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
              src="/logo.png"
              alt={siteConfig.name}
              width={220}
              height={96}
              className="h-20 w-auto"
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
            <div className="flex items-start gap-3 text-[#818898] text-sm">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>{siteConfig.address}</span>
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
