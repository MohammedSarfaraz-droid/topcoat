import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0F12] text-white/90">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-sans uppercase tracking-[0.35em] text-primary">Error 404</p>
        <h1 className="text-5xl font-serif font-bold md:text-7xl">
          This Page Is <span className="text-gradient-copper">Missing</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base font-sans text-white/70 md:text-lg">
          The link may be outdated, or the URL might be incorrect. Use one of the options below to continue browsing TopCoat Artistry services.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-primary px-7 py-3 font-sans text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Back To Home
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 px-7 py-3 font-sans text-sm font-medium text-white/90 transition hover:border-primary/60 hover:text-primary"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
}
